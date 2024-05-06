import { generateEntityId } from '../util';
import { BaseId } from './base-id';

export class OrderId extends BaseId<string> {
    constructor(id: string) {
        super(id)
    }
}
export function generateOrderId() {
    return generateEntityId('ORD')
}