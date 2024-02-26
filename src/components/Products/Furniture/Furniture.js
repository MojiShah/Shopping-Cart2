import React from 'react'
import './Furniture.css';


const Furniture = (props) => {
   
    const clickHandler = (id) => {
        props.onAddProduct(id)
    }
    
      return (
          <>
              <div className="container mt-5">
                  <div className="card" style={{ width: '250px' }}>
                      <img className="card-img-top" src={props.image} alt="Card image" style={{ width: '100%' }} />
                      <div className="card-body">
                          <h4 className="card-title">{props.name}</h4>
                          <p className="card-text">price: {props.price} $</p>
                          <a href="#" className="btn btn-primary"
                          onClick={() => clickHandler(props.id)}>Add to cart</a>
                      </div>
                  </div>
              </div>
          </>
      )
  
}

export default Furniture;
