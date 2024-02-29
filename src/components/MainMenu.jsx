import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../helpers/Context'



const MainMenu = () => {
    //destructure the gameProvider
    const { gameState, setGameState } = useContext(QuizContext);


  return (
    <>
      <div                                   
        className='flex justify-center text-center pt-4'>
       <div 
        className="w-96 h-96  bg-sky-900 shadow-2xl rounded-lg  flex  justify-center items-center ">
          <button 
          className='btn w-80 shadow-lg shadow-red-500  hover:bg-green-700' 
            onClick={()=>{
              setGameState("quiz");
            }}

            >
              Start Quiz
            </button>
            </div>
      </div>
    </>
  )
}

export default MainMenu
