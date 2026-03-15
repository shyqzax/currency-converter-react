import { useEffect, useState } from "react";
import Selection from "./Selection/Selection";
import Sum from "./Sum/Sum";
import { ConverterContext } from "../Context/ConverterContext";

const Interface = () => {
  const [fromCurrency, setFromCurrency] = useState(() => {
    const savedFromCurrency = localStorage.getItem("currencyOne");

    if (savedFromCurrency) {
      return JSON.parse(savedFromCurrency);
    }

    return "USD";
  });
  const [toCurrency, setToCurrency] = useState(() => {
    const savedToCurrency = localStorage.getItem("currencyTwo");

    if (savedToCurrency) {
      return JSON.parse(savedToCurrency);
    }

    return "RUB";
  });
  const [rates, setRates] = useState({});
  const [currencyList, setCurrentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchCurrency, setSearchCurrency] = useState({
    searchCurrencyOne: "",
    searchCurrencyTwo: "",
  });
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);

  const handleChange = (event) => {
    setFromCurrency(event.target.value);
  };
  const handleToCHange = (event) => {
    setToCurrency(event.target.value);
  };
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const convertBtn = () => {
    const result = (amount * rates[toCurrency]) / rates[fromCurrency];
    setResult(result.toFixed(2));
  };
  const swapBtn = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };
  const findCurrency = (text, id) => {
    const clearSearchCurrency = text.trim().toLowerCase();

    setSearchCurrency((value) => ({
      ...value,
      [id]: clearSearchCurrency,
    }));
  };

  useEffect(() => {
    async function fetchCurrencies() {
      setIsLoading(true);
      setError(null);

      try {
        const responce = await fetch(
          "https://v6.exchangerate-api.com/v6/823ccc099a0993044531bbbb/latest/USD",
        );

        const data = await responce.json();
        const codes = Object.keys(data.conversion_rates);

        const currencyArray = codes.map((code, index) => ({
          id: index,
          key: code,
        }));

        setCurrentList(currencyArray);
        setRates(data.conversion_rates);
      } catch (error) {
        setError(error.message);
        console.log("Ошибка!", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCurrencies();
  }, []);

  useEffect(() => {
    localStorage.setItem("currencyOne", JSON.stringify(fromCurrency));
    localStorage.setItem("currencyTwo", JSON.stringify(toCurrency));
  }, [fromCurrency, toCurrency]);

  const filteredCurrencyOne =
    searchCurrency.searchCurrencyOne.length > 0
      ? currencyList.filter(({ key }) =>
          key.toLowerCase().startsWith(searchCurrency.searchCurrencyOne),
        )
      : null;

  const filteredCurrencyTwo =
    searchCurrency.searchCurrencyTwo.length > 0
      ? currencyList.filter(({ key }) =>
          key.toLowerCase().startsWith(searchCurrency.searchCurrencyTwo),
        )
      : null;

  return (
    <ConverterContext.Provider
      value={{
        fromCurrency,
        toCurrency,
        handleChange,
        handleToCHange,
        currencyList,
        searchCurrency,
        setSearchCurrency,
        filteredCurrencyOne,
        filteredCurrencyTwo,
        findCurrency,

        convertBtn,
        swapBtn,
        handleAmountChange,
        amount,
      }}
    >
      <div className="interface">
        {isLoading && <p className="loading">Загрузка валют...</p>}
        {error && <p className="error">Ошибка: {error}</p>}
        {!isLoading && !error && (
          <>
            <Selection />
            <Sum />
            <p className="result">Result: {result}</p>
          </>
        )}
      </div>
    </ConverterContext.Provider>
  );
};

export default Interface;
