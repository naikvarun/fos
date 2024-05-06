"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRestaurantId = exports.RestaurantId = void 0;
const util_1 = require("../util");
const base_id_1 = require("./base-id");
class RestaurantId extends base_id_1.BaseId {
    constructor(id) {
        super(id);
    }
}
exports.RestaurantId = RestaurantId;
function generateRestaurantId() {
    return (0, util_1.generateEntityId)('RST');
}
exports.generateRestaurantId = generateRestaurantId;
