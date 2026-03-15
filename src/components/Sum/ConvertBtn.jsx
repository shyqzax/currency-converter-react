const ConvertBtn = (props) => {
  const {
    convertCurrencyBtn,
    children
  } = props
  return (
    <button 
    className="btn"
    onClick={convertCurrencyBtn}
    >
      {children}
    </button>
  )
}

export default ConvertBtn