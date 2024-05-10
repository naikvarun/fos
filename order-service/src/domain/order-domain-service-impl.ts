import { Order } from './entity/order';
import { Restaurant } from './entity/restaurant';
import { OrderCancelledEvent, OrderCreatedEvent, OrderPaidEvent } from './events/order-events';
import { OrderDomainException } from './exception/order-domain-exception';
import { OrderDomainService } from './order-domain-service';
import { Logger } from 'pino';

export class OrderDomainServiceImpl implements OrderDomainService {
  logger: Logger;
  constructor(logger: Logger) {
    this.logger = logger;
  }
  validateAndInitializeOrder(order: Order, restaurant: Restaurant): OrderCreatedEvent {
    this.validateRestaurant(restaurant);
    this.setOrderProductInformation(order, restaurant);
    order.validate();
    order.initialize();
    this.logger.info('Order validated and initialized with id %s', order.id);
    return {
      type: 'order-created',
      data: order,
      createdAt: new Date(),
    };
  }

  payOrder(order: Order): OrderPaidEvent {
    order.pay();
    this.logger.info(`Order ${order.id} paid`);
    return {
      type: 'order-paid',
      data: order,
      createdAt: new Date(),
    };
  }

  approveOrder(order: Order): void {
    order.approve();
    this.logger.info(`Order ${order.id} approved`);
  }

  cancelOrderPayment(order: Order, failureMessages: string[]): OrderCancelledEvent {
    order.initCancel(failureMessages);
    this.logger.info(`Order ${order.id} init cancelled`);
    return {
      type: 'order-cancelled',
      data: order,
      createdAt: new Date(),
    };
  }

  cancelOrder(order: Order, failureMessages: string[]): void {
    order.cancel(failureMessages);
    this.logger.info(`Order ${order.id} cancelled`);
  }

  validateRestaurant(restaurant: Restaurant) {
    if (!restaurant.active) {
      throw new OrderDomainException(`Restaurant ${restaurant.id} is not active`);
    }
  }

  setOrderProductInformation(order: Order, restaurant: Restaurant) {
    order.items.forEach((item) => {
      restaurant.products.forEach((product) => {
        const currentProduct = item.product;
        if (currentProduct.equals(product)) {
          currentProduct.updateNameAndPrice(product.name, product.price);
        }
      });
    });
  }
}
