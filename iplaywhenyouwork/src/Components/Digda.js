import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Cell from "./Cell";
import setting from "../static/img/icon/icon-setting.png";

function Digda() {
  let array = [];
  for (let i = 1; i <= 5; i++) {
    array.push(1);
  }

  let time = 0;
  const [time2, setTime] = useState(10);
  const [numbers, setNumbers] = useState(array);
  const [gameFlag, setGameFlag] = useState(false);
  const [score, setScore] = useState(0);
  
 

  function randNum(a) {
    return Math.floor(Math.random()*a);
  }

  const handleClick = num => {
    if (gameFlag) {
      
      if(num !== 1){
        const index = numbers.indexOf(num);
        setScore(score => score + 1);
        console.log(score)
        setNumbers(numbers => [...numbers.slice(0,index), 1, ...numbers.slice(index + 1)]);
      }
    }
  };
  const startGame = () => {
    setNumbers(array);
    setScore(0);
    setGameFlag(true);
    var delay = randNum(4)*200;
    const inter = setInterval(function() {
      if(time === 6){
        setTime(10)
        clearInterval(timer);
        endGame();
        clearInterval(inter);
      }
      else{
        console.log(time);
        time = time+1;
        const index = randNum(4)
        setNumbers(numbers => [...numbers.slice(0,index), time+1, ...numbers.slice(index+1)]);
        setTimeout(function() {
          setNumbers(numbers => [...numbers.slice(0,index), 1, ...numbers.slice(index+1)]);
        },1000)
      }
    }, 1500)
    const timer = setInterval(function() {
      setTime(time2 => time2 - 1)
    }, 1000)
  };
  const endGame = () => {
    setNumbers([1,1,1,1,1])
    setGameFlag(false);
  };
  const courseTitle = [
    { title: "사회봉사1", professor: "홍길동" , idx: 0},
    { title: "벤처창업 웹 프로그래밍2", professor: "홍길동", idx: 1},
    { title: "창의연구실습1", professor: "홍길동", idx: 2},
    { title: "Financial Management", professor: "홍길동", idx: 3},
    { title: "프로그래밍연습", professor: "홍길동", idx: 4},
  ];
  return (
    <>
    <div className="main-courses-header">
      <div>
        {gameFlag ? (
          <ScoreBoard className="main-courses-title">score : {score} Time : {time2}</ScoreBoard>
        ) : (
          <StartButton className="main-courses-title" onClick={startGame}>전체 수강강좌</StartButton>
        )}
      </div>
      <div className="main-courses-setting">
        <img className="icon-setting" src={setting} alt="icon-setting" />
      </div>
    </div>
    <div className="main-courses-collection">
      {courseTitle.map((courseTitle) => {
        return (
          <div className="main-course-item">
            
            <Cell className="main-course-profile" num={numbers[courseTitle.idx]} key={courseTitle.idx} handleClick={handleClick}></Cell>
            
            <div className="main-course-label">
              <div className="main-course-label-upper">정규</div>
              <div className="main-course-label-under">학부</div>
            </div>
            <div className="main-course-description">
              <div className="main-course-title"><h3>{courseTitle.title}</h3></div>
              <div className="main-course-professor">
                {courseTitle.professor}
              </div>
            </div>
          </div>
          
        );
        
      })}
      
    </div>
    </>
  );
}


const Container = styled.div`
  position : absolute;
  top : 100px;
  left : 100px;
  z-index : 1;
  width: 50px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StartButton = styled.button`
  margin-top: 20px;
  width: 150px;
  height: 40px;
`;

const ScoreBoard = styled.div`
  margin-top : 20px
  width : 150px;
  height : 40px`

export default Digda;