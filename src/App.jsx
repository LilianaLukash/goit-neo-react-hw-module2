

// App.jsx
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import { useState, useEffect } from 'react';
import Notification from './components/Notification/Notification';


function App() {
  const [feedback, setFeedback] = useState(() => {
    let savedFeedback = localStorage.getItem('feedback');
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

 const updateFeedback = (feedbackType) => {
  setFeedback((prevFeedback) => ({
    ...prevFeedback,
    [feedbackType]: prevFeedback[feedbackType] + 1,
  }));
};

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback > 0 ? (feedback.good / totalFeedback * 100).toFixed(0) : 0;

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

return (
    <>
      <Description />
      <Options
        
      updateFeedback={updateFeedback}
      totalFeedback={totalFeedback}
      resetFeedback={resetFeedback}
        
      />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} positiveFeedback={positiveFeedback} />
      ) : ( <Notification />)}
        
           
    </>
  );
}

export default App;
