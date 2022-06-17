import "../style/components/MainCenter.css";
import profile from "../static/img/profile.png";
import setting from "../static/img/icon/icon-setting.png";

const MainCenter = () => {
  const courseTitle = [
    { title: "사회봉사1", professor: "홍길동" },
    { title: "벤처창업 웹 프로그래밍2", professor: "홍길동" },
    { title: "창의연구실습1", professor: "홍길동" },
    { title: "Financial Management", professor: "홍길동" },
    { title: "프로그래밍연습", professor: "홍길동" },
  ];
  return (
    <div className="main-center-container">
      <div className="main-courses-container">
        <div className="main-courses-header">
          <div className="main-courses-title">전체 수강강좌</div>
          <div className="main-courses-setting">
            <img className="icon-setting" src={setting} alt="icon-setting" />
          </div>
        </div>
        <div className="main-courses-collection">
          {courseTitle.map((courseTitle) => {
            return (
              <div className="main-course-item">
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
                  <div className="main-course-title"><h3>{courseTitle.title}</h3></div>
                  <div className="main-course-professor">
                    {courseTitle.professor}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="main-notice-container"></div>
    </div>
  );
};

export default MainCenter;
