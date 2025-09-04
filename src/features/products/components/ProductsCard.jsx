import React, { useState, useEffect } from "react";
import productsData from "../data/products.json";
import ProductCard from "./ProductCard";

const ProductsCard = ({ addToCart, searchQuery }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery?.toLowerCase() || "")
  );

  const nextSlide = () => {
    if (currentIndex < filteredProducts.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="catalog-container" id="catalogo">
      <h1 className="tituloCatalogo">Catálogo</h1>
      <div className="carousel">
        <button className="arrow left" onClick={prevSlide}>
          ❮
        </button>

        <div className="carousel-track">
          {filteredProducts
            .slice(currentIndex, currentIndex + 3)
            .map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                category={product.category}
                description={product.description}
                price={product.price}
                rating={product.rating}
                addToCart={addToCart}
              />
            ))}
        </div>

        <button className="arrow right" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
