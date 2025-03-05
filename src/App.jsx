import React, { useState, useEffect } from 'react';
import './style.css';
import Quiz from './components/Quiz';
import Scoreboard from './components/Scoreboard';
import questionsData from './ConstantData';
import logo from './assets/logo.gif'; // Ajout du logo depuis le dossier assets

// Définition des modules disponibles pour chaque année d'étude
const modulesParAnnee = {
  premiere: ["HTML", "CSS", "JavaScript"],
  deuxieme: ["PHP", "SQL", "Electron"],
  troisieme: ["Symfony", "Node.js", "Angular"]
};

function App() {
  // États pour gérer la progression du quiz et les sélections de l'utilisateur
  const [year, setYear] = useState(null); // Année d'étude sélectionnée
  const [module, setModule] = useState(null); // Module sélectionné
  const [score, setScore] = useState(0); // Score de l'utilisateur
  const [difficulty, setDifficulty] = useState("faciles"); // Niveau de difficulté actuel
  const [questionIndex, setQuestionIndex] = useState(0); // Index de la question en cours
  const [showResults, setShowResults] = useState(false); // Indique si les résultats doivent être affichés
  const [timeLeft, setTimeLeft] = useState(30); // Temps restant pour répondre à une question
  const [timerActive, setTimerActive] = useState(true); // Contrôle l'activation du timer

  // Fonction pour sélectionner une année d'étude
  const handleYearSelect = (selectedYear) => {
    setYear(selectedYear);
  };

  // Fonction pour sélectionner un module et initialiser les variables du quiz
  const handleModuleSelect = (selectedModule) => {
    setModule(selectedModule);
    setScore(0);
    setDifficulty("faciles");
    setQuestionIndex(0);
    setShowResults(false);
    setTimeLeft(30);
    setTimerActive(true);
  };

  // Fonction pour revenir à la sélection de l'année
  const handleBackToYearSelection = () => {
    setYear(null);
  };

  // Fonction pour revenir à la sélection du module
  const handleBackToModuleSelection = () => {
    setModule(null);
    setShowResults(false);
  };

  // Fonction pour gérer la soumission d'une réponse
  const handleAnswer = (answer) => {
    const currentQuestions = questionsData[year][module][difficulty];

    // Vérifie si la réponse est correcte et met à jour le score
    if (answer === currentQuestions[questionIndex].answer) {
      setScore(score + 10);
    }

    // Passe à la question suivante
    handleNextQuestion();
  };

  // Fonction pour revenir à la question précédente
  const handlePreviousQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
      setTimeLeft(30); // Réinitialise le timer
    }
  };

  // Fonction pour passer à la question suivante ou changer de niveau de difficulté
  const handleNextQuestion = () => {
    if (questionIndex < 4) {
      // Passe à la prochaine question du même niveau
      setQuestionIndex(questionIndex + 1);
      setTimeLeft(30);
    } else {
      // Passe au niveau de difficulté suivant
      if (difficulty === "faciles") {
        setDifficulty("moyennes");
        setQuestionIndex(0);
      } else if (difficulty === "moyennes") {
        setDifficulty("difficiles");
        setQuestionIndex(0);
      } else {
        // Affiche les résultats lorsque toutes les questions sont complétées
        setShowResults(true);
        setTimerActive(false);
      }
    }
  };

  // Effet pour gérer le compte à rebours du timer
  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer); // Nettoie le timer à chaque mise à jour
    } else if (timeLeft === 0) {
      handleNextQuestion(); // Passe automatiquement à la question suivante si le temps expire
    }
  });

  return (
    <div className="App">
      {/* En-tête avec le logo et le titre */}
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Quiz interactif</h1>
      </header>

      {/* Étape 1 : Sélection de l'année d'étude */}
      {!year ? (
        <div className="year-selection">
          <h2>Choisissez votre année :</h2>
          <button onClick={() => handleYearSelect('premiere')}>Première année</button>
          <button onClick={() => handleYearSelect('deuxieme')}>Deuxième année</button>
          <button onClick={() => handleYearSelect('troisieme')}>Troisième année</button>
        </div>
      ) : 
      
      /* Étape 2 : Sélection du module */
      !module ? (
        <div className="module-selection">
          <h2>Choisissez un module :</h2>
          {modulesParAnnee[year].map((mod) => (
            <button key={mod} onClick={() => handleModuleSelect(mod)}>{mod}</button>
          ))}
          <button onClick={handleBackToYearSelection} className="back-button">Retour</button>
        </div>
      ) : 
      
      /* Étape 3 : Affichage du quiz */
      !showResults ? (
        <Quiz
          question={questionsData[year][module][difficulty][questionIndex]}
          handleAnswer={handleAnswer}
          handlePreviousQuestion={handlePreviousQuestion}
          handleNextQuestion={handleNextQuestion}
          timeLeft={timeLeft}
          difficulty={difficulty}
          questionIndex={questionIndex}
        />
      ) : 
      
      /* Étape 4 : Affichage du scoreboard */
      (
        <div className="scoreboard">
          <Scoreboard score={score} onRestart={handleBackToYearSelection} />
          <button onClick={handleBackToModuleSelection} className="back-button">Retour aux modules</button>
        </div>
      )}
    </div>
  );
}

export default App;
