import { useContext } from "react";
import ConvertBtn from "./ConvertBtn";
import SumInput from "./SumInput";
import SwapBtn from "./SwapBtn";
import { ConverterContext } from "../../Context/ConverterContext";

const Sum = () => {
  const { convertBtn, swapBtn, handleAmountChange, amount } =
    useContext(ConverterContext);
  return (
    <div className="sum">
      <label htmlFor="amount">Amount</label>
      <SumInput onConvertValue={handleAmountChange} amountValue={amount} />
      <ConvertBtn convertCurrencyBtn={convertBtn}>Convert</ConvertBtn>
      <SwapBtn swapCurrencyBtn={swapBtn}>&#8652;</SwapBtn>
    </div>
  );
};

export default Sum;
