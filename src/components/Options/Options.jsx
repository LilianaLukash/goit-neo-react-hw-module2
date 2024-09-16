
export default function Options({ updateFeedback }) {
  // const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div className="options">
      <button onClick={() => updateFeedback("good")}>Good </button>
      <button onClick={() => updateFeedback("neutral")}>Neutral </button>
      <button onClick={() => updateFeedback("bad")}>Bad </button>
    </div>
  );
}