import { useState } from "react";

export default function QuestionThree() {
    const [questionThree, setQuestionThree] = useState();

    return(
        <>
            <h1>Question 3</h1>
            <p>Which of the following best describes your approach to fashion?</p>
            <button>a. Classic and timeless</button>
            <button>b. Trendy and experimental</button>
            <button>c. Comfortable and casual</button>
            <button>d. Eclectic and unique</button>
        
        </>
    )
}



