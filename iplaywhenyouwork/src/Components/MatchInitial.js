import axios from "axios";
import {useEffect, useState} from "react";

function MatchInitial() {
    const baseUrl = "api/search";
    const APIKey = "ED1B941308C5FD8B3DC6A47F3620D54E";
    let quizWord = ["탕평책", "트루먼독트린", "노비안검법", "용비어천가"];
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

    let score = 0;
    // 우리말샘 API 자체가 서버에 오류가 많음. 좋은 코드는 아니지만 어쩔 수 없다 ㅜ
    const getJsonResponse = () => {
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


    useEffect(() => {
        setChosung(getInitial(quizWord[index]));
        getJsonResponse();
    }, [index])



    return(
        <div>
        <div>{choSung}</div>
        <form onSubmit={answerCheck}>
            <input onChange={e => setAnswer(e.target.value)}/>
            <button>입력</button>
        </form>
        <div>{evaluate}</div>
        <div>{explanation}</div>
        </div>
    )
}


export default MatchInitial;