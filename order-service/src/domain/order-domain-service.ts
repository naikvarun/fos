import { Order } from './entity/order';
import { Restaurant } from './entity/restaurant';
import { OrderCancelledEvent, OrderCreatedEvent, OrderPaidEvent } from './events/order-events';

export interface OrderDomainService {
  validateAndInitializeOrder(order: Order, restaurant: Restaurant): OrderCreatedEvent;
  payOrder(order: Order): OrderPaidEvent;
  approveOrder(order: Order): void;
  cancelOrderPayment(order: Order, failureMessages: string[]): OrderCancelledEvent;
  cancelOrder(order: Order, failureMessages: string[]): void;
}
