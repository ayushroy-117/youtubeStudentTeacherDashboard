import React, { useState } from "react";
import "../styles/teacherpage.css";

// Utility function to extract video ID from a YouTube URL
const getVideoIdFromURL = (url) => {
  const match = url.match(
    /(?:v=|\/(?:embed|live)\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
};

const TeacherPage = () => {
  const [videoId, setVideoId] = useState("");
  const [streamURL, setStreamURL] = useState("");
  const [youtubeLiveChatURL, setYoutubeLiveChatURL] = useState("");

  const handleStreamURLChange = (e) => {
    const url = e.target.value;
    const id = getVideoIdFromURL(url);
    if (id) {
      setVideoId(id);
      setStreamURL(`https://www.youtube.com/embed/${id}`);
      setYoutubeLiveChatURL(
        `https://www.youtube.com/live_chat?v=${id}&embed_domain=localhost`
      );
    } else {
      alert("Invalid YouTube Live URL");
    }
  };

  return (
    <div className="teacher-page">
      <header>Teacher's Livestream Dashboard</header>
      {!videoId ? (
        <div>
          <p>
            To start a livestream, click the button below to open YouTube Studio
            in a new tab. Once the livestream is created, copy its URL and paste
            it into the field below.
          </p>
          <a
            href="https://studio.youtube.com/channel/UC/streaming/"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-studio-link"
          >
            Go to YouTube Studio
          </a>
          <h1>Or</h1>
          <div className="input-container">
            <input
              type="text"
              placeholder="Paste YouTube Live URL here"
              onChange={handleStreamURLChange}
            />
          </div>
        </div>
      ) : (
        <div>
          <p>Livestream Started! Share this class code with students:</p>
          <p>
            <strong>Class Code: {videoId}</strong>
          </p>
          <div className="video-container">
            <iframe
              className="youtube-video"
              src={streamURL}
              title="Teacher's Live Stream"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              className="youtube-chat"
              src={youtubeLiveChatURL}
              title="YouTube Live Chat"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherPage;
