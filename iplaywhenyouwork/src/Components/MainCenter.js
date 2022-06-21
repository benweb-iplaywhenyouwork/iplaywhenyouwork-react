import "../style/components/MainCenter.css";
import profile from "../static/img/profile.png";
import setting from "../static/img/icon/icon-setting.png";
import Run from './Run';
import {useState} from "react";

const MainCenter = () => {
  const courseItems = [
    { title: "사회봉사1", professor: "홍길동" },
    { title: "벤처창업 웹 프로그래밍2", professor: "홍길동" },
    { title: "창의연구실습1", professor: "홍길동" },
    { title: "Financial Management", professor: "홍길동" },
    { title: "프로그래밍연습", professor: "홍길동" },
  ];
  const [runGame, setRunGame] = useState(false);

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
    setRunGame(!runGame);
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
        <div className="main-courses-header">
          <div className="main-courses-title">전체 수강강좌</div>
          <div className="main-courses-setting">
            <img className="icon-setting" src={setting} alt="icon-setting" />
          </div>
        </div>

        {/* main-courses-collection */}
        <div className="main-courses-collection">
          {courseItems.map((courseItem, id) => {
            return (
              <div className="main-course-item" key={id}>
                <img
                  className="main-course-profile"
                  src={profile}
                  alt="main-course-profile"
                />
                <div className="main-course-label">
                  <div className="main-course-label-upper">정규</div>
                  <div className="main-course-label-under">학부</div>
                </div>
                <div className="main-course-description">
                  <div className="main-course-title">
                    <h3>{courseItem.title}</h3>
                  </div>
                  <div className="main-course-professor">
                    {courseItem.professor}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* main-center-under */}
      <div className="main-status-container">
        {/* main-status-header */}
        {
        runGame ? <Run/> : 
        <div className="main-status-header">
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

export default MainCenter;
