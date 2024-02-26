import React from 'react';
import './FactorList.css';

const FactorList = (props) => {

  const removeHandler = () => props.onRemove();

  return (
    <tr>
      <td>
        <div className="img">
          <img src={props.image} alt="productlist" />
        </div>
        <div className="name">
          {props.name}
        </div>
      </td>
      <td><div>${props.price}</div></td>
      <td>
        <button className='btn btn-danger' onClick={removeHandler}>remove</button>
      </td>
    </tr>
  )
}

export default FactorList;