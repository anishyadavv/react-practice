const Cell = ({data=[],id, onSingleClick=()=>{},handleDoubleClick=()=>{}}) => {
  return (
    <div className="cell" id={id} onClick={onSingleClick} onDoubleClick={handleDoubleClick}>
     {data}
    </div>
  )
}

export default Cell
