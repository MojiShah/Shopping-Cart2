import React from 'react';
import Header from './components/Header/Header';
import Product from './components/Products/Product';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <div className="container mt-4">
        <Header />
        <Product />
      </div>
      <Footer />

    </>
  )
}

export default App