import StartQuiz from "./pages/StartQuiz";
import QuizLevels from './pages/QuizLevels';
import Quiz from "./components/Quiz";
import PlayerContextProvider from './providers/PlayerContextProvider';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
    return (
        <Routes>
            <Route path= "/quiz/" element= { <PlayerContextProvider/> }>
                <Route path= "start" element= { <StartQuiz/> } />
                <Route path= "levels" element= { <QuizLevels/> } />
                <Route path= "play" element= { <Quiz/> } />
            </Route>
        </Routes>
    );
}

export default App;
