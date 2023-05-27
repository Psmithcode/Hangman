import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal";

export default function Home(props) {
  const { getEasyWord, getMediumWord, getHardWord } = props;
  return (
    <Fade>
      <div className="home w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-6xl font-['pencil'] mb-[80px] ">Hangman</h1>
        <h3 className="font-['pencil'] text-4xl mb-[20px]">
          Choose Difficulty:
        </h3>
        <Link to="/game">
          <button
            onClick={getEasyWord}
            className=" hover:bg-[rgba(0,0,0,0.05)] font-['pencil']  mb-[30px] border-dashed border border-opacity-[20%] border-black px-[16px] rounded-[10px] text-2xl text-black"
            value="easy"
          >
            Easy
          </button>
        </Link>
        <Link to="/game">
          <button
            onClick={getMediumWord}
            className=" hover:bg-[rgba(0,0,0,0.05)] font-['pencil'] mb-[30px] border-dashed border border-opacity-[20%] border-black px-[16px] rounded-[10px] text-2xl text-black"
            value="medium"
          >
            Medium
          </button>
        </Link>
        <Link to="/game">
          <button
            onClick={getHardWord}
            className=" hover:bg-[rgba(0,0,0,0.05)] font-['pencil'] mb-[30px] border-dashed border border-opacity-[20%] border-black px-[16px]  rounded-[10px] text-2xl text-black"
            value="hard"
          >
            Hard
          </button>
        </Link>
      </div>
    </Fade>
  );
}
