import { BaseEntity, Money, OrderId } from '@fos/common';
import { OrderItemId } from '../valueobject/order-item-id';
import { Product } from './product';

export class OrderItem extends BaseEntity<OrderItemId> {
  public orderId: OrderId;
  public readonly product: Product;
  public readonly quantity: number;
  public readonly price: Money;
  public readonly subTotal: Money;

  public constructor(builder: ReturnType<typeof OrderItem.builder>) {
    super();
    super.id = builder.id;
    this.orderId = builder.orderId;
    this.product = builder.product;
    this.quantity = builder.quantity;
    this.price = builder.price;
    this.subTotal = builder.subTotal;
  }

  public static builder() {
    let state: Partial<Pick<OrderItem, 'id' | 'orderId' | 'price' | 'product' | 'quantity' | 'subTotal'>> = {};

    let itemBuilder = {
      withOrderItemId(id: OrderItemId) {
        state = { ...state, id };
        return itemBuilder;
      },
      get id() {
        return state.id!;
      },
      withOrderId(orderId: OrderId) {
        state = { ...state, orderId };
        return itemBuilder;
      },
      get orderId() {
        return state.orderId!;
      },
      withProduct(product: Product) {
        state = { ...state, product };
        return itemBuilder;
      },
      get product() {
        return state.product!;
      },
      withQuantity(quantity: number) {
        state = { ...state, quantity };
        return itemBuilder;
      },
      get quantity() {
        return state.quantity!;
      },
      withPrice(price: Money) {
        state = { ...state, price };
        return itemBuilder;
      },
      get price() {
        return state.price!;
      },
      withSubTotal(subTotal: Money) {
        state = { ...state, subTotal };
        return itemBuilder;
      },
      get subTotal() {
        return state.subTotal!;
      },
      build() {
        return new OrderItem(itemBuilder);
      },
    };
    return itemBuilder;
  }
}
