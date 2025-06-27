import React, { useReducer } from "react";
import feedbackReducer, { initialState } from "./reducers/feedbackReducer";






function Feedback() {
    const [state, dispatch] = useReducer(feedbackReducer, initialState);

    const total = state.good + state.neutral + state.bad;
    const positivePercent = total === 0 ? 0 : Math.round((state.good / total) * 100);

    return (
        <div className="text-center bg-gray-500 w-50 mt-4 m-auto p-3 rounded-5 text-white">
            <h1 className="bg-gray-800 rounded-5 p-1">Feedback App </h1>

            <div className="mb-5 flex justify-content-center gap-5 mt-5">
                <button className="p-2 bg-gray-800 rounded-2" onClick={() => dispatch({ type: "GOOD" })}>Good</button>
                <button  className="p-2 bg-gray-800 rounded-2"  onClick={() => dispatch({ type: "NEUTRAL" })} style={{ margin: "0 10px" }}>
                    Neutral
                </button>
                <button  className="p-2 bg-gray-800 rounded-2"  onClick={() => dispatch({ type: "BAD" })}>Bad</button>
            </div>

            <div className="mb-5">
                <p className="bg-gray-800 p-1 w-50 m-auto rounded-2">Good: {state.good}</p>
                <p className="bg-gray-800 p-1 w-50 m-auto rounded-2 mt-2">Neutral: {state.neutral}</p> 
                <p  className="bg-gray-800 p-1 w-50 m-auto rounded-2 mt-2">Bad: {state.bad}</p>
                <hr />
                <p className="bg-gray-800 p-1 w-50 m-auto rounded-2 mt-2">Total Feedback: {total}</p>
                <p className="bg-gray-800 p-1 w-50 m-auto rounded-2 mt-2">Positive Feedback: {positivePercent}%</p>
            </div>

            <button onClick={() => dispatch({ type: "RESET" })} className="bg-red-500 rounded-2 text-white p-2">
                Reset Feedback
            </button>
        </div>
    );
}

export default Feedback;
