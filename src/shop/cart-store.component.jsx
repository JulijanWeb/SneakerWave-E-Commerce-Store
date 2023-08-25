import { create } from "zustand";

const useCartStore = create((set) => ({
  selectedSize: null,
  setSelectedSize: (size) => set({ selectedSize: size }),
  cart: [],
  addToCart: (product) => {
    set((state) => ({ cart: [...state.cart, product] }));
  },

  removeFromCart: (productToRemove) => {
    set((state) => ({
      cart: state.cart.filter((product) => product !== productToRemove),
    }));
  },

  resetCart: () => set({ cart: [] }),

  updateIfExists: (product) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  },

  decreaseCartItemQuantity: (productToDecrease) => {
    set((state) => ({
      cart: state.cart.map((product) => {
        if (product === productToDecrease) {
          const updatedQuantity = product.quantity - 1;
          return {
            ...product,
            quantity: updatedQuantity > 0 ? updatedQuantity : 0,
          };
        }
        return product;
      }),
    }));
  },
}));

export default useCartStore;
