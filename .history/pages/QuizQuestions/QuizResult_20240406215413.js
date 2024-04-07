import { useState } from "react";

export default function QuizResult() {

    const [results, setResults] = useState({
        Style1: "Bohemian: 5%",
        Style2: "Vintage: 15%",
        Style3: "Athletic: 20%",
        Style4: "Formal: 25%",
        Style5: "Casual: 30%"
    });

    const [showAnswers, setShowAnswers] = useState(false);

    return (
        <>
            <h1>Quiz Result</h1>
            <h2>
                Overall Fashion Styles:
                {Object.entries(results).map(([style, percentage]) => (
                    <li key={style}>{style}: {percentage}</li>
                ))}
            </h2>
        </>
    )
}