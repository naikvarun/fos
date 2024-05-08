export class Money {
  private readonly amount: number;
  private constructor(amount: number) {
    this.amount = amount;
  }
  public static readonly ZERO: Money = new Money(0);
  public static fromAmount(amount: number) {
    return new Money(amount);
  }
  get value() {
    return this.amount;
  }

  public equals(other: unknown) {
    if (!(other instanceof Money)) {
      return false;
    }
    return this.amount === other.amount;
  }
  public add(other: Money) {
    return new Money(this.amount + other.amount);
  }

  isEqualTo(other: Money) {
    return this.amount === other.amount;
  }

  isGreaterThan(other: Money) {
    return this.amount > other.amount;
  }

  multiply(multiplier: number) {
    return new Money(this.amount * multiplier);
  }

  toString() {
    return `${this.amount}`;
  }
}
