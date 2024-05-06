import { BaseId } from "./base-id";
export declare class ProductId extends BaseId<string> {
    constructor(id: string);
}
export declare function generateProductId(): string;
