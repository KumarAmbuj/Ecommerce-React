import "./index.css";
function Input(props) {
  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          className="input"
          placeholder="search ..."
          {...props}
        ></input>
      </div>
    </>
  );
}
export default Input;
