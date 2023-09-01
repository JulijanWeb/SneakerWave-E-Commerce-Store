import { useState } from "react";
import useProductsStore from "../../routes/shop/product.store";
import { FiRefreshCcw } from "react-icons/fi";

import "./filter.styles.scss";
const Filter = () => {
  const { categories, brands, setFilters, resetFilters, filters } =
    useProductsStore();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    const oldFilters = filters;
    if (e.target.value !== "") {
      setFilters({
        brands: oldFilters.brands,
        categories: [categories.find((c) => c.name === e.target.value).id],
      });
    } else {
      setFilters({
        brands: oldFilters.brands,
        categories: [],
      });
    }
  };
  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    const oldFilters = filters;
    if (e.target.value !== "") {
      setFilters({
        categories: oldFilters.categories,
        brands: [brands.find((b) => b.name === e.target.value).id],
      });
    } else {
      setFilters({
        categories: oldFilters.categories,
        brands: [],
      });
    }
  };

  return (
    <div className="filter-box">
      <label htmlFor="category"></label>
      <select
        className="dropdown"
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">Sve kategorije</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>

      <label htmlFor="brand"></label>
      <select
        className="dropdown"
        id="brand"
        value={selectedBrand}
        onChange={handleBrandChange}
      >
        <option value="">Svi brandovi</option>
        {brands.map((brand) => (
          <option key={brand.id} value={brand.name}>
            {brand.name}
          </option>
        ))}
      </select>
      <button className="removeAll" onClick={resetFilters}>
        <FiRefreshCcw />
      </button>
    </div>
  );
};

export default Filter;
