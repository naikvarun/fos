"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEntityId = exports.generateId = void 0;
const nanoid_1 = require("nanoid");
const nanoId = (0, nanoid_1.customAlphabet)('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
function generateId(size = 8) {
    return nanoId(size);
}
exports.generateId = generateId;
function generateEntityId(entityPrefix) {
    return `${entityPrefix}-${generateId}`;
}
exports.generateEntityId = generateEntityId;
