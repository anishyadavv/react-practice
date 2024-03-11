const Result = ({Question, result, resetQuiz = ()=>{}}) => {
    const correctansnwers = result.filter(result => result).length;
  return (
    <div>
        <h1>{correctansnwers} correct out of {Question.length}</h1>
      {Question.map((question,index)=>{
        return <li className={result[index]?"correct":"wrong"} key={question.Question}>{question.Question}</li>
      })}

      <button onClick={resetQuiz}>Reset</button>
    </div>
  )
} 

export default Result
