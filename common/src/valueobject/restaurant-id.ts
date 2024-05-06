import { generateEntityId } from "../util"
import { BaseId } from "./base-id"

export class RestaurantId extends BaseId<string> {
    constructor(id: string) {
        super(id)
    }
}
export function generateRestaurantId() {
    return generateEntityId('RST')
}