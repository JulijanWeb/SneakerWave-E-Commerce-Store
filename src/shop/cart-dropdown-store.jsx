import { create } from "zustand";

const useDropDownStore = create((set) => ({
  isCartOpen: false,
  setIsCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
}));

export default useDropDownStore;
