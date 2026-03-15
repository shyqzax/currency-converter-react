const Currency = (props) => {
  const {
    className = "currency",
    name,
    id,
    value,
    onChange,
    currencyList,
    filteredCurrency,
  } = props;

  return (
    <select
      className={className}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
    >
      {(filteredCurrency ?? currencyList).map((cur) => (
        <option value={cur.key} key={cur.id}>
          {cur.key}
        </option>
      ))}
    </select>
  );
};

export default Currency;
