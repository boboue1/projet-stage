import axios from 'axios';

// Fonction pour récupérer les questions via l'API Open Trivia Database
export const fetchQuestions = async (level) => {
  const difficulty = getDifficulty(level);  // Définir la difficulté selon le niveau

  try {
    const response = await axios.get('https://opentdb.com/api.php', {
      params: {
        amount: 10,               // 10 questions par niveau
        category: 18,             // Catégorie (18 est pour "Computers")
        difficulty: difficulty,   // Difficulté
        type: 'multiple',        // Type de question : multiple-choice
      },
    });

    // Manipuler les résultats pour les adapter au format
    return response.data.results.map((questionData) => ({
      question: questionData.question,
      options: [...questionData.incorrect_answers, questionData.correct_answer].sort(),
      answer: questionData.correct_answer,
    }));
  } catch (error) {
    console.error("Erreur lors de la récupération des questions : ", error);
    return [];
  }
};

// Fonction pour déterminer la difficulté en fonction du niveau
const getDifficulty = (level) => {
  switch (level) {
    case 1:
      return 'easy';
    case 2:
      return 'medium';
    case 3:
      return 'medium';
    case 4:
      return 'hard';
    case 5:
      return 'hard';
    default:
      return 'easy';
  }
};
