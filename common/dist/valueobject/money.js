"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Money = void 0;
class Money {
    constructor(amount) {
        this.amount = amount;
    }
    get value() {
        return this.amount;
    }
    equals(other) {
        if (!(other instanceof Money)) {
            return false;
        }
        return this.amount === other.amount;
    }
    add(other) {
        return new Money(this.amount + other.amount);
    }
    isEqualTo(other) {
        return this.amount === other.amount;
    }
    isGreaterThan(other) {
        return this.amount > other.amount;
    }
    multiply(multiplier) {
        return new Money(this.amount * multiplier);
    }
    toString() {
        return `${this.amount}`;
    }
}
exports.Money = Money;
