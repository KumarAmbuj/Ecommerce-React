import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import ProductCard from "./component/product-card";
import Home from "./screen/home/home";
import Input from "./component/input";
function App() {
  {
    /*const [val, setVal] = useState("");
  const [data, setData] = useState({});
  useEffect(() => {
    async function changeHandler(e) {
      let x = await fetch(`https://dummyjson.com/products/search?q=${val}`);
      x = await x.json();
      setData(x);
      console.log(data);
    }
    changeHandler();
  }, [val]);*/
  }
  return (
    <>
      <Header />
      {/*<Input />*/}
      <Home />
      {/*<div className="productList">
        <Home />
  </div>*/}
    </>
  );
}

export default App;
