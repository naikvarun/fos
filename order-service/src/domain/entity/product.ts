import { BaseEntity, Money, ProductId } from '@fos/common';

export class Product extends BaseEntity<ProductId> {
  updateNameAndPrice(name: string, price: Money) {
    this._name = name;
    this._price = price;
  }
  equals(product: Product): boolean {
    return this.id.equals(product.id);
  }
  private _name: string;
  private _price: Money;

  public constructor(productId: ProductId, name: string, price: Money) {
    super(productId);
    this._name = name;
    this._price = price;
  }

  get name(): string {
    return this._name;
  }

  get price(): Money {
    return this._price;
  }
}
