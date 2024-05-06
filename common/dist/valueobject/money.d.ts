export declare class Money {
    private readonly amount;
    private constructor();
    get value(): number;
    equals(other: unknown): boolean;
    add(other: Money): Money;
    isEqualTo(other: Money): boolean;
    isGreaterThan(other: Money): boolean;
    multiply(multiplier: number): Money;
    toString(): string;
}
