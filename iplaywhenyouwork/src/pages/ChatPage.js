import LeftBar from "../Components/Leftbar";
import Navbar from "../Components/Navbar";
import ChatCenter from "../Components/ChatCenter";
const ChatPage = () => {
  return (
    <>
      <Navbar />
      <div className="chat-page" style={{ display: "flex" }}>
        <LeftBar />
        <ChatCenter />
      </div>
    </>
  );
};

export default ChatPage;
