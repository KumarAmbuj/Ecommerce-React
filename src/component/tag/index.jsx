import "./index.css";
function Tag(props) {
  return <div className="discount">{props.value + " %"}</div>;
}

export default Tag;
