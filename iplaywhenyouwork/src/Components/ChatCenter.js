import "../style/components/ChatCenter.css";
import { useEffect, useState } from "react";
import iconHome from "../static/img/icon/icon-home.png";
import iconBreadCumb from "../static/img/icon/icon-breadcumb.png";
import StartFirebase from "../firebase-config";
import { getDatabase, ref, set } from "firebase/database";

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

  //   const _getChats = () => {
  //     const dbref = ref(db);
  //     get(child(dbref, "chats/0")).then((snapshot) => {
  //       if (snapshot.exists()) {

  //         setChats([{
  //           author: snapshot.val().Author,
  //           content: snapshot.val().Content,
  //         }]);
  //         console.log(snapshot.val().author);
  //       } else {
  //         console.log("no data found");
  //       }
  //     });
  //   };

  //   useEffect(() => {
  //     _getChats();
  //   }, []);

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

  //   const onKeyPressNewChat = (e) => {
  //     if (e.key === "Enter") {
  //       postChat(user, content);
  //       _getChats();
  //       setContent("");
  //     }
  //   };

  const onClickButton = () => {
    postChat(user, content);
    // setContent("");
  };

  const postChat = async (user, content) => {
    if (user && content) {
      set(ref(db, `chats/${chatCounts + 1}`), {
        author: user,
        content: content,
      });
    }
    _getChats();
  };

  //   const postChats = async () => {
  //     post(`${databaseURL}/chats.json`, {
  //       author: user,
  //       content: content,
  //     });
  //   };

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
                chats.map((chat, key) => {
                  return (
                    <div key={key}>
                      <div className="chat-author">{chat && chat.author}</div>
                      <div className="chat-content">{chat && chat.content}</div>
                    </div>
                  );
                })}
            </div>
            <div className="new-chat-container">
              <label>{user}</label>
              <input
                placeholder="채팅을 입력해주세요"
                onChange={onChangeNewChat}
                value={content}
              />
              <button onClick={onClickButton}>전송</button>
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
