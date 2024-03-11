/** @format */

import { useEffect, useState } from "react";
import "./App.css";
import imports from "./components/function/test.js";
import moduleName from "./components/function/test.jsx";
import Products from "./Products.jsx";
function App() {
// 	imports();
// 	moduleName();
// // const checkValue = ; 
// console.log(useState(''));
// const [count,setCount] = useState(0);
// console.log('first reload');
// useEffect(() => {
// },[])
//  const clickHandler = () => {
//   setCount(count + 1)
//  }
const [products,setProducts] = useState([]);
useEffect(()=>{
  fetch(`https://fakestoreapi.com/products`)
  .then(res => res.json())
  .then(data => setProducts(data))
},[])


	return (
      <div>
        <h3>Products shop</h3>
        {products.map(item => <Products items={item}></Products>)}
      </div>
	);
}

export default App;
