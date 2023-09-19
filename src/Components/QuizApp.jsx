import React from 'react'
import { useState } from 'react';
import "./QuizApp.css";

function QuizApp() {

    const htmlQuizData = [
        {
            question: "What does HTML stand for?",
            option1: "HyperText Markup Language",
            option2: "HighText Markup Language",
            option3: "HyperText Markdown Language",
            answer: "HyperText Markup Language",
        },
        {
            question: "Which of the following tag is used for inserting the largest heading in HTML?",
            option1: "head",
            option2: "<h1>",
            option3: "<h6>",
            answer: "<h1>",
        },
        {
            question: "Which element is used to get highlighted text in HTML5",
            option1: "<u>",
            option2: "<mark>",
            option3: "<highlight>",
            answer: "<mark>",
        },
        {
            question: "How do we write comments in HTML?",
            option1: "</…….>",
            option2: "<!……>",
            option3: "</……/>",
            answer: "<!……>",
        },
    ]

    const cssQuizData = [
        {
            question: "What is CSS?",
            option1: "CSS is a style sheet language",
            option2: "CSS is the language used to style the HTML documents",
            option3: "All of the mentioned",
            answer: "All of the mentioned",
        },
        {
            question: "Which of the following tag is used to embed css in html page?",
            option1: "<css>",
            option2: "<script>",
            option3: "<style>",
            answer: "<style>",
        },
        {
            question: "Which of the following CSS style property is used to specify an italic text?",
            option1: "style",
            option2: "font",
            option3: "font-style",
            answer: "font-style",
        },
        {
            question: "Which of the following is the correct syntax to link an external style sheet in the HTML file?",
            option1: "<link rel=”stylesheet” href=”style.css” />",
            option2: "<link rel=”stylesheet” src=”style.css” />",
            option3: "<style rel=”stylesheet” src=”style.css” />",
            answer: "<link rel=”stylesheet” href=”style.css” />",
        },
    ]

    const jsQuizData = [
        {
            question: "What is javascript?",
            option1: "programing language",
            option2: "Scripting language",
            option3: "Style sheet",
            answer: "programing language",
        },
        {
            question: "Is javascript case-sensitive?",
            option1: "true",
            option2: "false",
            option4: "none",
            answer: "true",
        },
        {
            question: "What year was JavaScript launched?",
            option1: "1996",
            option2: "1994",
            option3: "1995",
            answer: "1995",
        },
        {
            question: "Inside which HTML element do we put the JavaScript?",
            option1: "<scripting>",
            option2: "<js>",
            option4: "<script>",
            answer: "<script>",
        },
    ]

    const [quiz, setQuiz] = useState()
    const [quizDetailBox, setQuizDetailBox] = useState(false)
    // console.log(quiz);

    function quizSelectionHandler(quizData) {
        setQuiz(quizData)
    }

    return (
        <div className='mainContainer'>
            <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <WelcomePage quizSelectionHandler={quizSelectionHandler} htmlQuizData={htmlQuizData} cssQuizData={cssQuizData} jsQuizData={jsQuizData} setQuizDetailBox={setQuizDetailBox} />
                {
                    quizDetailBox && <QuizDetailModal></QuizDetailModal>
                }
            </div>
        </div>
    )
}

// --------------------------------------xxxxxxxxxxxxxxxxxxx----------------------------------//


// ---------------------------------------Welcome page----------------------------------------//

function WelcomePage({ quizSelectionHandler, htmlQuizData, cssQuizData, jsQuizData, setQuizDetailBox }) {
    return (
        <div className='welcomeContainer'>
            <h1 style={{ margin: "50px 0px", fontSize: "3rem" }}>Welcome to the Mern Stack Quiz</h1>
            <button className='html' onClick={() => {
                quizSelectionHandler(htmlQuizData)
                setQuizDetailBox(true)
            }} >HTML</button>
            <button className='css' onClick={() => {
                quizSelectionHandler(cssQuizData)
                setQuizDetailBox(true)
            }} >CSS</button>
            <button className='js' onClick={() => {
                quizSelectionHandler(jsQuizData)
                setQuizDetailBox(true)
            }} >JAVASCRIPT</button>
        </div>
    )
}

function QuizDetailModal() {
    return (
        <div className='modalBox'>
            
        </div>
    )
}

export default QuizApp