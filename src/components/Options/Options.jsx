
import css from './Options.module.css'
function Options({ nameFeedback, updateFeedback }) {
  return (
    <button
      onClick={() => updateFeedback(nameFeedback)}
      className={css.optionButton}
      type="button"
    >
      {nameFeedback}
    </button>
  );
}

export default Options