import React from 'react';

const ProductRow = ({ product }) => {
  const name = product.stocked ? product.name : 
    <span className="product-row--out-of-stock">
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;