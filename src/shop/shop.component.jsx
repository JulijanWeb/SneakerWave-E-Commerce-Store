import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import useProductsStore from "./store.component";
import ProductCard from "../components/product-card/product-card.component.jsx";
import "./shop.styles.scss";
const Shop = () => {
  const setProducts = useProductsStore((state) => state.setProducts);
  const PRODUCTS_QUERY = gql`
    query {
      products {
        id
        name
        price
        imageUrl
        sizes
        quantity
      }
    }
  `;

  const { loading, error, data } = useQuery(PRODUCTS_QUERY);

  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data, setProducts]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="products-container">
      {data.products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          sizes={product.sizes}
          imageUrl={product.imageUrl}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
        />
      ))}
    </div>
  );
};

export default Shop;
