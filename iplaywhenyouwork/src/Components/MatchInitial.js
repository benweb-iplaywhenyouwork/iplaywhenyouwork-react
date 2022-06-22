import axios from "axios";
import {useEffect, useState} from "react";
import "../style/components/MatchInitial.css";

function MatchInitial({inputField}) {
    const baseUrl = "api/search";
    const APIKey = "ED1B941308C5FD8B3DC6A47F3620D54E";
    const literatureWord = ["바람과 함께 사라지다", "오만과 편견", "멋진 신세계"];
    const historyWord = ["탕평책", "트루먼독트린", "노비안검법", "용비어천가"];
    const justWord = ["덜미", "나무", "올가미"];
    const movieWord = ["라이언 일병 구하기"];

    const [answer, setAnswer] = useState("");
    const [evaluate, setEvaluate] = useState("");
    const [choSung, setChosung] = useState("");
    const [explanation, setExplanation] = useState("단어를 불러오고 있습니다.");
    const [index, setIndex] = useState(0);
    const [field, setField] = useState(null);
    const [quizWord, setQuizWord] = useState([]);
    
    let score = 0;
    // 우리말샘 API 자체가 서버에 오류가 많음. 좋은 코드는 아니지만 어쩔 수 없다 ㅜ
    const getJsonResponse = () => {
        console.log("jsonResponse");
        console.log(quizWord[index]);
        sendRequest(quizWord[index]).then(res => {
            setExplanation(res.channel.item[0].sense[0].definition);
        }).catch(getJsonResponse);
    }

    
    const sendRequest = (word) => {
        return axios({
            url: getUrl(word),
            method: 'GET',
            data: '',
            headers: {}
        }).then(res => {
            return res.data;
        })
    }

    const getUrl = (word) => {

        const finalUrl = `${baseUrl}?key=${APIKey}&q=${word}&req_type=json&method=exact`;
        return finalUrl;
    }
    const answerCheck = (e) => {
        e.preventDefault();
        if(quizWord[index] === answer){
            score++;
            setEvaluate("정답입니다~!!");
            setAnswer("");
            setIndex(index+1);
            setExplanation("단어를 불러오고 있습니다.");
        }else{
            setEvaluate("틀렸습니다~!!");
            setAnswer("");
        }

    }


    const getInitial = (str) => {
        const initial = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];
        let result = "";
        for(let i=0; i<str.length; i++) {
            let code = str.charCodeAt(i)-44032;
            if(code>-1 && code<11172) result += initial[Math.floor(code/588)];
        }
        return result;
    }
    useEffect(()=> {
        setField(inputField);
    }, [])
    
    useEffect(()=> {
        if(field ==="문학"){
            setQuizWord(literatureWord);
        }else if(field === "일반"){
            setQuizWord(justWord);
        }else if(field === "역사"){
            setQuizWord(historyWord);
        }else if(field ==="영화"){
            setQuizWord(movieWord);
        }
    
    }, [field])

    useEffect(()=> {
        if(quizWord.length>0){
            setIndex(0);
            setChosung(getInitial(quizWord[index]));
            setExplanation("단어를 불러오는 중입니다.");
            getJsonResponse();
        }
        
    }, [quizWord])

    useEffect(() => {
        if(quizWord.length > 0){
            if(index === quizWord.length){
                setExplanation("게임 끝!");
            }else if(index > 0){
                setChosung(getInitial(quizWord[index]));
                getJsonResponse();
            }
        }
    }, [index])


    return(
        <div>
        <div className="chosung">{choSung}</div>
        <form style={{color: '#999', position: "absolute", top:"50px"}} onSubmit={answerCheck}>
            <input className="chosung-input" onChange={e => setAnswer(e.target.value)}/>
            <button className="chosung-submit-button" >입력</button>
        </form>
        <div style={{color: '#999', position: "absolute", left: "50px", top:"75px", width: "100px"}} className="chosung-correct">{evaluate}</div>
        <div style={{color: '#999', position: "absolute", left: "10px", top:"100px", width: "190px"}} className="chosung-explanation">{explanation}</div>
        </div>
    )
}


export default MatchInitial;