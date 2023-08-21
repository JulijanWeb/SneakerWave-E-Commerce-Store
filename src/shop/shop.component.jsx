import { useEffect } from "react";
import useProductsStore from "./store.component";
import SHOP_DATA from "../shop-data.json";
import ProductCard from "../components/product-card/product-card.component.jsx";
import "./shop.styles.scss";
const Shop = () => {
  const setProducts = useProductsStore((state) => state.setProducts);

  useEffect(() => {
    setProducts(SHOP_DATA);
  }, [setProducts]);

  return (
    <div className="products-container">
      {SHOP_DATA.map((product) => (
        <ProductCard
          key={product.id}
          imageUrl={product.imageUrl}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Shop;
