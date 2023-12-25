import "./index.css";
const Dropdown = (props) => {
  const { options, onChange } = props;

  return (
    <select onChange={onChange} className="select">
      <option value={"all"} key={899}>
        All products
      </option>
      {Array.isArray(options) &&
        options?.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
    </select>
  );
};

export default Dropdown;
