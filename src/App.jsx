import { useState, useEffect } from 'react';

import './App.css';

import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = window.localStorage.getItem('feedbacks');

    if (savedFeedbacks !== null) {
      return JSON.parse(savedFeedbacks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const keys = Object.keys(feedbacks);
  const totalFeedback = keys.reduce((total, key) => feedbacks[key] + total, 0);
  const positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100);

  function updateFeedback(feedbackType) {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  }

  function resetFeedback() {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  return (
    <div className="container">
      <Description />

      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback === 0 ? (
        <Notification message={'No feedback yet'} />
      ) : (
        <Feedback
          feedbackGood={feedbacks.good}
          feedbackNeutral={feedbacks.neutral}
          feedbackBad={feedbacks.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
}

export default App;
