import { BaseId } from "./base-id";
export declare class RestaurantId extends BaseId<string> {
    constructor(id: string);
}
export declare function generateRestaurantId(): string;
