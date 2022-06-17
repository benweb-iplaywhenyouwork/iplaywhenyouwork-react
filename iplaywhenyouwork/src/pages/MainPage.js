import LeftBar from "../Components/Leftbar";
import MainCenter from "../Components/MainCenter";
import MainRight from "../Components/MainRight";
const MainPage = () => {
  return (
    <div className="main-page" style={{ display: "flex" }}>
      <LeftBar />
      <MainCenter />
      <MainRight />
    </div>
  );
};

export default MainPage;
