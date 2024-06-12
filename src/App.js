import './App.css';
import { useState } from 'react';
import QuestionComponent from './components/QuestionComponent';
import ResultComponent from './components/ResultComponent';
import questions from './utils/constants.json'

function App() {

  const [currentQuestion,setCurrentQuestion]=useState(0)
  const [userAnswers,setUserAnswers]=useState([])

  const handleNextQuestion=(isCorrect)=>{
    setCurrentQuestion(currentQuestion+1);
    setUserAnswers([...userAnswers,isCorrect])
  }

  const resetQuiz=()=>{
    setCurrentQuestion(0)
    setUserAnswers([])
  }

  return (
    <div className="App">
       <h1>Quiz Time!</h1>
       {currentQuestion<questions.length && <QuestionComponent 
            question={questions[currentQuestion]} 
            onAnswerClick={handleNextQuestion}
        />}
       {currentQuestion===questions.length && <ResultComponent 
          questions={questions}
          answers={userAnswers}
          reset={resetQuiz}
       />}
    </div>
  );
}

export default App;
