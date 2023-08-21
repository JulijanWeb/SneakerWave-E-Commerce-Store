import { create } from "zustand";

const useProductsStore = create((set) => ({
  products: [], // Početni prazan niz proizvoda
  setProducts: (products) => set({ products }), // Setter funkcija za proizvode
}));

export default useProductsStore;
