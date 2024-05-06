import { BaseEntity, Money, ProductId } from '@fos/common';

export class Product extends BaseEntity<ProductId> {
  public readonly name: string;
  public readonly price: Money;

  public constructor(productId: ProductId, name: string, price: Money) {
    super(productId);
    this.name = name;
    this.price = price;
  }
}
