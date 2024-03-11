import { useState } from 'react'
import './App.css'
import Quiz from './components/Quiz'
import Result from './components/Result';
function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState([]);
  const Questions = [
    {
      Question:"What is capital of india",
      options:[
        {
          text:"Delhi",
          isCorrect: true
        },
        {
          text:"Kolkata",
          isCorrect: false
        },
        {
          text:"Goa",
          isCorrect: false
        },
        {
          text:"Chandigarh",
          isCorrect: false
        },

      ]
    },
    {
      Question:"What is capital of west bengal",
      options:[
        {
          text:"Delhi",
          isCorrect: false
        },
        {
          text:"Kolkata",
          isCorrect: true
        },
        {
          text:"Goa",
          isCorrect: false
        },
        {
          text:"Chandigarh",
          isCorrect: false
        },

      ]
    },
    {
      Question:"What is capital of Punjab",
      options:[
        {
          text:"Delhi",
          isCorrect: false
        },
        {
          text:"Kolkata",
          isCorrect: false
        },
        {
          text:"Goa",
          isCorrect: false
        },
        {
          text:"Chandigarh",
          isCorrect: true
        },

      ]
    }
    ,{
      Question:"What is capital of Goa",
      options:[
        {
          text:"Delhi",
          isCorrect: false
        },
        {
          text:"Kolkata",
          isCorrect: false
        },
        {
          text:"panji",
          isCorrect: true
        },
        {
          text:"Chandigarh",
          isCorrect: false
        },

      ]
    }
  ]

  const handleNext = (option)=>{
    setResult([...result,option]);
    setCurrentQuestion(currentQuestion+1);
  }
  const resetQuiz = ()=>{
  setCurrentQuestion(0);
  setResult([]);
  }
  return (
    <>
      <h1>World Quiz</h1>
      {currentQuestion<Questions.length && <Quiz Question={Questions[currentQuestion]} onAnswerClick={handleNext} />}
      {currentQuestion===Questions.length && <Result Question={Questions} result={result} resetQuiz={resetQuiz}/>}
    </>
  )
}

export default App
