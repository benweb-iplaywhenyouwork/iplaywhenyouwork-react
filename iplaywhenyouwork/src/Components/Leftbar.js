import "../style/components/Leftbar.css";
import iconCourses from "../static/img/icon/icon-courses.png";
import iconMypage from "../static/img/icon/icon-mypage.png";
import iconExtracourses from "../static/img/icon/icon-extracourses.png";
import iconOnlineclass from "../static/img/icon/icon-onlineclass.png";
import iconEclass from "../static/img/icon/icon-eclass.png";
import Instruction from "./Instruction";
import MatchInitial from "./MatchInitial";
import { useEffect, useState } from "react";

const LeftBar = () => {
  const [chosung, setChosung] = useState(null);

  useEffect(()=>{
    setChosung(chosung);
  }, [chosung])

  return (
    <div className="left-bar">
      <div className="left-menus">
        <div className="left-menu-mypage left-menu">
          <img className="icon-mypage" src={iconMypage} alt="icon-mypage"></img>
          <h5>My Page</h5>
        </div>
        <div className="left-menu-courses left-menu">
          <img
            className="icon-courses"
            src={iconCourses}
            alt="icon-courses"
          ></img>
          <h5>정규 과정</h5>
        </div>
        <div className="left-menu-extracourses left-menu">
          <img
            className="icon-extracourses"
            src={iconExtracourses}
            alt="icon-extracourses"
          ></img>
          <h5>비정규 과정</h5>
        </div>
        <div className="left-menu-onlineclass left-menu">
          <img
            className="icon-onlineclass"
            src={iconOnlineclass}
            alt="icon-onlineclass"
          ></img>
          <h5>SNUON</h5>
        </div>
        <div className="left-menu-eclass left-menu">
          <img className="icon-eclass" src={iconEclass} alt="icon-eclass"></img>
          <h5>e-Class</h5>
          <div className="chosung-menu">
            <div onClick={() => setChosung("문학")}>문학</div>
            <div onClick={() => setChosung("일반")}>일반</div>
            <div onClick={() => setChosung("역사")}>역사</div>
            <div onClick={() => setChosung("영화")}>영화</div>
            <div onClick={() => setChosung(null)}>리셋</div>
          </div>
        </div>
        <Instruction></Instruction>
        {chosung ? <MatchInitial inputField={chosung}/>:null}
      </div>
    </div>
  );
};

export default LeftBar;
