import React, { useEffect, useState } from 'react';
import { productService } from '../../services';
import { ProductComponent } from '../../components';
import './style.css';

const Product = () => {
  const [product, setProduct] = useState([]);
  const [isLoginLoading, setLoginLoading] = useState(false);
  
  useEffect(() => {
    setLoginLoading(true);
    productService
      .getProduct(50,0,'')
      .then((res) => {
        // console.log(res.username);
        setProduct(res.data);
        console.log(product);
        // setEmail(res.data.email);
      })
      .catch((err) => {
        return console.log(err);
      })
      .finally(() => {
        setLoginLoading(false);
      });
    }, []);

  return (
    <div>
        <div className="container">
      <div className="heading"><h1> Product { isLoginLoading }</h1></div>
      { isLoginLoading && <p>Loading...</p> }
      { product.map((element) =>{
        return <ProductComponent data = { element } className="container">
          
        </ProductComponent>
        })}
    </div>
    </div>

  );
};

export default Product;
