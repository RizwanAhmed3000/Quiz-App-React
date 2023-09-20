import React from 'react'
import { useState } from 'react';
import "./QuizApp.css";

// ---------------------------------------Main Conponent----------------------------------------//

function QuizApp() {

    const htmlQuizData = [
        {
            name: "HTML"
        },
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
            name: "CSS"
        },
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
            name: "Javascript"
        },
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
    const [isQuizStart, setIsQuizStart] = useState(false)
    // console.log(quiz);

    function quizSelectionHandler(quizData) {
        setQuiz(quizData)
    }

    function backgroundColorHandler(quiz) {
        if (quiz[0].name == "HTML") {
            return `#F26457`
        } else if (quiz[0].name == "CSS"){
            return `#254bddff`
        } else {
            return `#ece032`
        }
    }

    return (
        <div className='mainContainer'>
            {
                !isQuizStart ? (
                    <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <WelcomePage quizSelectionHandler={quizSelectionHandler} htmlQuizData={htmlQuizData} cssQuizData={cssQuizData} jsQuizData={jsQuizData} setQuizDetailBox={setQuizDetailBox} />
                        {
                            quizDetailBox && <QuizModal>
                                <QuizDetail setQuizDetailBox={setQuizDetailBox} quiz={quiz} setIsQuizStart={setIsQuizStart} backgroundColorHandler={backgroundColorHandler} />
                            </QuizModal>
                        }
                    </div>
                ) : (
                    <div>
                            <QuizMain quiz={quiz} backgroundColorHandler={backgroundColorHandler} />
                    </div>
                )
            }

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

// ---------------------------------------quiz modal----------------------------------------//

function QuizModal({ children }) {
    return (
        <div className='modalBox'>
            {children}
        </div>
    )
}

// ---------------------------------------quiz detail----------------------------------------//

function QuizDetail({ setQuizDetailBox, quiz, setIsQuizStart, backgroundColorHandler }) {
    return (
        <div className='modalContainer' style={{ backgroundColor: backgroundColorHandler(quiz) }}>
            <h1 style={{ margin: "50px 0px", fontSize: "3rem" }}>Welcome to {quiz[0].name} quiz</h1>
            <h2>Number of Questions: {quiz.length - 1}</h2>
            <h2>Passing percentage: 70%</h2>
            <div style={{ width: "80%", display: "flex", justifyContent: "space-around", margin: "30px 0px", padding: "10px" }}>
                <button className='btns' onClick={() => {
                    setIsQuizStart(true)
                }}>Start Quiz</button>
                <button className='btns' onClick={() => {
                    setQuizDetailBox(false)
                }}>Back</button>
            </div>
        </div>
    )
}

// ---------------------------------------quiz start----------------------------------------//

function QuizMain({ quiz, backgroundColorHandler }) {
    // console.log(quiz, "==> from main quiz component");
    const [index, setIndex] = useState(1)
    const quizLength = quiz.length - 1
    console.log(quizLength);

    function incrementHandler() {
        if (index < quizLength) {
            setIndex((i) => i + 1)
        }
    }

    return (
        <div style={{ width: "100vw", border: "1px solid red", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className='quizContainer' style={{ backgroundColor: backgroundColorHandler(quiz) }}>
                <div>
                    <h1 style={{ textAlign: "center" }}>{quiz[0].name} Quiz 1</h1>
                </div>
                <div>
                    <h2>Q: {quiz[index].question}</h2>
                    <button className='btns' onClick={() => incrementHandler()}>next</button>
                </div>
            </div>
        </div>
    )
}


export default QuizApp