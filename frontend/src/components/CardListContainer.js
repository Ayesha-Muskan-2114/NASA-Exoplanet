import { useAnimate, motion, useCycle, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// const cards = Array(10).fill(0);

const setAsRef = (el, ...refs) => {
    refs.forEach((ref) => { ref.current = el });
    console.log("refs", refs);
}

export default function CardListContainer({cardList}){
    // const [ scope, animate ] = useAnimate();
    const [ done, setDone ] = useState(false);
    const [ speed, setSpeed ] = useCycle(120, 300);
    const x = useMotionValue(0);
    const widthRef  = useRef();

    const animateCards = async xEnd => {
        if(done){
            await animate(x, 
                [0, xEnd], 
                { 
                    duration: speed,
                    repeat: Infinity, 
                    ease: "linear",
                }
            );
        }
        else{
            await animate(x, 
                [x.get(), xEnd], 
                { 
                    duration: speed * (1 - x.get()/(xEnd)), 
                    ease: "linear",
                    onComplete:  () => setDone(true)
                }
            );
        }
    };

    useEffect(() => { 
        const xEnd = -widthRef.current.scrollWidth/2 - 10
        animateCards(xEnd);
    }, [speed, done]);

    return <motion.div className= "card-list-wrapper"
        style= { {x} }
        onHoverStart= { () => {
            setDone(false);
            setSpeed();
        } }
        onHoverEnd= { () => setSpeed() }
        ref= { el => setAsRef(el, widthRef) }
    >
        { [cardList, cardList].map((val, i) => val) }
    </motion.div>
}
