import React, { useContext } from 'react'
import { QuizContext } from '../helpers/Context'
import { Questions } from '../helpers/QuestionBank';


const EndScreen = () => {

    const{score, setScore, setGameState} = useContext(QuizContext);

    const handleRestart = ()=>{
        setScore(0);
        setGameState('menu')
    }

  return (
     
     <div className='flex flex-col justify-center items-center mt-4'>
      <div className='flex flex-col items-center w-1/3 h-auto pt-4  bg-sky-800 rounded-lg p-2 min-w-96'>
        
        <h1 className='text-xl '>Score: {score}/{Questions.length}</h1>
        <button 
          className='btn btn-outline btn-warning mt-5 mb-5'
          onClick={handleRestart}>Restart </button>
        </div>
        </div>

  )
}

export default EndScreen