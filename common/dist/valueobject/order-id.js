"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOrderId = exports.OrderId = void 0;
const util_1 = require("../util");
const base_id_1 = require("./base-id");
class OrderId extends base_id_1.BaseId {
    constructor(id) {
        super(id);
    }
}
exports.OrderId = OrderId;
function generateOrderId() {
    return (0, util_1.generateEntityId)('ORD');
}
exports.generateOrderId = generateOrderId;
