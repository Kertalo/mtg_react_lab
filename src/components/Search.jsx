import React, { useState } from 'react';

function Search({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    onSearch(inputValue);
  };

  return (
    <div key="search">
      <input
        type="text"
        value={inputValue}
        key="searchText"
        onChange={handleInputChange}
        placeholder="Put some text please"
      />
      <button key="searchButton" onClick={handleButtonClick}>Search</button>
    </div>
  );
}

export {Search};