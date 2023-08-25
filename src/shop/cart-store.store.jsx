import { create } from "zustand";

const getInitialCart = () => {
  try {
    const cartFromStorage = localStorage.getItem("cart");
    console.log(cartFromStorage);
    return cartFromStorage ? JSON.parse(cartFromStorage) : [];
  } catch {
    return [];
  }
};

const useCartStore = create((set) => ({
  selectedSize: null,
  setSelectedSize: (size) => set({ selectedSize: size }),
  cart: getInitialCart(),

  addToCart: (product) => {
    set((state) => {
      const newCart = [
        ...state.cart,
        {
          ...product,
          quantity: 1,
        },
      ];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    });
  },

  removeFromCart: (productToRemove) => {
    const state = useCartStore.getState();

    console.log(state.cart);
    console.log(productToRemove);

    const newCart = [...state.cart];

    const index = newCart.findIndex((item) => item.id === productToRemove.id);

    newCart.splice(index, 1);

    if (newCart.length === 0) {
      localStorage.removeItem("cart");
      set({ cart: [] });
      return;
    }

    localStorage.setItem("cart", JSON.stringify(newCart));

    set({
      cart: [...newCart],
    });
  },

  resetCart: () => {
    localStorage.removeItem("cart");
    set({ cart: [] });
  },

  updateIfExists: (product) => {
    const state = useCartStore.getState();

    const updatedCart = state.cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    set({
      cart: [...updatedCart],
    });
  },

  decreaseCartItemQuantity: (productToDecrease) => {
    const state = useCartStore.getState();

    const newCart = [...state.cart];

    const updatedQuantity = productToDecrease.quantity - 1;

    if (updatedQuantity === 0) {
      state.removeFromCart(productToDecrease);
      return;
    }

    const updatedCart = newCart.map((product) => {
      if (product.id === productToDecrease.id) {
        return {
          ...product,
          quantity: updatedQuantity > 0 ? updatedQuantity : 0,
        };
      }
      return product;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    set({
      cart: [...updatedCart],
    });
  },

  increaseCartItemQuantity: (productToIncrease) => {
    const state = useCartStore.getState();

    const newCart = [...state.cart];

    const updatedCart = newCart.map((product) => {
      if (product.id === productToIncrease.id) {
        const updatedQuantity = product.quantity + 1;
        return {
          ...product,
          quantity: updatedQuantity,
        };
      }
      return product;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    set({
      cart: [...updatedCart],
    });
  },
}));

export default useCartStore;
