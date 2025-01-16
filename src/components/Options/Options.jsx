import css from './Options.module.css'

const Options = ({ userFeedback, reset, total }) => {

  return (
      <div className={css.optionsBox}>
          <button className={css.optionsChoice} onClick={() => userFeedback('good')}>Good 💕</button>
          <button className={css.optionsChoice} onClick={() => userFeedback('neutral')}>Neutral ✌</button>
          <button className={css.optionsChoice} onClick={() => userFeedback('bad')}>Bad 😢</button>
          {total !== 0 && <button className={css.optionsChoice} onClick={reset}>Reset ❌</button>}
    </div>
  )
}

export default Options