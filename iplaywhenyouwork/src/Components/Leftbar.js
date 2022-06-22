import "../style/components/Leftbar.css";
import iconCourses from "../static/img/icon/icon-courses.png";
import iconMypage from "../static/img/icon/icon-mypage.png";
import iconExtracourses from "../static/img/icon/icon-extracourses.png";
import iconOnlineclass from "../static/img/icon/icon-onlineclass.png";
import iconEclass from "../static/img/icon/icon-eclass.png";
import Instruction from "./Instruction";

const LeftBar = () => {
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
        </div>
        <Instruction></Instruction>
      </div>
    </div>
  );
};

export default LeftBar;
