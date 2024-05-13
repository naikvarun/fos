import { EnumType } from './enum-type';

export const PAYMENT_STATUS = {
  COMPLETED: 'completed',
  FAILED: 'failed',
  CANCELLED: 'cancelled',
} as const;

export type PaymentStatus = EnumType<typeof PAYMENT_STATUS>;
