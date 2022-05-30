import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import dictionary, { Dictionary, initWord, Word } from "./dictionary";
import SolutionIndicator from "./SolutionIndicator";

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function editText(
  text: string,
  character: string,
  selectStart: number,
  selectEnd: number
) {
  return `${text.slice(0, selectStart)}${character}${text.slice(
    selectEnd,
    text.length
  )}`;
}

function App() {
  const ding = useRef(new Audio("./ding.mp3"));
  const [inputValue, setInputValue] = useState("");
  const [currentWord, setCurrentWord] = useState<Word>(initWord);
  const [currentDictionary, setCurrentDictionary] =
    useState<Dictionary>(dictionary);
  const [lifelinesUsed, setLifelinesUsed] = useState(0);
  const [lifelinesUsedInThisRound, setlifelinesUsedInThisRound] =
    useState(false);

  const setNextWord = useCallback(() => {
    const nextIndex = randomIntFromInterval(0, currentDictionary.length - 1);
    setCurrentWord(currentDictionary[nextIndex]);
    setInputValue("");
    setlifelinesUsedInThisRound(false);
  }, [currentDictionary]);

  const [firstUnknownIndex, setfirstUnknownIndex] = useState(0);

  const success = () => {
    if (!lifelinesUsedInThisRound) {
      const newDictionary = currentDictionary.filter(
        (word) => word.english !== currentWord?.english
      );
      if (newDictionary.length === 0) {
        console.log("CONGRATS");
        return;
      }
      setCurrentDictionary(newDictionary);
    }
    ding.current.play();
    setTimeout(() => {
      setNextWord();
    }, 1000);
  };

  const inputChangeHandler = (value: string) => {
    setInputValue(value);
    if (currentWord.spanish.includes(value)) {
      success();
    }
  };

  const revealNextLetter = () => {
    const letter = currentWord.spanish[0][firstUnknownIndex];
    if (!letter) return;
    const newWord = `${inputValue.slice(0, firstUnknownIndex)}${letter}`;
    inputChangeHandler(newWord);
    lifeLine();
  };

  const lifeLine = () => {
    if (!lifelinesUsedInThisRound) {
      setLifelinesUsed((prev) => ++prev);
      setlifelinesUsedInThisRound(true);
    }
  };

  const revealAnswer = () => {
    setInputValue(currentWord.spanish.join(","));
    lifeLine();
    setTimeout(() => {
      setNextWord();
    }, 3000);
  };

  function beforeInputHandler(e: FormEvent<HTMLInputElement>) {
    const start = (e.target as any).selectionStart;
    const end = (e.target as any).selectionEnd;
    let char = (e as any).data;
    switch (char) {
      case "1":
        e.preventDefault();
        inputChangeHandler(editText(inputValue, "á", start, end));
        return;
      case "2":
        e.preventDefault();
        inputChangeHandler(editText(inputValue, "é", start, end));
        return;
      case "3":
        e.preventDefault();
        inputChangeHandler(editText(inputValue, "í", start, end));
        return;
      case "4":
        e.preventDefault();
        inputChangeHandler(editText(inputValue, "ó", start, end));
        return;
      case "5":
        e.preventDefault();
        inputChangeHandler(editText(inputValue, "ú", start, end));
        return;
      case "6":
        e.preventDefault();
        inputChangeHandler(editText(inputValue, "ñ", start, end));
        return;
      case "9":
        e.preventDefault();
        revealNextLetter();
        return;
      case "8":
        e.preventDefault();
        revealAnswer();
        return;
      default:
        return;
    }
  }

  // On game start, set first word
  useEffect(() => {
    setNextWord();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <div className="info">
        <p>{`Remaining words: ${currentDictionary.length}`}</p>
        <p>{`Lifeline used: ${lifelinesUsed}`}</p>
      </div>
      <p className="english">{currentWord?.english}</p>
      <input
        tabIndex={0}
        autoFocus
        className="input-field"
        type="text"
        value={inputValue}
        spellCheck={false}
        onChange={(e) => inputChangeHandler(e.target.value)}
        onBeforeInput={beforeInputHandler}
      />
      <div className="indicator-row">
        <SolutionIndicator
          solutions={currentWord.spanish}
          input={inputValue}
          firstUnknownIndex={setfirstUnknownIndex}
        />
      </div>
      <div className="button-row">
        <button className="button">á (1)</button>
        <button className="button ml">é (2)</button>
        <button className="button ml">í (3)</button>
        <button className="button ml">ó (4)</button>
        <button className="button ml">ú (5)</button>
        <button className="button ml">ñ (6)</button>
        <div className="spacer"></div>
        <button onClick={revealNextLetter} className="button ml pointer">
          Show next letter (9)
        </button>
        <button onClick={revealAnswer} className="button ml pointer">
          Show solution (8)
        </button>
      </div>
    </div>
  );
}

export default App;
