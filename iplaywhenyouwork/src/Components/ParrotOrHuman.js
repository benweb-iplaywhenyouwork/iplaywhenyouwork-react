import '../style/components/Parrot.css';
import parrotImg from "../static/img/ParrotorHuman/parrot.png";
import humanImg from "../static/img/ParrotorHuman/human.png";
import human1 from "../static/audio/human1.mp3"
import human2 from "../static/audio/human_set1.mp3"
import human3 from "../static/audio/human3.mp3"
import parrot1 from "../static/audio/parrot1.mp3"
import parrot2 from "../static/audio/parrot2.mp3"
import parrot3 from "../static/audio/parrot3.mp3"
import parrot4 from "../static/audio/parrot_set1.mp3"
import {useEffect, useState} from "react";

// 코드 죄송합니다... 리액트는 왜 fs가 없는거지..?  - 엄성호
function ParrotorHuman () {
    const quizSounds = []
    const [answer, setAnswer] = useState("");
    const [index, setIndex] =useState(0);
    let score = 0;
    const humanSound1 = new Audio(human1);
    const humanSound2 = new Audio(human2);
    const humanSound3 = new Audio(human3);
    const parrotSound1 = new Audio(parrot1);
    const parrotSound2 = new Audio(parrot2);
    const parrotSound3 = new Audio(parrot3);
    const parrotSound4 = new Audio(parrot4);
    quizSounds.push(parrotSound2);
    quizSounds.push(parrotSound1);
    quizSounds.push(humanSound1);
    quizSounds.push(humanSound2);
    quizSounds.push(parrotSound3);
    quizSounds.push(humanSound3);
    quizSounds.push(parrotSound4);


    const parrotClick = () =>{
        if([0, 1, 4, 6].includes(index)){
            setAnswer("correct!");
            score++;
        }else{
            setAnswer("boo! It's human!!!");
        }
        setIndex(index+1);
    }

    const humanClick = () => {
        if([2, 3, 5].includes(index)){
            setAnswer("correct!");
            score++;
        }else{
            setAnswer("boo! It's Parrot!!!");
        }
        setIndex(index+1);
    }

    const playSound = () => {
        setAnswer("");
        quizSounds[index].play();
    }

    useEffect(() => {
        if(index === 8){
            setAnswer("GameEnd!");
            setIndex(0);
        }
    }, [index])

    return(
        <div className="parrot-game-popup">
            <div className="parrot-title">Parrot or Human?</div>
            <div className="parrot" onClick={parrotClick}>
                <img className="species-image" src={parrotImg} width="100" height="100" />
            </div>
            <div className="human" onClick={humanClick}>
                <img className="species-image" src={humanImg} width="100" height="100"/>
            </div>

            <div className="voice-play">
                <button className="listen-button" onClick={playSound}>listen</button>
            </div>
            <div className="parrot-answer">{answer}</div>
        </div>
    )
}

export default ParrotorHuman;