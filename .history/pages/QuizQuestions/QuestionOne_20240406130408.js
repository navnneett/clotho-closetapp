import { useState } from "react";
import styles from "../../styles/QuestionOne.module.css";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";
import QuestionFive from "./QuestionFive";
import Button from "@/components/Button";
import ButtonTwo from "@/components/ButtonTwo";
import Image from "next/image";

export default function QuestionOne() {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const questionToAnswer = (answer) => {
        setSelectedAnswer(answer);
    }

    const handleNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null); 
    }

    return (
        <>
            {currentQuestion === 1 && (
                <div className={styles.mainContainer}>
                <Image
                    src="/images/quiz/Progress Indicator.png"
                    alt="Progress Indicator question 1"
                    width={430}
                    height={10}
                    className={styles.imageOne}
                />
                <div className={styles.contentContainer}>
                    
                    <div className={styles.optionContainer}>
                    <p className={styles.openSansText}>Which best describes your approach to fashion?</p>
                        <div className={styles.optionRowOne}>
                            <ButtonTwo onClick={() => questionToAnswer('A')} title="Timeless and Classic" className={styles.optionRowInnerOne}/>
                            <ButtonTwo onClick={() => questionToAnswer('B')} title="Bold and Trendy" className={styles.optionRowInnerTwo}/>
                        </div>
                        <div className={styles.optionRowTwo}>
                            <ButtonTwo onClick={() => questionToAnswer('C')} title="Simple and Practical" className={styles.optionRowInnerThree}/>
                            <ButtonTwo onClick={() => questionToAnswer('D')} title="Unique and Free-spirited" className={styles.optionRowInnerFour}/>
                        </div>
                   
                        <div className={styles.nextButtonContainer}>
                        {selectedAnswer !== null && (
                            <Button onClick={handleNextQuestion} title="Next" className={styles.nextButton} />
                        )}
                        </div>
                    </div>
                    
                </div>
                    </div>
               
            )}

            {currentQuestion === 2 && <QuestionTwo onNextQuestion={handleNextQuestion} />}
            {currentQuestion === 3 && <QuestionThree onNextQuestion={handleNextQuestion}/>}
            {currentQuestion === 4 && <QuestionFour onNextQuestion={handleNextQuestion}/>}
            {currentQuestion === 5 && <QuestionFive onNextQuestion={handleNextQuestion}/>}
        </>
    );
}