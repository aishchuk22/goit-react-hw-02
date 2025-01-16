import css from './Options.module.css'

const Options = ({ userFeedback, reset, total }) => {

  return (
      <div className={css.optionsBox}>
          <button className={css.optionsChoice} onClick={() => userFeedback('Good')}>Good 💕</button>
          <button className={css.optionsChoice} onClick={() => userFeedback('Neutral')}>Neutral ✌</button>
          <button className={css.optionsChoice} onClick={() => userFeedback('Bad')}>Bad 😢</button>
          {total !== 0 && <button className={css.optionsChoice} onClick={reset}>Reset ❌</button>}
    </div>
  )
}

export default Options