import { memo } from "react";

const SearchWrapper = (props) => {
  const {
    className,
    id,
    placeholder = "Find currency...",
    findCurrency
  } = props;

  return (
    <div
      className={`search-wrapper ${className ? className : ""}`}
    >
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        onInput={(event) => findCurrency(event.target.value, id)}
      />
    </div>
  );
};

export default memo(SearchWrapper);
