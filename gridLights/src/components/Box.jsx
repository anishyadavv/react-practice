const Box = ({value,onClick,filled,isDisabled}) => {
  return (
    <>
    {value? <button className={filled?'box box-active':'box'} disabled={isDisabled} onClick={onClick}></button>:<span/>}
    </>
  )
}

export default Box
