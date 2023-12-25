import { useEffect, useState } from "react";
import {
  GET_PRODUCT_LIST,
  GET_CATEGORY_LIST,
  SEARCH_PRODUCT_LIST,
  SEARCH_CATEGORY_LIST,
} from "../../constant/restApiEndPoint";
import ProductCard from "../../component/product-card";
import Input from "../../component/input";
import "./home.css";
import { debounce } from "../../utils";
import Loader from "../../component/loader";
import EmptyScreen from "../../component/empty-screen";
import Dropdown from "../../component/dropdown";
localStorage.setItem("cartCount", 0);
function Home() {
  let [productList, setProductList] = useState({});
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState("");
  const [category, setCategory] = useState([]);
  const [count, setCount] = useState(0);
  async function getProducts(url) {
    try {
      setLoader(true);
      const res = await fetch(url ? url : GET_PRODUCT_LIST);
      let productResponse = await res.json();
      productResponse = {
        ...productResponse,
        products: productResponse.products.map((val) => {
          return { ...val, quantity: 0 };
        }),
      };
      //console.log(productResponse);
      setProductList(productResponse);
      console.log(productList);
    } catch (error) {
      console.error("error", error);
    } finally {
      setLoader(false);
    }
  }
  async function getCategory(url) {
    try {
      setLoader(true);
      const res = await fetch(GET_CATEGORY_LIST);
      const categoryResponse = await res.json();
      setCategory(categoryResponse);
      //console.log(categoryResponse);
      console.log(category);
    } catch (error) {
      console.error("error", error);
    } finally {
      setLoader(false);
    }
  }
  //function handleChange(e) {
  //  const url = SEARCH_PRODUCT_LIST(e.target.value);
  //  getProducts(url);
  //}
  function selectCategory(e) {
    console.log(e.target.value);
    if (e.target.value === "all") {
      getProducts();
    } else {
      const url = SEARCH_CATEGORY_LIST(e.target.value);

      //console.log(url);
      getProducts(url);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    getCategory();
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
    const url = event.target.value
      ? SEARCH_PRODUCT_LIST(event.target.value)
      : "";
    getProducts(url);
  };
  const debounceChange = debounce(handleChange, 500);

  function incrementHandler(e) {
    let id = e.target.id;
    productList = {
      ...productList,
      products: productList.products.map((val) => {
        if (val.id == id) {
          return { ...val, quantity: val.quantity + 1 };
        } else {
          return { ...val };
        }
      }),
    };
    //console.log(e.target.id);
    //console.log("before", productList);
    setProductList(productList);
    //console.log(e.target.id, "increment", productList);
    let x = localStorage.getItem("cartCount");
    localStorage.setItem("cartCount", parseInt(x) + 1);
  }
  function decrementHandler(e) {
    let id = e.target.id;
    productList = {
      ...productList,
      products: productList.products.map((val) => {
        if (val.id == id) {
          return { ...val, quantity: val.quantity - 1 };
        } else {
          return { ...val };
        }
      }),
    };
    //console.log(e.target.id);
    //console.log("before", productList);
    setProductList(productList);
    let x = localStorage.getItem("cartCount");
    localStorage.setItem("cartCount", parseInt(x) - 1);
  }
  return (
    <>
      <div>
        <Input onChange={debounceChange} />
      </div>
      <div>
        <Dropdown options={category} onChange={selectCategory} />
      </div>
      <div className="home">
        {!loader &&
        productList?.products &&
        productList?.products.length >= 1 &&
        Array.isArray(productList?.products) ? (
          productList?.products.map((product) => {
            return (
              <ProductCard
                product={product}
                key={product.id}
                id={product.id}
                incrementHandler={incrementHandler}
                decrementHandler={decrementHandler}
              />
            );
          })
        ) : loader ? (
          <Loader />
        ) : (
          <EmptyScreen
            className="empty"
            title={"No Products Found"}
            description={
              "Your Search did not match any Products, Please Try again"
            }
          />
        )}
      </div>
    </>
  );
}
export default Home;
