export default function Feedback({ feedback, positiveFeedback}) {
    const total = feedback.good + feedback.bad + feedback.neutral;
    

    return (
        <div className="feedback">
            <p> Good: {feedback.good} </p>
            <p> Bad: {feedback.bad} </p>
            <p> Neutral: {feedback.neutral} </p>
            <p> Total: {total} </p>
            <p> Positive feedback: {positiveFeedback} % </p>
        </div>
    )
}

