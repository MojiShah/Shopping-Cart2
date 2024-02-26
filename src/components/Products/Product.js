import React, { useEffect, useState } from 'react';
import productsData from '../../ProductsData';
import Laptop from './Laptop/Laptop';
import Phone from './Phone/Phone';
import Furniture from './Furniture/Furniture';
import Supermarket from './Supermarket/Supermarket';
import FactorList from '../Factor/FactorList';


import './Product.css';


export default function Product() {

  const [products, setProducts] = useState(productsData);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [number, setNumber] = useState(0);
  const [totalPrice,setTotalPrice]=useState(0);

  useEffect(() => {
    setTotalPrice(0);
    calculateTotalPrice()
  }, [shoppingCart]);

  const addToCart = id => {
    setNumber(number + 1);
    // calculateTotalPrice();

    let allProductsArray = Object.entries(products);
    let allProductList = [...allProductsArray[0][1],
    ...allProductsArray[1][1],
    ...allProductsArray[2][1],
    ...allProductsArray[3][1]];

    let selectedProduct = allProductList.find(x => x.id === id);

    setShoppingCart([...shoppingCart, selectedProduct]);

    

  }

  function calculateTotalPrice(){
    for (let i = 0; i < shoppingCart.length; i++) {
      // totalPrice += shoppingCart[i].price;
      setTotalPrice(prevstate => prevstate + shoppingCart[i].price);
    }
  }

  const removeProduct = id => {
    let filteredProducts = shoppingCart.filter(x => x.id !== id);
    setShoppingCart(filteredProducts);
  }

  const emptyProducts = () => setShoppingCart([]);

  return (
    <>
      <h1 className='mt-3'>Laptop</h1>
      <div className="laptops">
        {products.laptop.map(x => <Laptop key={x.id} {...x}
          onAddProduct={(id) => addToCart(id)} />)}
      </div>
      <hr />

      <h1 className='mt-3'>Cell Phone</h1>
      <div className="laptops">
        {products.phone.map(x => <Phone key={x.id} {...x}
          onAddProduct={(id) => addToCart(id)} />)}
      </div>
      <hr />

      <h1 className='mt-3'>Furniture</h1>
      <div className="laptops">
        {products.furniture.map(x => <Furniture key={x.id} {...x}
          onAddProduct={(id) => addToCart(id)} />)}
      </div>
      <hr />

      <h1 className='mt-3'>Supermarket</h1>
      <div className="laptops">
        {products.supermarket.map(x => <Supermarket key={x.id} {...x}
          onAddProduct={(id) => addToCart(id)} />)}
      </div>


      <div className='products_list'>
        <h1 className='mt-5'>Product List</h1>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }}>Product name</th>
              <th style={{ textAlign: 'center' }}>Price</th>
              <th style={{ textAlign: 'center' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {shoppingCart.map(x =>
              <FactorList key={x.id * Math.random()}
                {...x}
                number={number}
                onRemove={() => removeProduct(x.id)}
              />)}

          </tbody>
        </table>

        <div style={{ textAlign: "center", fontSize: 22, fontWeight: 'bold', width: '100%' }}>
          Total Price: ${totalPrice}
        </div>

        <button className='btn btn-primary'
          onClick={emptyProducts}
        >Empty Cart</button>
      </div>

    </>
  )
}








