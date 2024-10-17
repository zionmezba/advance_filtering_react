import { useState } from 'react'
import Navigation from './navigation/Nav';
import Products from './product/Products';
import Recommended from './recommended/Recommended';
import Sidebar from './sidebar/Sidebar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
    </>
  )
}

export default App;
