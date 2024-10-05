import QuizCard from "./QuizCard";
import QuizLevels from "../pages/QuizLevels";
import QuizLoader from "./QuizLoader";
import { PlayerContext } from "../providers/PlayerContextProvider";
import { useState, useContext, useRef, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export default function Quiz(){
    const [ questions, setQuestions ] = useState(null);
    const [ currentQuestion, setCurrentQuestion ] = useState(null);
    const { level } = useContext(PlayerContext);
    const { isLoading, error, fetchData } = useFetch();

    const controller = useRef();

    const getQuestions = async (endpoint, options) => {
        const result = await fetchData(endpoint, controller.current.signal, options);
        console.log("result", result);
        if(result) {
            setQuestions(result);
            setCurrentQuestion(0);
        }
    };

    useEffect(() => {
        console.log("level", level);
        controller.current = new AbortController();
        getQuestions(`/questions/${level}`);

        return () => controller.current.abort();
    }, []);

    return (<>
        { level? isLoading? <QuizLoader/> : 
        error ? <h1>error</h1> :
        <QuizCard key= {currentQuestion} 
            question= {questions[currentQuestion].question}
            options= {questions[currentQuestion].options}
            answerIndex= {questions[currentQuestion].answerIndex}
        /> :
        <QuizLevels/> }
    </>);
}