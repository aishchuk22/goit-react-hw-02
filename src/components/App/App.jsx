import { useEffect, useState } from "react"
import Description from "../Description/Description"
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import css from './App.module.css'


function App() {

  const [votes, setVotes] = useState(() => {
    const savedVotes = JSON.parse(localStorage.getItem("voteGrid"));
    
    if (savedVotes) {
      return savedVotes;
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0
    };
  });

  const updateFeedback = feedbackType => {
    switch (feedbackType) {
      case 'good':
        return setVotes(prev => ({ ...prev, good: prev.good + 1 }));
      
      case 'neutral':
        return setVotes(prev => ({ ...prev, neutral: prev.neutral + 1 }));
      
      case 'bad':
        return setVotes(prev => ({ ...prev, bad: prev.bad + 1 }));
      
      default:
        break;
    }
  }

  const handleReset = () => {
    return setVotes({
    good: 0,
    neutral: 0,
    bad: 0
  });
  }

    useEffect(() => {
      localStorage.setItem("voteGrid", JSON.stringify(votes));
  }, [votes])

  const total = votes.good + votes.neutral + votes.bad;
  const percentage = Math.round((votes.good + votes.neutral) / total * 100)

  return (
    <div className={css.wrapper}>
      <Description />

      <Options
        userFeedback={updateFeedback}
        reset={handleReset} />
      
      {!total && <Notification />}

      {total ? <Feedback votes={votes}
        totalVote={total}
        percentageOfPositive={percentage} /> : ""}
      
    </div>
  )
}

export default App
