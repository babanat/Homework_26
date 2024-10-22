import React, { useMemo }  from 'react';
import './Results.css';

export const Results = React.memo(({ emojiClicks }) => {
  const { emojis, count} = useMemo(() => {
    const maxClicks = Math.max(...Object.values(emojiClicks));
    const mostVotedEmojis = Object.keys(emojiClicks).filter((emoji) => emojiClicks[emoji] === maxClicks);
    return { emojis: mostVotedEmojis, count: maxClicks };
  }, [emojiClicks]);

  return (
    <div className="results-container">
        <p className="results-description">Результаты Голосования</p>
      <h2>Победитель</h2>
      {emojis.length > 0 && count > 0 ? (
        <div className="winner">
          {emojis.map((emoji, index) => (
            <span key={index} className="winner-emoji">{emoji}</span>
          ))}
          <p>Количество голосов: {count}</p>
        </div>
      ) : (
        <p>Пока голосов нет.</p>
      )}
    </div>
  );
});