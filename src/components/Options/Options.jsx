import css from './Options.module.css';

function Options({ updateFeedback, resetFeedback, totalFeedback }) {
  return (
    <div className="buttons">
      <button
        onClick={() => updateFeedback('good')}
        type="button"
        className={css.optionButton}
      >
        Good
      </button>

      <button
        onClick={() => updateFeedback('neutral')}
        type="button"
        className={css.optionButton}
      >
        Neutral
      </button>

      <button
        onClick={() => updateFeedback('bad')}
        type="button"
        className={css.optionButton}
      >
        Bad
      </button>

      {totalFeedback > 0 && (
        <button
          onClick={resetFeedback}
          type="button"
          className={css.optionButton}
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
