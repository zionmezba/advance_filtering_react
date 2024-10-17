import { useState } from 'react'
import Navigation from './navigation/Nav';
import Products from './product/Products';
import Recommended from './recommended/Recommended';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <Products />
      <Recommended />
    </>
  )
}

export default App;
