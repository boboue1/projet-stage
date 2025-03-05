// import React from 'react';
import PropTypes from 'prop-types';

function Scoreboard({ score, onRestart }) {
  return (
    <div className="scoreboard">
      <h2>Félicitations! Vous avez terminé le quiz.</h2>
      <p>Votre score est : {score} points</p>
      <button onClick={onRestart}>Choisir un autre module</button>
    </div>
  );
}

// Validation des props avec PropTypes
Scoreboard.propTypes = {
  score: PropTypes.number.isRequired, // Le score doit être un nombre obligatoire
  onRestart: PropTypes.func.isRequired // La fonction de redémarrage est requise
};

export default Scoreboard;
