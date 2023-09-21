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
            option3: "none",
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
            option3: "<script>",
            answer: "<script>",
        },
    ]

    const [quiz, setQuiz] = useState()
    const [quizDetailBox, setQuizDetailBox] = useState(false)
    const [isQuizStart, setIsQuizStart] = useState(false)
    const [isDone, setIsDone] = useState(false)
    const [score, setScore] = useState(0)

    // console.log(quizLength, "==> quiz length");

    function quizSelectionHandler(quizData) {
        setQuiz(quizData)
    }

    function backgroundColorHandler(quiz) {
        if (quiz[0].name === "HTML") {
            return `#F26457`
        } else if (quiz[0].name === "CSS") {
            return `#254bddff`
        } else {
            return `#ece032`
        }
    }
    console.log(score, "==> score");

    return (
        <div className='mainContainer'>
            {
                !isQuizStart || isDone ? (
                    <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <WelcomePage quizSelectionHandler={quizSelectionHandler} htmlQuizData={htmlQuizData} cssQuizData={cssQuizData} jsQuizData={jsQuizData} setQuizDetailBox={setQuizDetailBox} />
                        {
                            quizDetailBox && <QuizModal>
                                <QuizDetail setQuizDetailBox={setQuizDetailBox} quiz={quiz} setIsQuizStart={setIsQuizStart} backgroundColorHandler={backgroundColorHandler} setIsDone={setIsDone} />
                            </QuizModal>
                        }
                    </div>
                ) : (
                    <div>
                        <QuizMain quiz={quiz} backgroundColorHandler={backgroundColorHandler} setScore={setScore} setIsDone={setIsDone} setQuizDetailBox={setQuizDetailBox} score={score} />
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

function QuizDetail({ setQuizDetailBox, quiz, setIsQuizStart, backgroundColorHandler, setIsDone }) {
    return (
        <div className='modalContainer' style={{ backgroundColor: backgroundColorHandler(quiz) }}>
            <h1 style={{ margin: "50px 0px", fontSize: "3rem" }}>Welcome to {quiz[0].name} quiz</h1>
            <h2>Number of Questions: {quiz.length - 1}</h2>
            <h2>Passing percentage: 70%</h2>
            <div style={{ width: "80%", display: "flex", justifyContent: "space-around", margin: "30px 0px", padding: "10px" }}>
                <button className='btns' onClick={() => {
                    setIsQuizStart(true)
                    setIsDone(false)
                }}>Start Quiz</button>
                <button className='btns' onClick={() => {
                    setQuizDetailBox(false)
                }}>Back</button>
            </div>
        </div>
    )
}

// ---------------------------------------quiz start----------------------------------------//

function QuizMain({ quiz, backgroundColorHandler, setScore, setIsDone, setQuizDetailBox, score }) {
    // console.log(quiz, "==> from main quiz component");
    const [index, setIndex] = useState(1)
    const [answer, setAnswer] = useState("")
    // const [showClass, setShowClass] = useState("")
    const quizLength = quiz.length - 1
    console.log(quizLength, "==> quiz length");
    console.log(index, "==> index number");

    function incrementHandler() {
        if (index <= quizLength) {
            setIndex((i) => i + 1)
        }
    }

    function scoreHandler() {
        if (!answer) {
            return alert("Select atleast one option")
        } else if (answer === quiz[index].answer) {
            setScore((s) => s + 1)
            setAnswer("")
            incrementHandler()
        } else {
            setScore((s) => s)
            setAnswer("")
            incrementHandler()
        }
    }

    console.log(answer, "==> answer");


    return (
        <div style={{ width: "100vw", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className='quizContainer' style={{ backgroundColor: backgroundColorHandler(quiz) }}>
                {
                    index <= quizLength ? (
                        <>
                            <div>
                                <h1 style={{ textAlign: "center" }}>{quiz[0].name} Quiz 1</h1>
                            </div>
                            <div className='option'>
                                <h2>Q: {quiz[index].question}</h2>
                                {
                                    Array.from([quiz[index].option1, quiz[index].option2, quiz[index].option3], (option) => (
                                        <ul>
                                            <li className={`btns ${
                                                answer == option ? "selected" : ''
                                            }`} onClick={() => {
                                                setAnswer(option)
                                            }}>
                                                {option}
                                            </li>
                                        </ul>
                                    ))
                                }
                            </div>
                            <button className="btns" onClick={() => {
                                scoreHandler()
                            }} >next</button>
                        </>
                    ) : <Result setIsDone={setIsDone} setQuizDetailBox={setQuizDetailBox} setScore={setScore} score={score} quizLength={quizLength} />
                }
            </div>
        </div>
    )
}

function Result({ setIsDone, setQuizDetailBox, setScore, score, quizLength }) {

    // const [correct, setCorrect] = useState(0);
    // const [wrong, setWrong] = useState(0);
    const [status, setStatus] = useState("");
    // const [percentage, setPercentage] = useState(0);

    // setCorrect(score);
    // setWrong(quizLength - score);

    const correctAns = score
    const wrongAns = quizLength - score
    const percentage = (score / quizLength) * 100;




    return (
        <div className='resultContainer'>
            <h1 style={{ textAlign: "center", fontSize: "50px" }}>Your result</h1>
            <div style={{ width: "100%", textAlign: "center" }}>
                <h2 style={{ margin: "13px 0px" }}>Correct Answers: {correctAns}</h2>
                <h2 style={{ margin: "13px 0px" }}>Wrong Answers: {wrongAns}</h2>
                <h2 style={{ margin: "13px 0px" }}>Status: {percentage >= 70 ? "Passed" : "Failed"}</h2>
                <h1 style={{ margin: "13px 0px" }}>Percentage: {percentage}%</h1>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <button className='btns'>Try Again</button>
                <button className='btns' onClick={() => {
                    setIsDone(true)
                    setQuizDetailBox(false)
                    setScore(0)
                }}>Done</button>
            </div>
        </div>
    )
}


export default QuizApp