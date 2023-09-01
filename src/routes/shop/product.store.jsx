import { create } from "zustand";
import db from "../../core/utils/firebase.utils";
import { collection, getDocs } from "firebase/firestore";

const useProductsStore = create((set, get) => ({
  products: [],
  filters: {
    brands: [],
    categories: [],
  },
  brands: [],
  categories: [],

  setFilters: (filters) => {
    set({ filters });
  },

  resetFilters: () => {
    set({ filters: { brands: [], categories: [] } });
  },

  setProducts: async (products) => {
    const brandsRef = collection(db, "brands");
    const categoriesRef = collection(db, "category");

    const brandsQuery = await getDocs(brandsRef);
    const categoriesQuery = await getDocs(categoriesRef);

    const brands = [];

    brandsQuery.forEach((doc) => {
      brands.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    const categories = [];

    categoriesQuery.forEach((doc) => {
      categories.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    const categoriesWithoutBrands = [];
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].name !== "Brands") {
        categoriesWithoutBrands.push(categories[i]);
      }
    }

    set({ brands: brands });
    set({ categories: categoriesWithoutBrands });

    const newProducts = products.map((product) => {
      const brand = brands.find((brand) => brand.id === product.brandId);
      const category = categories.find(
        (category) => category.id === product.categoryId
      );

      return {
        ...product,
        brand,
        category,
      };
    });

    set({ products: newProducts });
  },
}));

export default useProductsStore;
