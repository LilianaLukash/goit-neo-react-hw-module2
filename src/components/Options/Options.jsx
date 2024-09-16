export default function Options({ feedback, updateFeedback }) {
//   const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div className="options">
      <button onClick={() => updateFeedback(feedback.good)}>Good</button>
      <button onClick={() => updateFeedback(feedback.neutral)}>Bad</button>
      <button onClick={() => updateFeedback(feedback.bad)}>Neutral</button>
      {/* {totalFeedback > 0 && (
        <button onClick={resetFeedback}>Reset</button>
      )} */}
    </div>
  );
}