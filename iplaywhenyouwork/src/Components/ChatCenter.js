import "../style/components/ChatCenter.css";
import { useEffect, useState } from "react";
import iconHome from "../static/img/icon/icon-home.png";
import iconBreadCumb from "../static/img/icon/icon-breadcumb.png";
import StartFirebase from "../firebase-config";
import { getDatabase, ref, set } from "firebase/database";
import profile from "../static/img/profile.png";
import moment from "moment";

const databaseURL = "https://iplaywhenyouwork-default-rtdb.firebaseio.com";
const ChatCenter = () => {
  const [user, setUser] = useState(null);
  const [content, setContent] = useState();
  const [chats, setChats] = useState();
  const [chatCounts, setChatCounts] = useState(0);
  const [db, setdb] = useState(getDatabase());

  useEffect(() => {
    setUser(localStorage.getItem("author"));
    setdb(getDatabase());
    _getChats();
  }, []);

  const onKeyPressUserInput = (e) => {
    console.log("did");
    if (e.key === "Enter") {
      localStorage.setItem("author", e.target.value);
      setUser(localStorage.getItem("author"));
    }
  };

  const _getChats = async () => {
    fetch(`${databaseURL}/chats.json`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((chats) => {
        setChats(chats);
        setChatCounts(chats.length);
      });
  };

  const onChangeNewChat = (e) => {
    setContent(e.target.value);
  };

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    await postChat(user, content);
    _getChats();
    setContent("");
  };


  const onClickButton = () => {
    postChat(user, content);
    // setContent("");
  };

  const postChat = async (user, content) => {
    if (user && content) {
      set(ref(db, `chats/${chatCounts + 1}`), {
        author: user,
        content: content,
        createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      });
    }
    _getChats();
  };

  return (
    <div className="chat-center-container">
      <div className="chat-center-header">
        <div className="chat-center-header-item">
          <img className="icon-home" src={iconHome} alt="icon-home" />
          <img
            className="icon-breadcumb"
            src={iconBreadCumb}
            alt="icon-breadcumb"
          />
          <div className="header-msg">메시지</div>
        </div>
      </div>
      <div className="chat-center-content">
        <div className="chat-header">
          <h2>메시지</h2>
        </div>
        {user ? (
          <div className="chats-container">
            <div className="chat-header-item">
              <label>사용자</label>
              <div className="chat-user-name">{user}</div>
            </div>
            <div className="chats">
              {chats &&
                chats
                  .filter((chat) => chat !== null)
                  .map((chat, key) => {
                    return (
                      <div className="chat-item-container" key={key}>
                        <div className="chat-item">
                          <div className="chat-item-left">
                            <img
                              className="chat-profile"
                              src={profile}
                              alt="chat-profile"
                            />
                          </div>
                          <div className="chat-item-right">
                            <div className="chat-item-right-top">
                              <div className="chat-author">
                                {chat && chat.author}
                              </div>
                              <div className="chat-date">
                                {chat && chat.createdAt}
                              </div>
                            </div>
                            <div className="chat-item-right-under">
                              <div className="chat-content">
                                {chat && chat.content}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
            </div>
            <div className="new-chat-container">
              <form onSubmit={handleChatSubmit}>
                <textarea
                  onChange={onChangeNewChat}
                  value={content}
                />
                <button type="submit" onClick={onClickButton}>메시지 보내기</button>
              </form>
            </div>
          </div>
        ) : (
          <div className="chat-login-container">
            <div className="chat-login-header-item chat-header-item">
              <label>사용자</label>
              <input
                placeholder="닉네임을 설정해주세요"
                onKeyPress={(e) => onKeyPressUserInput(e)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatCenter;
