import React, { useState } from "react";
import words from "../words.json";
import { Link } from "react-router-dom";
let mediumWords = words.mediumWords;

export default function Keyboard(props) {
  const {
    setText,
    text,
    handleBackspace,
    handleClear,
    handleClick,
    fetchWord,
    resetGame,
    getMediumWord,
    clickedButtons,
  } = props;

  return (
    <main className="button-container w-full h-fit">
      <section className="flex gap-[5px] justify-center">
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("q") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("q")}
        >
          q
        </button>
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("w") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("w")}
        >
          w
        </button>
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("e") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("e")}
        >
          e
        </button>
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("r") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("r")}
        >
          r
        </button>
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("t") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("t")}
        >
          t
        </button>
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("y") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("y")}
        >
          y
        </button>
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("u") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("u")}
        >
          u
        </button>
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("i") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("i")}
        >
          i
        </button>
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("o") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("o")}
        >
          o
        </button>
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("p") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("p")}
        >
          p
        </button>
      </section>
      <section className="flex gap-[5px] justify-center">
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("a") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("a")}
        >
          a
        </button>
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("s") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("s")}
        >
          s
        </button>
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("d") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("d")}
        >
          d
        </button>
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("f") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("f")}
        >
          f
        </button>
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("g") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("g")}
        >
          g
        </button>
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("h") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("h")}
        >
          h
        </button>
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("j") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("j")}
        >
          j
        </button>
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("k") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("k")}
        >
          k
        </button>
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("l") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("l")}
        >
          l
        </button>
      </section>
      <section className="flex gap-[5px] justify-center">
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("z") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("z")}
        >
          z
        </button>
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("x") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("x")}
        >
          x
        </button>
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("c") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("c")}
        >
          c
        </button>
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("v") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("v")}
        >
          v
        </button>
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("b") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("b")}
        >
          b
        </button>
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("n") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("n")}
        >
          n
        </button>
        <button
          onClick={handleClick}
          className={`keyboard-button ${
            clickedButtons.includes("m") ? "bg-red-100" : ""
          }`}
          disabled={clickedButtons.includes("m")}
        >
          m
        </button>
      </section>
      <section className="flex gap-[5px] justify-center">
        <Link to="/">
          <button
            onClick={resetGame}
            className="mt-[20px] font-['pencil'] text-3xl border-dashed rounded-[10px] border border-opacity-[20%] border-black px-[16px] "
          >
            Home
          </button>
        </Link>
      </section>
    </main>
  );
}
