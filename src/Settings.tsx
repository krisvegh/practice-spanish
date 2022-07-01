import { FC, useState } from 'react';
import { allTenses, Mood, Tense } from './useVerbs';

export type Modes = 'word' | 'verbs';

export interface SettingsParams {
  mode: Modes;
  mood: Mood;
  tenses: Tense[];
  wordLimit: number;
  phraseEnabled: boolean;
}

interface Props {
  isOpen: boolean;
  onChange?: (settings: SettingsParams) => void;
}

const Settings: FC<Props> = ({ isOpen, onChange }) => {
  const [mode, setMode] = useState<Modes>('word');
  const [mood, setMood] = useState<Mood>('Indicative');
  const [tenses, setTenses] = useState<Tense[]>(['Present']);
  const [wordLimit, setWordLimit] = useState(50);
  const [phraseEnabled, setphraseEnabled] = useState(true);

  const modeChangeHandler = (mode: Modes) => {
    setMode(mode);
    onChange && onChange({ mode, mood, tenses, wordLimit, phraseEnabled });
  };

  const moodChangeHandler = (mood: Mood) => {
    setMood(mood);
    onChange && onChange({ mode, mood, tenses, wordLimit, phraseEnabled });
  };

  const wordLimitChangeHandler = (wordLimit: number) => {
    setWordLimit(wordLimit);
    onChange && onChange({ mode, mood, tenses, wordLimit, phraseEnabled });
  };

  const phraseSettingHandler = (isEnabled: boolean) => {
    setphraseEnabled(isEnabled);
    onChange && onChange({ mode, mood, tenses, wordLimit, phraseEnabled });
  };

  const toggleTense = (tense: Tense) => {
    setTenses((oldTenses) => {
      if (oldTenses.includes(tense)) {
        const newTenses = oldTenses.filter((t) => t !== tense);
        onChange &&
          onChange({ mood, mode, wordLimit, tenses: newTenses, phraseEnabled });
        return newTenses;
      }
      const newTenses = [...oldTenses, tense];
      onChange &&
        onChange({ mood, mode, wordLimit, tenses: newTenses, phraseEnabled });
      return newTenses;
    });
  };

  return (
    <div className={`settings ${isOpen ? 'open' : ''}`}>
      <div
        style={{ marginTop: '80px', display: 'flex', flexDirection: 'column' }}
        onChange={(e) => modeChangeHandler((e.target as any).value)}
      >
        <p>Mode:</p>
        <div style={{ marginBottom: '10px' }}>
          <input
            id="radio-word"
            type="radio"
            name="mode"
            value="word"
            defaultChecked
          />
          <label htmlFor="radio-word">Words / Phrases</label>
        </div>
        <div>
          <input id="radio-verb" type="radio" name="mode" value="verbs" />
          <label htmlFor="radio-verb">Verb conjugations</label>
        </div>
      </div>
      <div>
        <p>Word limit:</p>
        <input
          type="number"
          min={1}
          value={wordLimit}
          onChange={(e) => wordLimitChangeHandler(Number(e.target.value))}
        />
      </div>
      <div style={{ marginTop: '15px' }}>
        <input
          onChange={(e) => phraseSettingHandler(e.target.checked)}
          id="check-phrase"
          type="checkbox"
          name="mood"
          value="Indicative"
          defaultChecked
        />
        <label htmlFor="check-phrase">Enable phrases</label>
      </div>
      <div
        className={mode === 'verbs' ? '' : 'disabled'}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <div onChange={(e) => moodChangeHandler((e.target as any).value)}>
          <p>Mood:</p>
          <div style={{ marginBottom: '10px' }}>
            <input
              id="check-indicative"
              type="checkbox"
              name="mood"
              value="Indicative"
              defaultChecked
            />
            <label htmlFor="check-indicative">Indicative</label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input
              id="check-subjunctive"
              type="checkbox"
              name="mood"
              value="Subjunctive"
            />
            <label htmlFor="check-subjunctive">Subjunctive</label>
          </div>
        </div>
        <div>
          <p>Tenses:</p>
          {allTenses.map((tense) => (
            <div style={{ marginBottom: '10px' }} key={tense}>
              <input
                readOnly
                id={`check-${tense}`}
                type="checkbox"
                name="tense"
                value={tense}
                checked={tenses.includes(tense)}
                onClick={() => toggleTense(tense)}
              />
              <label htmlFor="check-present">{tense}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
