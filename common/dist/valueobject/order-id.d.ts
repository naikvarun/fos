import { BaseId } from './base-id';
export declare class OrderId extends BaseId<string> {
    constructor(id: string);
}
export declare function generateOrderId(): string;
