// import React from 'react';
import PropTypes from 'prop-types';

const Quiz = ({ 
  question, 
  handleAnswer, 
  handlePreviousQuestion, 
  handleNextQuestion, 
  timeLeft, 
  difficulty, 
  questionIndex 
}) => {
  return (
    <div className="quiz">
      <h2>{difficulty.toUpperCase()}</h2>
      <p>Temps restant : {timeLeft}s</p>
      <h3>{question.question}</h3>
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePreviousQuestion} disabled={questionIndex === 0}>
          Retour
        </button>
        <button onClick={handleNextQuestion}>Suivant</button>
      </div>
    </div>
  );
};

// Validation des props avec PropTypes
Quiz.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  handleAnswer: PropTypes.func.isRequired,
  handlePreviousQuestion: PropTypes.func.isRequired,
  handleNextQuestion: PropTypes.func.isRequired,
  timeLeft: PropTypes.number.isRequired,
  difficulty: PropTypes.string.isRequired,
  questionIndex: PropTypes.number.isRequired
};

export default Quiz;

