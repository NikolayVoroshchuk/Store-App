export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IProducts {
  [key: string]: IProduct;
}

export interface IAllProducts {
  products: Array<IProducts>;
  error: boolean;
}

export interface ICategories {
  categories: Array<string>;
  isLoading: boolean;
  error: boolean;
}

export interface ISpecificCategory {
  specificCategories: Array<string>;
  isLoading: boolean;
  error: boolean;
}

export interface ISingleProduct {
  product: IProduct;
  error?: boolean;
}

export interface IState {
  categories: ICategories;
  specificCategories: ISpecificCategory;
  allProducts: IAllProducts;
  singleProduct: ISingleProduct;
  cart: ICart;
  favorite: IFavorite;
}

export interface ICart {
  cartItems: any;
}

export interface ICartProducts {
  id?: number;
  title: string;
  price: number;
  image: string;
  itemQty?: any;
}

export interface IFavorite {
  favoriteItems: Array<IFvoriteProduct>;
}

export interface IFvoriteProduct {
  id: number;
  image: string;
  price: number;
  title: string;
}

export interface ICard {
  id: number;
  title: string;
  price: number;
  category?: string;
  description?: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
  addToCart: (arg: ICartProducts) => void;
}
