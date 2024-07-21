import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = () => {
  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [choices, setChoices] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    async function fetchCountries() {
      const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,capital,flags');
      setCountries(response.data);
    }
    fetchCountries();
  }, []);

  useEffect(() => {
    if (countries.length > 0) {
      generateQuestion();
    }
  }, [countries, questionIndex]);

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

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

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
    <div>
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