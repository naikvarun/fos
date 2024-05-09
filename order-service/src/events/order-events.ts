import { DomainEvent } from '@fos/common';
import { Order } from '../entity/order';

export type OrderCreatedEvent = DomainEvent<'order-created', Order>;
export type OrderPaidEvent = DomainEvent<'order-paid', Order>;
export type OrderCancelledEvent = DomainEvent<'order-cancelled', Order>;
