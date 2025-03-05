import PropTypes from 'prop-types';

/**
 * Composant Scoreboard : Affiche le score final du joueur et permet de recommencer un quiz.
 * 
 * @param {number} score - Le score total obtenu par l'utilisateur à la fin du quiz.
 * @param {Function} onRestart - Fonction qui permet de redémarrer le quiz en choisissant un autre module.
 */
function Scoreboard({ score, onRestart }) {
  return (
    <div className="scoreboard">
      {/* Message de félicitations affiché lorsque l'utilisateur termine le quiz */}
      <h2>Félicitations! Vous avez terminé le quiz.</h2>

      {/* Affichage du score final obtenu par l'utilisateur */}
      <p>Votre score est : {score} points</p>

      {/* Bouton permettant à l'utilisateur de redémarrer le quiz et de choisir un nouveau module */}
      <button onClick={onRestart}>Choisir un autre module</button>
    </div>
  );
}

// Validation des props avec PropTypes pour garantir que les bonnes données sont reçues
Scoreboard.propTypes = {
  score: PropTypes.number.isRequired, // Le score doit être un nombre et est obligatoire
  onRestart: PropTypes.func.isRequired // La fonction de redémarrage doit être une fonction et est obligatoire
};

export default Scoreboard;
