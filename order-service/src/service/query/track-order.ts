import { OrderStatus } from '@fos/common';

export type TrackOrderQuery = {
  orderId: string;
};

export type TrackOrderResponse = {
  orderId: string;
  status: OrderStatus;
  failuereMessages?: string[];
};
