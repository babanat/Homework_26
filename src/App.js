import React, { useState, useCallback } from 'react';
import { Header } from './header/Header';
import { Results } from './results/Results';

const App = () => {
  const [emojiClicks, setEmojiClicks] = useState(null); 
  const [showResults, setShowResults] = useState(false); 

 const handleShowResults = useCallback((results) => {
  setEmojiClicks(results);
  setShowResults(true); 
},[]);
 const handleResetResults = useCallback(() => {
  setEmojiClicks(null);
  setShowResults(false); 
},[]);


  return (
    <div>
       <Header showResults={handleShowResults} resetResults={handleResetResults} />
       {showResults && emojiClicks  && <Results emojiClicks={emojiClicks} />}
    </div>
  );
};

export default App;
