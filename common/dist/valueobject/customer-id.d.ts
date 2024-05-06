import { BaseId } from "./base-id";
export declare class CustomerId extends BaseId<string> {
    constructor(id: string);
}
export declare function generateCustomerId(): string;
