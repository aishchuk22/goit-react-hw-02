import css from './Feedback.module.css'

const Feedback = ({ votes }) => {

  const total = votes.good + votes.neutral + votes.bad;
  const percentage = Math.round((votes.good + votes.neutral) / total * 100)

  return (
    <ul className={css.feedbackList}>
          <li className={css.feedbackListItem}>Good: {votes.good}</li>
          <li className={css.feedbackListItem}>Neutral: {votes.neutral}</li>
          <li className={css.feedbackListItem}>Bad: {votes.bad}</li>
          <li className={css.feedbackListItem}>Total: {total}</li>
      <li style={{ color: percentage > 70 ? "green" : percentage > 50 ? "yellow" : "red" }} className={css.feedbackListItem}>Positive: {percentage}%</li>
    </ul>
  )
}

export default Feedback