import './App.css';
//import Counter from './Counter';
import ErrorBoundary from './ErrorBoundary';
import { lazy, Suspense, useState } from 'react';
import Cart from './Cart';
import Product from './Product.js';

const Counter = lazy(() => import ('./Counter'));

function App() {
  const [show, setShow] = useState(false);

  const handleClick=()=> {setShow(!show);};


  return (
    <div className="App">
      <div>
        <Product/>
        <Cart/>
      <button onClick={handleClick}>Toggle</button>
      </div>
      {show && (
      <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <Counter/>
      </ErrorBoundary>
      </Suspense>
      )}
    </div>
  );
}

export default App;
