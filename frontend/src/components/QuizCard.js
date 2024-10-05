import { useState, useEffect, useRef, useContext } from "react";
import { motion, useAnimate } from "framer-motion";
import { PlayerContext } from "../providers/PlayerContextProvider";

export default function QuizCard({question, options, answerIndex}){
    return <div className= "quiz-card">
        <h2>{question}</h2>
        { options.map((val, i) => <QuizCardOption key= {i} option= {val} isCorrect= {answerIndex === i}/>) }
    </div>
}

function QuizCardOption({key, option, isCorrect= false}){
    const { guess, score } = useContext(PlayerContext);
    const [ scope, animate ] = useAnimate();

    const handleGuess = async () => {
        if (isCorrect){
            await animate(scope.current, { backgroundColor: "#3A5340", color: "#DAD7CD" },
                { ease: "easeInOut" }
            );
            score.current+=10;
        }
        else if(guess === key && !isCorrect){
            animate(scope.current, { backgroundColor: "#c30010", color: "#DAD7CD" },
                { ease: "easeInOut" }
            );
        }
    };

    useEffect(() => {
        handleGuess();
    }, [guess]);

    return <div className= "quiz-card-option"
        ref= {scope}
    >{option}</div>
}