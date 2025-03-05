// Importation des bibliothèques React et PropTypes
import PropTypes from 'prop-types';

/**
 * Composant Quiz : Affiche une question du quiz avec ses options de réponse.
 * 
 * Props :
 * - question : Objet contenant la question et les options de réponse.
 * - handleAnswer : Fonction appelée lorsqu'une réponse est sélectionnée.
 * - handlePreviousQuestion : Fonction pour revenir à la question précédente.
 * - handleNextQuestion : Fonction pour passer à la question suivante.
 * - timeLeft : Nombre représentant le temps restant pour répondre.
 * - difficulty : Chaîne indiquant le niveau de difficulté de la question.
 * - questionIndex : Index de la question actuelle dans la liste.
 */
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
      {/* Affichage du niveau de difficulté en majuscules */}
      <h2>{difficulty.toUpperCase()}</h2>

      {/* Affichage du temps restant pour répondre à la question */}
      <p>Temps restant : {timeLeft}s</p>

      {/* Affichage de la question */}
      <h3>{question.question}</h3>

      {/* Liste des options de réponse sous forme de boutons */}
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>

      {/* Boutons de navigation pour passer à la question suivante ou revenir à la précédente */}
      <div className="navigation-buttons">
        <button onClick={handlePreviousQuestion} disabled={questionIndex === 0}>
          Retour
        </button>
        <button onClick={handleNextQuestion}>Suivant</button>
      </div>
    </div>
  );
};

// Définition des types et validation des props avec PropTypes
Quiz.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired, // La question doit être une chaîne de caractères obligatoire
    options: PropTypes.arrayOf(PropTypes.string).isRequired // Les options doivent être un tableau de chaînes obligatoire
  }).isRequired,
  handleAnswer: PropTypes.func.isRequired, // La fonction handleAnswer est obligatoire
  handlePreviousQuestion: PropTypes.func.isRequired, // La fonction pour revenir en arrière est obligatoire
  handleNextQuestion: PropTypes.func.isRequired, // La fonction pour avancer est obligatoire
  timeLeft: PropTypes.number.isRequired, // Le temps restant doit être un nombre obligatoire
  difficulty: PropTypes.string.isRequired, // Le niveau de difficulté doit être une chaîne obligatoire
  questionIndex: PropTypes.number.isRequired // L'index de la question doit être un nombre obligatoire
};

// Exportation du composant Quiz
export default Quiz;
