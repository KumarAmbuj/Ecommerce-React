import Button from "../Button";
import "./index.css";
import { FaStar } from "react-icons/fa";
import Tag from "../tag";
function ProductCard(props) {
  const { product, id, incrementHandler, decrementHandler } = props;
  const { title, price, discountPercentage, rating, thumbnail, quantity } =
    product;

  return (
    <>
      <div className="card">
        {/** <div className="discount">
          {Math.floor(discountPercentage) + " % Off"}
        </div>
        */}
        <Tag value={discountPercentage} />
        <div className="image">
          <img src={thumbnail} />
        </div>
        <div className="productNameQuantity">
          <div className="productName">
            {title.substring(0, 1).toUpperCase() +
              title.substring(1, 16).toLowerCase()}
          </div>
          <div className="productQuantity">
            <FaStar
              style={{
                color: "rgb(246,190,0)",
                fontSize: "14px",
                marginRight: "5px",
              }}
            />
            {rating}
          </div>
        </div>
        <div className="productPriceButton">
          <div className="productPrice">$ {price}.0</div>
          <div className="productButton">
            <Button id={id} incrementHandler={incrementHandler} decrementHandler={decrementHandler} quantity={quantity}/>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductCard;
