import { customAlphabet } from "nanoid";
const nanoId = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')

export function generateId(size: number = 8) {
    return nanoId(size)
}

export function generateEntityId(entityPrefix: string) {
    return `${entityPrefix}-${generateId}`
}