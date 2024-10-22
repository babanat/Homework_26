import React, { useState, useCallback  } from "react";
import "./Header.css";

export const Header = React.memo(({ showResults, resetResults }) => {
  const [emojiClicks, setEmojiClicks] = useState(() => {
    const savedClicks = localStorage.getItem("emojiClicks");
    return savedClicks ? JSON.parse(savedClicks) : {
          "😄": 0,
          "😊": 0,
          "😎": 0,
          "🤩": 0,
          "😍": 0,
        };
  });

  const handleEmojiClick = useCallback((emoji) => {
    setEmojiClicks((prevState) => {
      const updatedClicks = {
        ...prevState,
        [emoji]: prevState[emoji] + 1,
      };
      localStorage.setItem("emojiClicks", JSON.stringify(updatedClicks));
      return updatedClicks;
    });
  }, []);

  const handleReset = useCallback(() => {
    const resetClicks = {
      "😄": 0,
      "😊": 0,
      "😎": 0,
      "🤩": 0,
      "😍": 0,
    };
    setEmojiClicks(resetClicks);
    localStorage.setItem("emojiClicks", JSON.stringify(resetClicks));
    resetResults();
  },[resetResults]);

  return (
    <div className="header-container">
      <h2>Голосуй за лучший смайлик</h2>
      <div className="emoji-container">
        {Object.keys(emojiClicks).map((emoji) => (
          <div
            key={emoji}
            className="emoji-item"
            onClick={() => handleEmojiClick(emoji)}
          >
            <span className="emoji">{emoji}</span>
            <span className="click-count">{emojiClicks[emoji]}</span>
          </div>
        ))}
      </div>
      <button
        className="show-results-btn"
        onClick={() => showResults(emojiClicks)}
      >
        Show Results
      </button>
      <button className="reset-btn" onClick={handleReset}>
        Reset Results
      </button>
    </div>
  );
});