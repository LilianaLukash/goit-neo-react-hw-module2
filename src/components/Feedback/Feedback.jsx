export default function Feedback({ feedback }) {
    const total = feedback.good + feedback.bad + feedback.neutral;
    const positiveFeedback = total > 0 ? (feedback.good / total * 100).toFixed(0) : 0;


    return (
        <div className="feedback">
            <p> Good: {feedback.good} </p>
            <p> Bad: {feedback.bad} </p>
            <p> Neutral: {feedback.neutral} </p>
            <p> Total: {total} </p>
            <p> Positive feedback: {positiveFeedback}  </p>
        </div>
    )
}

