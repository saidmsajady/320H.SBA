SBA 320H Geography Quiz Application: React and REST Countries API

Introduction:

Welcome to my Geography Quiz Application! This project demonstrates my proficiency in React, including useState and useEffect hooks, routing with react-router-dom, and integration with the REST Countries API. The goal of this application is to test and enhance your knowledge of world geography by quizzing users on country capitals.

Objectives:

- Implement a React application with useState and useEffect hooks.
- Create a two-page application with react-router-dom.
- Fetch and display data from the REST Countries API.
- Develop a quiz game to test geographical knowledge.

Features:

Application Structure:
- Home Page: Introduction to the quiz and instructions on how to start.
- Quiz Page: A quiz that presents questions about country capitals and tracks user performance.

React Components:
- NavBar Component: Navigation links to switch between the Home and Quiz pages.
- Home Component: Displays the purpose of the application and instructions.
Quiz Component: Manages the quiz game, including fetching countries, generating questions, and handling user answers.

REST Countries API Integration:
- API Endpoints: Fetch data from https://restcountries.com/v3.1/all for country names, capitals, and flags.

Routes Explanation:

Home Page:
- Route: /
- Description: Welcome screen with information about the quiz.
- HTTP Method: GET
- Functionality: Displays a welcome message and instructions for starting the quiz.

Quiz Page:
- Route: /quiz
- Description: Quiz page where users answer questions about country - capitals.
- HTTP Method: GET
- Functionality: Displays quiz questions, options, and tracks the user's score.

Struggles and Future Plans:
- I initially struggled with providing immediate feedback for each answer (correct or incorrect) but managed to implement the game with score tracking and a game-over state. In the future, I plan to enhance the quiz by adding immediate feedback for each answer and improving the user interface.
- Add user authentication to save quiz scores and progress.
- Integrate additional features such as difficulty levels and timed quizzes.

Instructions:
- I created a React application with the following technical requirements. I focused on meeting the minimum requirements first and then added more features and styling.

Requirements:
- Utilize React useState and useEffect hooks.
- Implement routing with react-router-dom.
- Fetch data from the REST Countries API and display it.
- Ensure the application runs without errors.

Installing/Usage:
- Clone the GitHub repository: https://github.com/saidmsajady/320H.SBA
- Ensure you have Node.js installed on your machine.
- Install dependencies: npm install
- Start the application: npm run dev

Languages:
- JavaScript: The primary language used for React development.
- React.js: For building the user interface and handling state.
- REST Countries API: For fetching country data.
- CSS: For styling the application.