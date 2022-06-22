import "../style/components/MainCenter.css";
import Digda from "./Digda";
import styled from "styled-components";
import setting from "../static/img/icon/icon-setting.png";
import Run from './Run';
import {useState} from "react";

const MainCenter = () => {
<<<<<<< HEAD
  
=======
  const courseItems = [
    { title: "사회봉사1", professor: "홍길동" },
    { title: "벤처창업 웹 프로그래밍2", professor: "홍길동" },
    { title: "창의연구실습1", professor: "홍길동" },
    { title: "Financial Management", professor: "홍길동" },
    { title: "프로그래밍연습", professor: "홍길동" },
  ];
  const [runGame, setRunGame] = useState(false);
  const [effect, setEffect] = useState("display");
>>>>>>> 7b08d42c1b19f29730a9f9d5e3adc65424fa4021

  function randomDate() {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    let date = new Date(timestamp);
    let formattedDate =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes();
    return formattedDate;
  }
  
  const playRunGame = () => {
    setEffect("nondisplay");
    setTimeout(()=> {
      setRunGame(!runGame);
    }, 500)
    
  }

  const statusItems = [
    {
      title: "연구보조원 채용 공고",
      date: randomDate(),
    },
    { title: "eTL 접속장애 알림(완료)", date: randomDate() },
  ];
  return (
    <div className="main-center-container">
      {/* main-center-upper */}
      <div className="main-courses-container">
        {/* main-courses-header */}
        

        {/* main-courses-collection */}
        <Digda></Digda>
      </div>

      {/* main-center-under */}
      <div className="main-status-container">
        {/* main-status-header */}
        {
        runGame ? <Run/> : 
        <div className={`main-status-header-${effect}`}>
          <div className="main-status-description">
            <div className="main-status-notice" >공지사항</div>
        
            <div className="main-status-classes" onClick={playRunGame}>진행 강좌 게시물</div>
          </div>
          <div className="main-status-button">더보기</div>
          </div>
        }
        
          
        
      
        {/* 공지사항 게시물 */}
        <div className="main-status-collection">
          {statusItems.map((statusItem, id) => {
            return (
              <div className="main-status-item" key={id}>
                <li className="main-status-item-title">{statusItem.title}</li>
                <div className="main-status-item-date">{statusItem.date}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Container= styled.div`
  position : absolute
  top : 100px;
  left : 100px;
  width: 50px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default MainCenter;
