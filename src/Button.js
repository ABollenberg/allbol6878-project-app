import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './Button.css';
import questionMarks from './question-marks.png';

const Button = () => {
  const [number, setNumber] = useState(null);
  const [state, setState] = useState(null);
  const [genre, setGenre] = useState(null);
  const [history, setHistory] = useState({
    numbers: [],
    states: [],
    genres: [],
  });

  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", 
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", 
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", 
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", 
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", 
    "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", 
    "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", 
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", 
    "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
    "Wisconsin", "Wyoming"
  ];

  const genres = [
    "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", 
    "Mystery", "Romance", "Sci-Fi", "Thriller"
  ];

  const handleRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
    setHistory(prevHistory => ({
      ...prevHistory,
      numbers: [...prevHistory.numbers, randomNum],
    }));
  };

  const handleRandomState = () => {
    const randomState = states[Math.floor(Math.random() * states.length)];
    setState(randomState);
    setHistory(prevHistory => ({
      ...prevHistory,
      states: [...prevHistory.states, randomState],
    }));
  };

  const handleRandomGenre = () => {
    const randomGenre = genres[Math.floor(Math.random() * genres.length)];
    setGenre(randomGenre);
    setHistory(prevHistory => ({
      ...prevHistory,
      genres: [...prevHistory.genres, randomGenre],
    }));
  };

  const handleClearHistory = () => {
    setHistory({ numbers: [], states: [], genres: [] });
  };

  const chartData = {
    labels: ['Numbers', 'States', 'Genres'],
    datasets: [
      {
        label: 'Randomized Counts',
        backgroundColor: '#4682b4',
        borderColor: '#5f9ea0',
        borderWidth: 1,
        hoverBackgroundColor: '#5f9ea0',
        hoverBorderColor: '#4682b4',
        data: [
          history.numbers.length,
          history.states.length,
          history.genres.length,
        ],
      },
    ],
  };

  return (
    <div className="button-container">
      <img src={questionMarks} alt="Question Marks" className="question-image" />

      <button onClick={handleRandomNumber}>Randomize Number</button>
      {number !== null && <p>Random Number: {number}</p>}

      <button onClick={handleRandomState}>Randomize State</button>
      {state && <p>Random State: {state}</p>}

      <button onClick={handleRandomGenre}>Randomize Genre</button>
      {genre && <p>Random Genre: {genre}</p>}

      <button onClick={handleClearHistory}>Clear History</button>

      <Bar data={chartData} />
    </div>
  );
};

export default Button;
