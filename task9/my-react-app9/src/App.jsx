import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  function SendMessage() {
    if (inputValue.trim() === "")
      return;

    setMessages([...messages, inputValue]);
    setInputValue("");
  }

  return (
    <div className="app">
      <div className="chat-box">
        <h1>Mini Chat Application</h1>

        <div className="input-box">
          <input
            type="text"
            value={inputValue}
            placeholder="Type your message..."
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button onClick={SendMessage}>
            Send Message
          </button>
        </div>

        <div className="messages">
          {messages.map((message, index) => (
            <p key={index} className="message" >
              {message}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;