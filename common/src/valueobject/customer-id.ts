import { generateEntityId } from "../util"
import { BaseId } from "./base-id"

export class CustomerId extends BaseId<string> {
    constructor(id: string) {
        super(id)
    }
}
export function generateCustomerId() {
    return generateEntityId('CST')
}