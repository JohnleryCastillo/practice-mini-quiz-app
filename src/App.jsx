import MainMenu from "./components/MainMenu";
import { useState, useContext} from "react";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
 import { QuizContext } from "./helpers/Context";

    function App() {
      //create a use state
        const [gameState, setGameState] = useState("menu");
        const [score, setScore] = useState(0);

      return (
        <>
         <div 
          className="flex justify-center text-center flex-col font-serif">
            <h1 className="text-3xl font-bold">Math Quiz</h1>

            <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>

            {gameState === "menu" && <MainMenu />}
            {gameState === "quiz" && <Quiz />}
            {gameState === "endScreen" && <EndScreen />}
            </QuizContext.Provider>

            </div>
        </>
      )
    }

    export default App
