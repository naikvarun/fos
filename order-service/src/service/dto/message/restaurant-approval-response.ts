import { OrderApprovalStatus } from '@fos/common';

export type RestaurantOrderResponse = {
  id: string;
  sagaId: string;
  orderId: string;
  restaurantId: string;
  createdAt: Date;
  status: OrderApprovalStatus;
  failureMessages?: string[];
};
