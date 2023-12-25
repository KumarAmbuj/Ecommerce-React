import "./index.css";
function Button(props) {
  let { id, incrementHandler, decrementHandler, quantity } = props;
  if (quantity === 0)
    return (
      <>
        <button className="btn" onClick={incrementHandler} id={id}>
          Add
        </button>
      </>
    );
  else {
    return (
      <>
        <button className="btn" onClick={decrementHandler} id={id}>
          -
        </button>
        {" " + quantity + " "}
        <button className="btn" onClick={incrementHandler} id={id}>
          +
        </button>
      </>
    );
  }
}
export default Button;
