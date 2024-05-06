"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateProductId = exports.ProductId = void 0;
const util_1 = require("../util");
const base_id_1 = require("./base-id");
class ProductId extends base_id_1.BaseId {
    constructor(id) {
        super(id);
    }
}
exports.ProductId = ProductId;
function generateProductId() {
    return (0, util_1.generateEntityId)('PRD');
}
exports.generateProductId = generateProductId;
