import { EnumType } from './enum-type';

export const ORDER_APPROVAL_STATUS = {
  APPROVED: 'approved',
  REJECTED: 'rejected',
} as const;

export type OrderApprovalStatus = EnumType<typeof ORDER_APPROVAL_STATUS>;
