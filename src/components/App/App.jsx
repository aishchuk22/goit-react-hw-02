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
      case 'Good':
        return setVotes(prev => ({ ...prev, good: prev.good + 1 }));
      
      case 'Neutral':
        return setVotes(prev => ({ ...prev, neutral: prev.neutral + 1 }));
      
      case 'Bad':
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

  const totalFeedback = votes.good + votes.neutral + votes.bad

  return (
    <div className={css.wrapper}>
      <Description />
      <Options userFeedback={updateFeedback} reset={handleReset} total={totalFeedback}/>
      {!totalFeedback && <Notification />}
      {totalFeedback ? <Feedback votes={votes} /> : ""}
    </div>
  )
}

export default App
