import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import Keyboard from "./keyboard";

export default function Hangman(props) {
  const [hint, setHint] = useState([]);
  const {
    setText,
    text,
    lives,
    setLives,
    resetGame,
    handleBackspace,
    guess,
    handleClear,
    handleClick,
    fetchWord,
    getMediumWord,
    clickedButtons,
  } = props;

  useEffect(() => {
    console.log(text)
    let length = text.length;
    let newHint = [];
    for (let i = 0; i < length; i++) {
      if (guess.includes(text[i])) {
        newHint.push(text[i]);
      } else {
        newHint.push("_");
      }
    }
    setHint(newHint);
  }, [guess]);

  if (lives === 7) {
    return (
      <Fade>
        <div className="flex overflow-hidden flex-col items-center justify-center w-full h-fit">
          <h1 className="  text-6xl font-['pencil']">You lost...</h1>
          <h2 className="text-3xl font-['pencil'] mb-[160px]">{`The word was: ${text}`}</h2>
          <Link to="/">
            <button
              className=" hover:bg-[rgba(0,0,0,0.05)] font-['pencil'] mb-[30px] border-dashed border border-opacity-[20%] border-black px-[16px] rounded-[10px] text-3xl text-black"
              onClick={resetGame}
            >
              back to home
            </button>
          </Link>
        </div>
      </Fade>
    );
  } else if (hint.join("") === text) {
    return (
      <Fade>
        <div className="flex overflow-hidden flex-col items-center justify-center w-full h-fit">
          <h1 className="text-6xl font-['pencil']">You Won!</h1>
          <h2 className="text-3xl font-['pencil'] mb-[160px]">{`The word was: ${text}`}</h2>

          <Link to="/">
            <button
              className=" hover:bg-[rgba(0,0,0,0.05)] font-['pencil'] mb-[30px] border-dashed border border-opacity-[20%] border-black px-[16px] rounded-[10px] text-3xl text-black"
              onClick={resetGame}
            >
              back to home
            </button>
          </Link>
        </div>
      </Fade>
    );
  } else {
    return (
      <Fade>
        <div className="text-center overflow-hidden mb-[100px] w-full h-full flex flex-col justify-center">
          <section
            id="hangman"
            className="flex h-[200px] w-full items-start justify-center"
          >
            {lives >= 1 && (
              <div
                id="hangman-head"
                className="flex w-[40px] h-[40px] border border-black relative border-[2px] bg-[#FCF5E5] rounded-[50%] "
              >
                {lives >= 2 && (
                  <div
                    id="hangman-body"
                    className="flex w-[2px] h-[60px] bg-black border border-black absolute border-1 top-[39px] left-[18px]"
                  ></div>
                )}
                {lives >= 3 && (
                  <div
                    id="hangman-right-arm"
                    className="flex w-[2px] bg-black h-[50px] absolute rotate-[-45deg] top-[40px] left-[35px]"
                  ></div>
                )}
                {lives >= 4 && (
                  <div
                    id="hangman-right-leg"
                    className="flex w-[2px] bg-black h-[50px] absolute rotate-[-20deg] top-[97px] left-[27px]"
                  ></div>
                )}
                {lives >= 5 && (
                  <div
                    id="hangman-left-leg"
                    className="flex w-[2px] bg-black h-[50px] absolute rotate-[20deg] top-[97px] left-[9px]"
                  ></div>
                )}
                {lives >= 6 && (
                  <div
                    id="hangman-left-arm"
                    className="flex w-[2px] bg-black h-[50px] absolute rotate-45 top-[40px] left-[1px]"
                  ></div>
                )}
              </div>
            )}
          </section>
          {hint.length > 0 && (
            <section className="flex items-center font-thin  justify-center h-[40px] w-full text-5xl mb-[10px]">
              {hint.map((underscore, index) => (
                <span className="mx-[10px]" key={index}>
                  {underscore}
                </span>
              ))}
            </section>
          )}
          <Keyboard
            resetGame={resetGame}
            clickedButtons={clickedButtons}
            setText={setText}
            text={text}
            handleClick={handleClick}
            handleBackspace={handleBackspace}
            handleClear={handleClear}
            fetchWord={fetchWord}
            getMediumWord={getMediumWord}
          />
        </div>
      </Fade>
    );
  }
}
