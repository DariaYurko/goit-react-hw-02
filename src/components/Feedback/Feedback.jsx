import css from './Feedback.module.css';

function Feedback({
  feedbackGood,
  feedbackNeutral,
  feedbackBad,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <ul className={css.feedbackList}>
      <li className={css.feedbackItem}>
        <span className="feedbackProp">Good:</span>
        <span className="feedbackValue">{feedbackGood}</span>
      </li>
      <li className={css.feedbackItem}>
        <span className="feedbackProp">Neutral:&nbsp;</span>
        <span className="feedbackValue">{feedbackNeutral}</span>
      </li>
      <li className={css.feedbackItem}>
        <span className="feedbackProp">Bad:&nbsp;</span>
        <span className="feedbackValue">{feedbackBad}</span>
      </li>
      <li className={css[('feedbackItem', 'feedbackItemTotal')]}>
        <span className="feedbackProp">Total:&nbsp;</span>
        <span className="feedbackValue">{totalFeedback}</span>
      </li>
      <li className={css[('feedbackItem', 'feedbackItemPositive')]}>
        <span className="feedbackProp">Total:&nbsp;</span>
        <span className="feedbackValue">{`${positiveFeedback}%`}</span>
      </li>
    </ul>
  );
}

export default Feedback;
