"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntity = void 0;
class BaseEntity {
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
}
exports.BaseEntity = BaseEntity;
