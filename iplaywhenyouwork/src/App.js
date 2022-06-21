import Navbar from "./Components/Navbar";
import MainPage from "./pages/MainPage";
import "./App.css";
import "./style/reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/chats" element={<ChatPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
