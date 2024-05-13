import { OrderStatus } from '@fos/common';

export type OrderAddress = {
  street: string;
  city: string;
  zip: string;
};

export type OrderItem = {
  productId: string;
  quantity: number;
  price: number;
  subTotal: number;
};

export type CreateOrderCommand = {
  customerId: string;
  restaurantId: string;
  price: number;
  items: OrderItem[];
  address: OrderAddress;
};

export type CreateOrderResponse = {
  orderTrackingId: string;
  status: OrderStatus;
  message: string;
};
