import React from 'react'

const ResultComponent = ({questions,userAnswers,resetQuiz=()=>{}}) => {

    const correctAnswers=userAnswers?.filter((ans)=>ans).length;

  return (
    <div className='results'>
      <h2>Results</h2>
      <p>You answered {correctAnswers} out of {questions.length}</p>
      <span onClick={resetQuiz}>Click here to retry</span>
      <ul>
        {questions.map((question,index)=>{
            return <li key={index} data-correct={userAnswers[index]}>Q{index+1}. {question?.question}</li>
        })}
      </ul>
    </div>
  )
}

export default ResultComponent
