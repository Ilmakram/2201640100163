import React, { useState } from 'react';
import InputForm from './components/InputForm';
import URLHistory from './components/URLHistory';
import './App.css';

function App() {
  const [history, setHistory] = useState([]);

  const generateShortUrl = () => {
    return Math.random().toString(36).substring(2, 8);
  };

  const handleAddUrl = (originalUrl) => {
    const shortUrl = 'https://short.ly/' + generateShortUrl();
    const newEntry = {
      originalUrl,
      shortUrl,
      createdAt: new Date().toISOString()
    };
    setHistory([newEntry, ...history]);
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="app-container">
      <h1>URL Shortener</h1>
      <InputForm onSubmit={handleAddUrl} />
      <URLHistory history={history} onClearHistory={handleClearHistory} />
    </div>
  );
}

export default App;