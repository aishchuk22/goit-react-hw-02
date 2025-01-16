import css from './Feedback.module.css'

const Feedback = ({ votes, totalVote, percentageOfPositive }) => {

  return (
    <ul className={css.feedbackList}>
      <li className={css.feedbackListItem}>Good: {votes.good}</li>
      <li className={css.feedbackListItem}>Neutral: {votes.neutral}</li>
      <li className={css.feedbackListItem}>Bad: {votes.bad}</li>
      <li className={css.feedbackListItem}>Total: {totalVote}</li>
      <li style={{ color: percentageOfPositive > 70 ? "green" : percentageOfPositive > 50 ? "yellow" : "red" }}
        className={css.feedbackListItem}>Positive: {percentageOfPositive}%</li>
    </ul>
  )
}

export default Feedback