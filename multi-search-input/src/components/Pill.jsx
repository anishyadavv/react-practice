
const Pill = ({image,firstName, lastName, remove}) => {
  return (
    <div className="pill" onClick={remove}>
        <img src={image} alt={firstName} />
        {`${firstName} ${lastName}`}
        <span>&times;</span>
    </div>
  )
}

export default Pill
