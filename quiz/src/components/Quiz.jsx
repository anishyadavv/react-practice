const Quiz = ({Question, onAnswerClick}) => {

    
  return (
    <div className="question">
      <h1>{Question.Question}?</h1>
      <ul className="options">
        {Question.options.map(option =>{
            return <li onClick={()=>onAnswerClick(option.isCorrect)} className="option" key={option.text}>{option.text}</li>
        })}
      </ul>
    </div>
  )
}

export default Quiz
