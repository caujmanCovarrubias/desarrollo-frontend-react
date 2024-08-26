import React from 'react';

const Search = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {
  return (
    <form className="search-form">
      <div className="input-group">
        <input 
          type="text" 
          placeholder="Buscar productos..." 
          value={filterText} 
          onChange={(event) => onFilterTextChange(event.target.value)} 
          className="search-input"
        />
      </div>
      <div className="checkbox-group">
        <label>
          <input 
            type="checkbox" 
            checked={inStockOnly} 
            onChange={(event) => onInStockOnlyChange(event.target.checked)} 
            className="checkbox-input"
          />
          {' '}Mostrar solo productos en stock
        </label>
      </div>
    </form>
  );
};

export default Search;