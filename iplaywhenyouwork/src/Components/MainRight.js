import "../style/components/MainRight.css";
import iconLock from "../static/img/icon/icon-lock.png";
import iconClock from "../static/img/icon/icon-clock.png";

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
  return (
    <div className="main-right-container">
      <div className="main-right-upper-container">
        <div className="main-right-upper-header">
          <div className="main-right-upper-title">중요공지</div>
        </div>
        <div className="main-right-upper-content">
          {imptNotices.map((imptNotice,id) => {
            return (
              <div className="imptNotice-item" key={id}>
                <div className="imptNotice-item-left">
                  <img
                    className="imptNotice-lock-icon"
                    src={iconLock}
                    alt="imptNotice-lock-icon"
                  />
                </div>
                <div className="imptNotice-item-right">
                  <div className="imptNotice-title">
                    <h5>{imptNotice.title}</h5>
                  </div>
                  <div className="imptNotice-date">
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
      <div className="main-right-mid-container"></div>
      <div className="main-right-under-container"></div>
    </div>
  );
};

export default MainRight;
