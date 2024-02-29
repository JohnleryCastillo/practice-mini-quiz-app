import React from 'react'
import { useState } from 'react'
import { Questions } from '../helpers/QuestionBank'
import { useContext } from "react";
import { QuizContext } from '../helpers/Context';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState('')
    const{score, setScore, setGameState} = useContext(QuizContext)
    const [btnColor, setBtnColor] = useState(false);

    const handleNextQuestion = () =>{
        if(Questions[currentQuestion].answer === optionChosen){
          setScore(score+1)
        }
         setCurrentQuestion((prevState)=>prevState+1); 
         setBtnColor(false); 
         
       
    }


    const handleGameState = ()=>{
      if(Questions[currentQuestion].answer === optionChosen){
        setScore(score+1)
      }

      setGameState("endScreen");
    }

  return (
    <div className='flex flex-col justify-center items-center mt-4 '>
      <div className='flex flex-col items-center w-1/3 h-auto pt-4  bg-sky-800 rounded-lg p-2 min-w-96 '>

        <h1 className='bg-white m-4 rounded-md p-4 w-96 h-20'>{Questions[currentQuestion].question}</h1>

        <div className='flex flex-col justify-center min-w-32 w-96 '>

          <button
             onClick={()=>{
              setOptionChosen('A') 
              setBtnColor(true)
            }
            } 
             className={`btn m-4 ${(btnColor === true && optionChosen==='A')?'btn-default':'btn-outline  '}`}>
            {Questions[currentQuestion].optionA}</button>

          <button 
            onClick={()=>{
              setOptionChosen('B')  
              setBtnColor(true)        
            }
            }

            className={`btn m-4 ${(btnColor === true && optionChosen==='B')?'btn-primary':' btn-outline '}`}>
            {Questions[currentQuestion].optionB}</button>

          <button 
           onClick={()=>{
            setOptionChosen('C')
            setBtnColor(true)
            }
            }
           className={`btn  m-4 ${(btnColor ===true && optionChosen==='C')? ' btn-secondary':'btn-outline'}`}>
           {Questions[currentQuestion].optionC}</button>

          <button onClick={()=>{
            setOptionChosen('D')
            setBtnColor(true)
            }
            }
           className={`btn m-4 ${( btnColor === true && optionChosen==='D')?' btn-accent':'btn-outline'}`}>
           {Questions[currentQuestion].optionD}</button>
       
          </div>

          {currentQuestion == Questions.length -1 ? 
           <button
              onClick={handleGameState}
              className='btn btn-outline btn-secondary w-52'>Finish the Quiz</button> 
              :
              <button
              onClick={handleNextQuestion}
              className='btn btn-default  w-52 hover:bg-green-700 border-none'>Next</button>
        
        }


      </div>
     </div>
  )
}

export default Quiz