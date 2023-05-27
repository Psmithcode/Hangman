import { useState, useEffect } from "react";
import Keyboard from "./components/keyboard";
import Hangman from "./components/hangman";
import axios from "axios";
import words from "./words.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
let mediumWords = words.mediumWords;
let easyWords = words.easyWords;
let hardWords = words.hardWords;

function App() {
  const [lives, setLives] = useState(0);
  const [text, setText] = useState("");
  const [guess, setGuess] = useState([]);
  const [clickedButtons, setClickedButtons] = useState([]);

  /////////////////////keyboard functions//////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const handleClick = async (event) => {
    let target = event.target;
    if (!text.split("").includes(target.innerText)) {
      await setLives(lives + 1);
    }
    await setGuess([...guess, event.target.innerText]);
    setClickedButtons([...clickedButtons, target.innerText]);
  };

  const handleBackspace = () => {
    let poppedText = text;
    poppedText = poppedText.substring(0, poppedText.length - 1);
    setText(poppedText);
  };

  const handleClear = () => {
    setText("");
  };

  ///////////get a hard word//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const fetchWord = async () => {
    let randomNum = Math.floor(Math.random() * hardWords.length);
    await setText(hardWords[randomNum]);
  };

  /////////////get medium word////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const getMediumWord = async () => {
    let randomNum = Math.floor(Math.random() * mediumWords.length);
    await setText(mediumWords[randomNum]);
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const getEasyWord = async () => {
    let randomNum = Math.floor(Math.random() * easyWords.length);
    await setText(easyWords[randomNum]);
  };

  ///////////reset game///////////////////////////////////////////////////////////////////////////////////////////////////////////

  const resetGame = () => {
    setClickedButtons([]);
    setLives(0);
    setGuess([]);
    setText("");
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <BrowserRouter>
      <div className="App flex w-[100%] h-screen flex-col justify-center align-center">
        <Routes>
          <Route
            index
            path="/"
            element={
              <Home
                getEasyWord={getEasyWord}
                getMediumWord={getMediumWord}
                getHardWord={fetchWord}
              />
            }
          />
          <Route
            path="/game"
            element={
              <Hangman
                resetGame={resetGame}
                clickedButtons={clickedButtons}
                guess={guess}
                lives={lives}
                setLives={setLives}
                text={text}
                setText={setText}
                handleClick={handleClick}
                handleBackspace={handleBackspace}
                handleClear={handleClear}
                fetchWord={fetchWord}
                getMediumWord={getMediumWord}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
