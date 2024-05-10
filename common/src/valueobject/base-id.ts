export abstract class BaseId<ID> {
  private _value: ID;
  protected constructor(value: ID) {
    this._value = value;
  }
  get value() {
    return this._value;
  }

  public equals(other: BaseId<ID>): boolean {
    return this._value === other._value;
  }
}
