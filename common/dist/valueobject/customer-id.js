"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCustomerId = exports.CustomerId = void 0;
const util_1 = require("../util");
const base_id_1 = require("./base-id");
class CustomerId extends base_id_1.BaseId {
    constructor(id) {
        super(id);
    }
}
exports.CustomerId = CustomerId;
function generateCustomerId() {
    return (0, util_1.generateEntityId)('CST');
}
exports.generateCustomerId = generateCustomerId;
