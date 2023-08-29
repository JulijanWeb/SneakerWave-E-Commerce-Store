import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import useProductsStore from "./product.store";
import ProductCard from "../components/product-card/product-card.component.jsx";
import "./shop.styles.scss";
const Shop = () => {
  const { setProducts, products, filters, resetFilters } = useProductsStore();

  const [filteredProducts, setFilteredProducts] = useState(products);

  const PRODUCTS_QUERY = gql`
    query {
      products {
        id
        name
        price
        imageUrl
        sizes
        quantity
        brandId
        categoryId
      }
    }
  `;

  const { loading, error, data } = useQuery(PRODUCTS_QUERY);

  useEffect(() => {
    if (!data) {
      return;
    }
    setProducts(data.products);
  }, [data, setProducts]);

  useEffect(() => {
    if (!products || !filters) {
      return;
    }

    const newProducts = products.filter(
      (product) =>
        filters.brands.includes(product.brandId) ||
        filters.categories.includes(product.categoryId)
    );

    setFilteredProducts(newProducts);
  }, [products, filters]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="products-container">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          sizes={product.sizes}
          imageUrl={product.imageUrl}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          category={product.category}
        />
      ))}
    </div>
  );
};

export default Shop;
