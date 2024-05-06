import { generateEntityId } from "../util"
import { BaseId } from "./base-id"

export class ProductId extends BaseId<string> {
    constructor(id: string) {
        super(id)
    }
}
export function generateProductId() {
    return generateEntityId('PRD')
}