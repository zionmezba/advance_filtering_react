import { useState } from 'react'
import Navigation from './navigation/Nav';
import Products from './product/Products';
import Recommended from './recommended/Recommended';
import Sidebar from './sidebar/Sidebar';
import Card from './components/Card';

//Database
import products from './db/data';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //Input Filter
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  // Radio Filter
  const handleRadioChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Buttons Filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredData = products;

    // Filtering input Items
    if (query) {
      filteredData = filteredItems.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Selected Filter
    if (selected) {
      filteredData = filteredData.filter((item) =>
        item.category === selected || item.color === selected ||
        item.company === selected || item.newPrice === selected ||
        item.title === selected
      );
    }

    return filteredData.map(({ img, title, star, reviews, prevPrice, newPrice }) =>
      <Card 
      img={img} 
      title={title} 
      star={star} 
      reviews={reviews} 
      prevPrice={prevPrice} 
      newPrice={newPrice} 
      key={Math.random()} />
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleRadioChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  )
}

export default App;
