const SwapBtn = (props) => {
  const {swapCurrencyBtn, children} = props
  return (
    <button 
    className="swap-btn"
    onClick={swapCurrencyBtn}
    >
      {children}
      </button>
  )
}

export default SwapBtn