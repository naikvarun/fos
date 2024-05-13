import { PaymentStatus } from '@fos/common';

export type PaymentResponseId = string;
export type PaymentResponseSagaId = string;
export type PaymentResponse = {
  id: PaymentResponseId;
  sagaId: PaymentResponseSagaId;
  orderId: string;
  paymentId: string;
  customerId: string;
  createdAt: Date;
  status: PaymentStatus;
  failureMessages?: string[];
};
