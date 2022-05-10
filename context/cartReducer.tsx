import type { Action, State, CartProduct } from './types';

const calculateTotalPrice = (products: CartProduct[]) => {
  return products.reduce((acc, curr) => acc + curr.price, 0);
};

export const cartReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'addProduct': {
      const products = [...state.products];
      const newProduct = action.payload;

      const isTheNewProductInCart = products.find((product) => product.id === newProduct.id);
      if (isTheNewProductInCart) return { ...state };

      const newProducts = [newProduct, ...products];
      const totalPrice = calculateTotalPrice(newProducts);

      return {
        isOpen: true,
        products: newProducts,
        totalPrice,
      };
    }
    case 'deleteProduct': {
      const products = [...state.products];
      const deletedProductID = action.payload;

      const newProducts = products.filter((product) => product.id !== deletedProductID);
      const totalPrice = calculateTotalPrice(newProducts);

      return {
        ...state,
        products: newProducts,
        totalPrice,
      };
    }
    case 'openCart': {
      return {
        ...state,
        isOpen: true,
      };
    }
    case 'closeCart': {
      return {
        ...state,
        isOpen: false,
      };
    }
    default: {
      throw new Error('Unhandled action type');
    }
  }
};
