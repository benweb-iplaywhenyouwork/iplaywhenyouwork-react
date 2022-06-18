import "../style/components/MainRight.css";
import iconLock from "../static/img/icon/icon-lock.png";
import iconClock from "../static/img/icon/icon-clock.png";
import iconFile from "../static/img/icon/icon-file.png";
import iconRec from "../static/img/icon/icon-rec.png";
import iconZoom from "../static/img/icon/icon-zoom.png";

const MainRight = () => {
  function randomDate() {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    let date = new Date(timestamp);
    let formattedDate =
      date.getFullYear() +
      "년" +
      (date.getMonth() + 1) +
      "월" +
      date.getDate() +
      "일";
    return formattedDate;
  }
  const imptNotices = [
    { title: "구 eTL 시스템 교체...", date: randomDate() },
    { title: "new ETL 오픈 안내", date: randomDate() },
  ];

  const allNotices = [
    {
      title: "프로그래밍연습",
      description: "새 공지사항이 등록되었습니다.",
      imgSrc: iconRec,
    },
    {
      title: "Financial Managment",
      description: "새 파일이(가) 등록되었습니다.",
      imgSrc: iconFile,
    },
    {
      title: "사회봉사1",
      description: "새 화상강의이(가) 등록되었습니다.",
      imgSrc: iconZoom,
    },
  ];

  return (
    <div className="main-right-container">
      {/* 중요공지 */}
      <div className="main-right-upper-container right-container">
        <div className="main-right-upper-header right-header">
          <div className="main-right-upper-title header-title">중요공지</div>
        </div>
        <div className="main-right-upper-content right-content">
          {imptNotices.map((imptNotice, id) => {
            return (
              <div className="imptNotice-item right-item" key={id}>
                <div className="imptNotice-item-left right-item-left">
                  <img
                    className="imptNotice-lock-icon"
                    src={iconLock}
                    alt="imptNotice-lock-icon"
                  />
                </div>
                <div className="imptNotice-item-right right-item-right">
                  <div className="imptNotice-title right-item-title">
                    <h5>{imptNotice.title}</h5>
                  </div>
                  <div className="imptNotice-date right-item-description">
                    <img
                      className="imptNotice-clock-icon"
                      src={iconClock}
                      alt="imptNotice-clock-icon"
                    />
                    {imptNotice.date}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="main-right-upper-button">
          <div className="add-button">더보기</div>
        </div>
      </div>

      {/* 예정된 할일 */}
      <div className="main-right-mid-container right-container">
        <div className="main-right-mid-header right-header">
          <div className="main-right-mid-title header-title">예정된 할 일</div>
        </div>
        <div className="main-right-mid-content right-content">
          <div className="main-right-mid-item">계획된 일정이 없습니다.</div>
        </div>
      </div>

      {/* 전체 알림 */}
      <div className="main-right-under-container right-container">
        <div className="main-right-under-header right-header">
          <div className="main-right-mid-title header-title">전체 알림</div>
        </div>
        <div className="main-right-under-content right-content">
          {allNotices.map((notice, id) => {
            return (
              <div key={id} className="allNotice-item right-item">
                <div className="allNotice-item-left right-item-left">
                  <img
                    className="allNotice-icon"
                    src={notice.imgSrc}
                    alt="allNotice-icon"
                  />
                </div>
                <div className="allNotice-item-right right-item-right">
                  <div className="allNotice-item-title right-item-title">
                    <h5>{notice.title}</h5>
                  </div>
                  <div className="allNotice-item-description right-item-description">
                    {notice.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainRight;
