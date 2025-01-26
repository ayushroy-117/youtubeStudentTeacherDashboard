import React, { useState } from "react";
import "../styles/studentpage.css";

const StudentPage = () => {
  const [classCode, setClassCode] = useState("");
  const [youtubeLiveStreamURL, setYoutubeLiveStreamURL] = useState("");
  const [youtubeLiveChatURL, setYoutubeLiveChatURL] = useState("");

  const handleJoinClass = () => {
    if (classCode) {
      const baseStreamURL = `https://www.youtube.com/embed/${classCode}`;
      const baseChatURL = `https://www.youtube.com/live_chat?v=${classCode}&embed_domain=localhost`;

      setYoutubeLiveStreamURL(baseStreamURL);
      setYoutubeLiveChatURL(baseChatURL);
    } else {
      alert("Please enter a valid class code");
    }
  };

  return (
    <div className="student-page">
      <header>Join Live Stream</header>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Class Code"
          value={classCode}
          onChange={(e) => setClassCode(e.target.value)}
        />
        <button onClick={handleJoinClass}>Join Class</button>
      </div>

      {youtubeLiveStreamURL && (
        <div className="container">
          <iframe
            className="video-frame"
            src={youtubeLiveStreamURL}
            title="Live Stream"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <h2>Live Chat</h2>
          <iframe
            className="chat-frame"
            src={youtubeLiveChatURL}
            title="Live Chat"
            frameBorder="0"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default StudentPage;
