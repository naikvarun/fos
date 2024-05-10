import { AggregateRoot, RestaurantId } from '@fos/common';
import { Product } from './product';

export class Restaurant extends AggregateRoot<RestaurantId> {
  public readonly products: Product[];
  public active: boolean;

  constructor(builder: ReturnType<typeof Restaurant.builder>) {
    super(builder.id);
    this.products = builder.products;
    this.active = builder.active;
  }

  public static builder() {
    let state: Partial<Pick<Restaurant, 'id' | 'products' | 'active'>> = {};
    let restaurantBuilder = {
      withId: (id: RestaurantId) => {
        state = { ...state, id };
        return restaurantBuilder;
      },
      get id(): RestaurantId {
        return state.id!!;
      },
      withProducts: (products: Product[]) => {
        state = { ...state, products };
        return restaurantBuilder;
      },
      get products(): Product[] {
        return state.products!;
      },
      withActive: (active: boolean) => {
        state = { ...state, active };
        return restaurantBuilder;
      },
      get active(): boolean {
        return state.active!;
      },
      build: () => {
        return new Restaurant(restaurantBuilder);
      },
    };
    return restaurantBuilder;
  }
}
