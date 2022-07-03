import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import Congrats from './Congrats';
import { Dictionary, getWordlist, initWord, Word } from './dictionary';
import MetaDisplay from './MetaDisplay';
import { Phrase } from './phrases';
import Settings, { SettingsParams } from './Settings';
import SolutionIndicator from './SolutionIndicator';
import { usePhraseList } from './usePhraseList';
import { useVerbs } from './useVerbs';

export function randomIntFromInterval(min: number, max: number) {
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
  const ding = useRef(new Audio('./ding.mp3'));
  const [inputValue, setInputValue] = useState('');
  const [currentWord, setCurrentWord] = useState<Word | Phrase>(initWord);
  const [currentWordList, setCurrentWordList] = useState<Dictionary>(
    getWordlist(50)
  );
  const [wordListLength, setWordListLength] = useState(50);
  const [lifelinesUsed, setLifelinesUsed] = useState(0);
  const lifelinesUsedInThisRound = useRef(false);
  const [phraseList, setPhraseList] = useState<Phrase[]>([]);
  const [isPhrase, setIsPhrase] = useState(false);
  const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] = useState(false);
  const [settings, setSettings] = useState<SettingsParams>({
    mode: 'word',
    mood: 'Indicative',
    tenses: ['Present'],
    wordLimit: 50,
    phraseEnabled: true,
    specificVerb: '',
  });
  const [showCongratulations, setShowCongratulations] = useState(false);
  const { getVerbList } = useVerbs();

  const phrase = usePhraseList(currentWord);

  const resetRound = () => {
    setInputValue('');
    lifelinesUsedInThisRound.current = false;
  };

  const showNewWord = useCallback(
    (forceWordList?: Word[]) => {
      if (phraseList.length && !isPhrase && settings.mode === 'word') {
        setCurrentWord(phraseList[0]);
        setIsPhrase(true);
        resetRound();
        return;
      }
      const list = forceWordList || currentWordList;
      const nextIndex = randomIntFromInterval(0, list.length - 1);
      setCurrentWord(list[nextIndex]);
      setIsPhrase(false);
      resetRound();
    },
    [currentWordList, isPhrase, phraseList, settings.mode]
  );

  const resetGame = useCallback(
    (forceWordList?: Word[]) => {
      resetRound();
      setLifelinesUsed(0);
      setPhraseList([]);
      setIsPhrase(false);
      setShowCongratulations(false);
      showNewWord(forceWordList);
    },
    [showNewWord]
  );

  const onSettingsChanged = useCallback(
    (newSettings: SettingsParams) => {
      setSettings(newSettings);
      const { mode, wordLimit } = newSettings;
      const newWordList =
        mode === 'word' ? getWordlist(wordLimit) : getVerbList(newSettings);
      if (!newWordList.length) return;
      setCurrentWordList(newWordList);
      setWordListLength(newWordList.length);
      resetGame(newWordList);
    },
    [getVerbList, resetGame]
  );

  const [firstUnknownIndex, setfirstUnknownIndex] = useState(0);

  const win = () => {
    ding.current.play();
    setShowCongratulations(true);
  };

  const roundCompleted = (forceUsedLifelines = false) => {
    const newWordList = currentWordList.filter(
      (word) => word.english !== currentWord?.english
    );
    if (!lifelinesUsedInThisRound.current) {
      if (newWordList.length === 0) {
        win();
        return;
      }
      setCurrentWordList(newWordList);
      setWordListLength(newWordList.length);
      setPhraseList((oldList) =>
        oldList.filter((phrase) => phrase.english !== currentWord.english)
      );
    }
    if (
      (lifelinesUsedInThisRound.current || forceUsedLifelines) &&
      settings.phraseEnabled
    ) {
      if (phrase) {
        setPhraseList((oldState) => [...oldState, phrase]);
      }
    }
    ding.current.play();
    lifelinesUsedInThisRound.current = false;
    setTimeout(() => {
      showNewWord(newWordList);
    }, 1000);
  };

  const inputChangeHandler = (value: string) => {
    setInputValue(value);
    if (currentWord.spanish.includes(value)) {
      roundCompleted();
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
    if (!lifelinesUsedInThisRound.current) {
      setLifelinesUsed((prev) => ++prev);
      lifelinesUsedInThisRound.current = true;
    }
  };

  const revealAnswer = () => {
    setInputValue(currentWord.spanish.join(','));
    lifeLine();
    setTimeout(() => {
      roundCompleted(true);
    }, 2000);
  };

  const toggleDrawer = () => {
    setIsSettingsDrawerOpen((state) => !state);
  };

  function beforeInputHandler(e: FormEvent<HTMLInputElement>) {
    const start = (e.target as any).selectionStart;
    const end = (e.target as any).selectionEnd;
    let char = (e as any).data;
    switch (char) {
      case '1':
        e.preventDefault();
        inputChangeHandler(editText(inputValue, 'á', start, end));
        return;
      case '2':
        e.preventDefault();
        inputChangeHandler(editText(inputValue, 'é', start, end));
        return;
      case '3':
        e.preventDefault();
        inputChangeHandler(editText(inputValue, 'í', start, end));
        return;
      case '4':
        e.preventDefault();
        inputChangeHandler(editText(inputValue, 'ó', start, end));
        return;
      case '5':
        e.preventDefault();
        inputChangeHandler(editText(inputValue, 'ú', start, end));
        return;
      case '6':
        e.preventDefault();
        inputChangeHandler(editText(inputValue, 'ñ', start, end));
        return;
      case '9':
        e.preventDefault();
        revealNextLetter();
        return;
      case '8':
        e.preventDefault();
        revealAnswer();
        return;
      default:
        return;
    }
  }

  // On game start, set first word
  useEffect(() => {
    showNewWord();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {showCongratulations && (
        <Congrats
          words={wordListLength}
          lifelines={lifelinesUsed}
          onNewGame={() => onSettingsChanged(settings)}
        />
      )}
      <Settings
        isOpen={isSettingsDrawerOpen}
        onChange={onSettingsChanged}
      ></Settings>
      <div className="App">
        <p className="settings-button" onClick={toggleDrawer}>
          {isSettingsDrawerOpen ? 'Close' : 'Settings'}
        </p>
        <div className="info">
          <p>{`Remaining words: ${currentWordList.length}/${wordListLength}`}</p>
          <p>{`Lifeline used: ${lifelinesUsed}`}</p>
        </div>
        <p className="english">
          {currentWord?.english.split(' ').map((word, i) => (
            <a
              key={i}
              href={`https://www.spanishdict.com/conjugate/${word}`}
              target="_blank"
              rel="noreferrer"
            >{`${word} `}</a>
          ))}
        </p>
        <MetaDisplay settings={settings} verb={currentWord.meta} />
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
    </>
  );
}

export default App;
