const SumInput = (props) => {
  
  const {onConvertValue, amountValue} = props

  return (
    <input 
    type="number" 
    className="sumInput" 
    onChange={onConvertValue}
    value={amountValue}
    />
  )
}

export default SumInput