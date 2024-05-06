export const ORDER_STATUS = {
  PENDING: 'pending',
  PAID: 'paid',
  APPROVED: 'approved',
  CANCELLED: 'cancelled',
  CANCELLING: 'cancelling',
} as const;

type EnumType<T> = T[keyof T];
export type OrderStatus = EnumType<typeof ORDER_STATUS>;
