import {
  AggregateRoot,
  CustomerId,
  Money,
  OrderId,
  OrderStatus,
  RestaurantId,
  generateOrderId,
  ORDER_STATUS,
} from '@fos/common';
import { StreetAddress } from '../valueobject/street-address';
import { OrderItem } from './order-item';
import { TrackingId, generateTrackingId } from '../valueobject/tracking-id';
import { OrderItemId, generateOrderItemId } from '../valueobject/order-item-id';
import { OrderDomainException } from '../exception/order-domain-exception';

export class Order extends AggregateRoot<OrderId> {
  public customerId: CustomerId;
  public restaurantId: RestaurantId;
  public deliveryAddress: StreetAddress;
  public price: Money;
  public items: OrderItem[];
  public trackingId: TrackingId;
  public status: OrderStatus;
  public failureMessages: string[];

  private constructor(builder: ReturnType<typeof Order.builder>) {
    super(builder.id);
    this.customerId = builder.customerId;
    this.restaurantId = builder.restaurantId;
    this.deliveryAddress = builder.deliveryAddress;
    this.price = builder.price;
    this.items = builder.items;
    this.trackingId = builder.trackingId;
    this.status = builder.status;
    this.failureMessages = builder.failureMessages;
  }

  public initialize() {
    this.id = new OrderId(generateOrderId());
    this.trackingId = new TrackingId(generateTrackingId());
    this.status = ORDER_STATUS.PENDING;
    this.initializeOrderItems();
  }
  private initializeOrderItems() {
    this.items.forEach((item) => {
      item.initialize(this.id, new OrderItemId(generateOrderItemId()));
    });
  }

  public validate() {
    this.validateInitialOrder();
    this.validateTotalPrice();
    this.validateItemsPrice();
  }
  private validateItemsPrice() {
    const itemsTotal = this.items.map((item) => {
      this.validateItemPrice(item)
      return item.subTotal;
    }).reduce((total, itemPrice) => total.add(itemPrice), Money.ZERO);
    if(! this.price.isEqualTo(itemsTotal)) {
      throw new OrderDomainException(`Order price ${this.price} is not equal to total items price ${itemsTotal}`)
    }
  }
  private validateItemPrice(item: OrderItem) {
    if(!item.isPriceValid()) {
      throw new OrderDomainException(`Item price is not valid for ${item.id}`)
    }
  }
  private validateTotalPrice() {
    if (!this.price.isGreaterThan(Money.ZERO)) {
      throw new OrderDomainException('Order price should be greater than zero');
    }
  }
  private validateInitialOrder() {
    if (this.status !== 'pending') {
      throw new OrderDomainException('Order not in valid state for initalization');
    }
  }

  public static builder() {
    let state: Partial<
      Pick<
        Order,
        | 'id'
        | 'customerId'
        | 'restaurantId'
        | 'deliveryAddress'
        | 'items'
        | 'price'
        | 'status'
        | 'failureMessages'
        | 'trackingId'
      >
    > = {};
    let itemBuilder = {
      withId(id: OrderId) {
        state = { ...state, id };
        return itemBuilder;
      },
      get id() {
        return state.id!;
      },
      withCustomerId(customerId: CustomerId) {
        state = { ...state, customerId };
        return itemBuilder;
      },
      get customerId() {
        return state.customerId!;
      },
      withRestaurantId(restaurantId: RestaurantId) {
        state = { ...state, restaurantId };
        return itemBuilder;
      },
      get restaurantId() {
        return state.restaurantId!;
      },
      withDeliveryAddress(deliveryAddress: StreetAddress) {
        state = { ...state, deliveryAddress };
        return itemBuilder;
      },
      get deliveryAddress() {
        return state.deliveryAddress!;
      },
      withItems(items: OrderItem[]) {
        state = { ...state, items };
        return itemBuilder;
      },
      get items() {
        return state.items!;
      },
      withPrice(price: Money) {
        state = { ...state, price };
        return itemBuilder;
      },
      get price() {
        return state.price!;
      },
      withStatus(status: OrderStatus) {
        state = { ...state, status };
        return itemBuilder;
      },
      get status() {
        return state.status!;
      },
      withTrackingId(trackingId: TrackingId) {
        state = { ...state, trackingId };
        return itemBuilder;
      },
      get trackingId() {
        return state.trackingId!;
      },
      withFailureMessages(failureMessages: string[]) {
        state = { ...state, failureMessages };
        return itemBuilder;
      },
      get failureMessages() {
        return state.failureMessages!;
      },
      build() {
        return new Order(itemBuilder);
      },
    };
    return itemBuilder;
  }
}
