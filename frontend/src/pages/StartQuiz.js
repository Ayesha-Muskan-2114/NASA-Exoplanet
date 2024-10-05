import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../providers/PlayerContextProvider";
import { useEffect, useContext } from "react";

import "./styles/StartQuiz.css";

export default function StartQuiz(){
    const { level, setLevel } = useContext(PlayerContext);

    useEffect(() => console.log("level", level), [level]);

    const buttons = [{
        content: "Play",
        link: "/quiz/play"
    },
    {
        content: "Select Difficulty Level",
        link: "/quiz/levels"
    }];

    return <div className= "start-quiz-container">
        <h1>EXOPLANET <br/> QUIZ</h1>
        <p>Test your knowledge on exoplanets with a fun <br/> 10 question quiz!</p>
        <div className= "start-quiz-btns">
            { buttons.map((val, i) => <StartQuizButton key= {i} { ...val } />) }
        </div>
    </div>
}   

function StartQuizButton({content, link}){
    const navigate = useNavigate();
    return <button onClick= { () => navigate(link) } className= "start-quiz-btn" >{content}</button>
}