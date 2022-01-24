import { useState, useEffect } from 'react';
import Button from './components/Button';
import GiphyDisplay from './components/GiphyDisplay'
import Header from './components/Header';
import './App.css';

function App() {
// variable with apiKey
const apiKey = 'SDmGEb0mccCKobfIt23fAHHDjp1oiENf';

// State to hold giphy data
const [giphy, setGiphy] = useState(null);

// Function to getGiphys
const getGif = async () => {
  const URL = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
  // make fetch request and store response
  const response = await fetch(URL);
  const data = await response.json();
  setGiphy(data);
}
useEffect(() => {
  getGif();
}, []);
return (
  <div className='App'>
    <Header />
    <h2>Giphy Showcase</h2>
    <Button getGif={getGif}/>
    <h3>Use Giphy to load some Gifs</h3>
    <GiphyDisplay giphy={giphy}/>    
  </div>
);
}
export default App;
