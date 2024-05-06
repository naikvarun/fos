import { BaseId, generateEntityId } from "@fos/common";

export class OrderItemId extends BaseId<string> {
    constructor(id: string) {
        super(id)
    }
}

export function generateOrderItemId() {
    return generateEntityId('ITM')
}