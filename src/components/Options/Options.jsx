
export default function Options({ updateFeedback ,  totalFeedback ,  resetFeedback }) {
    
  

  return (
    <div className="options">
      <button onClick={() => updateFeedback("good")}>Good </button>
      <button onClick={() => updateFeedback("neutral")}>Neutral </button>
          <button onClick={() => updateFeedback("bad")}>Bad </button>
          <button onClick={() => (totalFeedback!==0)&&resetFeedback() }>Reset </button>
    </div>
  );
}