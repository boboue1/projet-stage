import React, { useState, useEffect } from 'react';
import './style.css';
import Quiz from './components/Quiz';
import Scoreboard from './components/Scoreboard';
import questionsData from './ConstantData';
import logo from './assets/logo.gif'; // Ajoutez votre logo dans le dossier assets

const modulesParAnnee = {
  premiere: ["HTML", "CSS", "JavaScript"],
  deuxieme: ["PHP", "SQL", "Electron"],
  troisieme: ["Symfony", "Node.js", "Angular"]
};

function App() {
  const [year, setYear] = useState(null);
  const [module, setModule] = useState(null);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState("faciles");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerActive, setTimerActive] = useState(true);

  const handleYearSelect = (selectedYear) => {
    setYear(selectedYear);
  };

  const handleModuleSelect = (selectedModule) => {
    setModule(selectedModule);
    setScore(0);
    setDifficulty("faciles");
    setQuestionIndex(0);
    setShowResults(false);
    setTimeLeft(30);
    setTimerActive(true);
  };

  const handleBackToYearSelection = () => {
    setYear(null);
  };

  const handleBackToModuleSelection = () => {
    setModule(null);
    setShowResults(false);
  };

  const handleAnswer = (answer) => {
    const currentQuestions = questionsData[year][module][difficulty];

    if (answer === currentQuestions[questionIndex].answer) {
      setScore(score + 10);
    }

    handleNextQuestion();
  };

  const handlePreviousQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
      setTimeLeft(30);
    }
  };

  const handleNextQuestion = () => {
    if (questionIndex < 4) {
      setQuestionIndex(questionIndex + 1);
      setTimeLeft(30);
    } else {
      if (difficulty === "faciles") {
        setDifficulty("moyennes");
        setQuestionIndex(0);
      } else if (difficulty === "moyennes") {
        setDifficulty("difficiles");
        setQuestionIndex(0);
      } else {
        setShowResults(true);
        setTimerActive(false);
      }
    }
  };

  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
  });

  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Quiz interactif</h1>
      </header>

      {!year ? (
        <div className="year-selection">
          <h2>Choisissez votre année :</h2>
          <button onClick={() => handleYearSelect('premiere')}>Première année</button>
          <button onClick={() => handleYearSelect('deuxieme')}>Deuxième année</button>
          <button onClick={() => handleYearSelect('troisieme')}>Troisième année</button>
        </div>
      ) : !module ? (
        <div className="module-selection">
          <h2>Choisissez un module :</h2>
          {modulesParAnnee[year].map((mod) => (
            <button key={mod} onClick={() => handleModuleSelect(mod)}>{mod}</button>
          ))}
          <button onClick={handleBackToYearSelection} className="back-button">Retour</button>
        </div>
      ) : !showResults ? (
        <Quiz
          question={questionsData[year][module][difficulty][questionIndex]}
          handleAnswer={handleAnswer}
          handlePreviousQuestion={handlePreviousQuestion}
          handleNextQuestion={handleNextQuestion}
          timeLeft={timeLeft}
          difficulty={difficulty}
          questionIndex={questionIndex}
        />
      ) : (
        <div className="scoreboard">
          <Scoreboard score={score} onRestart={handleBackToYearSelection} />
          <button onClick={handleBackToModuleSelection} className="back-button">Retour aux modules</button>
        </div>
      )}
    </div>
  );
}

export default App;
