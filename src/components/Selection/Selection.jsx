import SearchWrapper from "./SearchWrapper";
import Currency from "./Currency";
import { useContext } from "react";
import { ConverterContext } from "../../Context/ConverterContext";

const Selection = () => {
  const {
    currencyList,
    fromCurrency,
    toCurrency,
    handleChange,
    handleToCHange,
    findCurrency,
    filteredCurrencyOne,
    filteredCurrencyTwo,
  } = useContext(ConverterContext);
  return (
    <div className="selection">
      <p className="text">Convert from:</p>
      <SearchWrapper id="searchCurrencyOne" findCurrency={findCurrency} />
      <Currency
        name="currency1"
        id="currencyOne"
        value={fromCurrency}
        onChange={handleChange}
        currencyList={currencyList}
        filteredCurrency={filteredCurrencyOne}
      />

      <p className="text texttwo">to:</p>
      <SearchWrapper
        className="two"
        id="searchCurrencyTwo"
        findCurrency={findCurrency}
      />
      <Currency
        name="currency2"
        id="currencyTwo"
        value={toCurrency}
        onChange={handleToCHange}
        currencyList={currencyList}
        filteredCurrency={filteredCurrencyTwo}
      />
    </div>
  );
};

export default Selection;
