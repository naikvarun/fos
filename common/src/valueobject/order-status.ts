import { EnumType } from "./enum-type";

export const ORDER_STATUS = {
  PENDING: 'pending',
  PAID: 'paid',
  APPROVED: 'approved',
  CANCELLED: 'cancelled',
  CANCELLING: 'cancelling',
} as const;

export type OrderStatus = EnumType<typeof ORDER_STATUS>;
