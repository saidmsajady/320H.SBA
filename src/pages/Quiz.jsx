import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = () => {
  const [countries, setCountries] = useState([]);
  // The state to store the fetched countries ^
  const [currentCountry, setCurrentCountry] = useState(null);
  // The state for the current country for the quiz question ^
  const [score, setScore] = useState(0);
  // The state that tracks the users current quiz score ^
  const [questionIndex, setQuestionIndex] = useState(0);
  // The state that contains the current question number index ^
  const [choices, setChoices] = useState([]);
  // The state that stores the multiple choice options ^
  const [gameOver, setGameOver] = useState(false);
  // The last state that indicates if the game is over or not ^
  /* 
    const [selectedChoice, setSelectedChoice] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(null);
  */
  // ^ Was not able to implement showing the answer incorrect/correct for each question

  // Fetches the countries from the country API
  useEffect(() => {
    async function fetchCountries() {
      const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,capital,flags');
      setCountries(response.data);
    }
    fetchCountries();
  }, []);

  // Generates new questions for each question index
  useEffect(() => {
    if (countries.length > 0) {
      generateQuestion();
    }
  }, [countries, questionIndex]);

  // The function for creating new questions
  const generateQuestion = () => {
    const country = countries[Math.floor(Math.random() * countries.length)];
    setCurrentCountry(country);
    const choices = [country.capital[0]];
    while (choices.length < 4) {
      const randomCountry = countries[Math.floor(Math.random() * countries.length)];
      if (!choices.includes(randomCountry.capital[0])) {
        choices.push(randomCountry.capital[0]);
      }
    }
    setChoices(shuffleArray(choices));
  };

  // The function to shuffle the array
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // The function for points if the user gets the question correct or incorrect
  const handleAnswer = (choice) => {
    if (choice === currentCountry.capital[0]) {
      setScore(score + 1);
    }
    if (questionIndex < 9) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setGameOver(true);
    }
  };

  return (
    <div className="quiz-container">
      {gameOver ? (
        <div>
          <h1>Game Over!</h1>
          <p>Your score: {score}</p>
          <button onClick={() => window.location.reload()}>Play Again</button>
        </div>
      ) : (
        currentCountry && (
          <div>
            <h1>Question {questionIndex + 1}</h1>
            <img src={currentCountry.flags.svg} alt={`${currentCountry.name.common} flag`} width="100" />
            <h2>What is the capital of {currentCountry.name.common}?</h2>
            {choices.map((choice, index) => (
              <button key={index} onClick={() => handleAnswer(choice)}>
                {choice}
              </button>
            ))}
          </div>
        )
      )}
    </div>
  );
}

export default Quiz;