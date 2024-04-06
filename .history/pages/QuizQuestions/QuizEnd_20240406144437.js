import React from "react";
import styles from "../../styles/QuizEnd.module.css";
import Button from "@/components/Button";

const QuizEnd = ({ selectedAnswers }) => {
    // Calculate the result based on the selected answers
    const calculateResult = (selectedAnswers) => {
        // Define the mapping of selected answers to result categories
        const resultMapping = {
            'A': {
                'A': 'Casual Outfit',
                'B': 'Trendy Outfit',
                'C': 'Practical Outfit',
                'D': 'Bohemian Outfit'
            },
            'B': {
                'A': 'Comfortable Outfit',
                'B': 'Stylish Outfit',
                'C': 'Affordable Outfit',
                'D': 'Durable Outfit'
            },
            'C': {
                'A': 'Casual Event',
                'B': 'Formal Event',
                'C': 'Work Event',
                'D': 'Outdoor Event'
            },
            'D': {
                'A': 'Organized by Clothing Type',
                'B': 'Organized by Occasion',
                'C': 'Organized by Color',
                'D': 'Organized by Season'
            },
            'E': {
                'A': 'Fit',
                'B': 'Color Matching',
                'C': 'Style Selection',
                'D': 'Comfort vs Fashion'
            }
        };
    
        // Initialize an empty result
        let result = "";
    
        // Iterate over the selected answers and determine the result
        for (let i = 0; i < selectedAnswers.length; i++) {
            const question = String.fromCharCode(65 + i); // Convert index to letter A, B, C, D, E
            const answer = selectedAnswers[i];
    
            // Check if the answer is valid
            if (resultMapping[question] && resultMapping[question][answer]) {
                // Concatenate the result for each question
                result += `${resultMapping[question][answer]} `;
            } else {
                // Handle invalid answers
                return "Invalid answer selected";
            }
        }
    
        // Return the final result
        return result;
    }

    
    return (
        <>
        <div className={styles.container}>

            <h1>Congratulations!</h1>
            <p>You have finished the quiz.</p>
            <p>Your Ideal Outfit Type is {calculateResult(selectedAnswers)}</p> {}

            <div id="endTheQuiz">
<Link href={'/'} className={styles.link}>
    <Button title="Finish" />
</Link>
</div>
        </div>

</>
    )

};

export default QuizEnd; 

