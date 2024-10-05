import StartQuiz from "./pages/StartQuiz";
import QuizLevels from './pages/QuizLevels';
import Quiz from "./components/Quiz";
import PlayerContextProvider from './providers/PlayerContextProvider';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import './App.css';

function App() {
    const location = useLocation();

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
