import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Search from "./Product/_components/Search";
import ProductTable from "./Product/_components/ProductTable";
import { setProducts } from "../redux/product/productActions";

const Product = () => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const initialProducts = [
      { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
      { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
      { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
      { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
      { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
      { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    ];

    dispatch(setProducts(initialProducts));
  }, [dispatch]);

  return (
    <div className="product-container">
      <Search
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};

export default Product;
