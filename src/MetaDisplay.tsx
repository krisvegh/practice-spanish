import { FC, useState } from 'react';
import { ExtendedVerbMeta } from './dictionary';
import { SettingsParams } from './Settings';
import { convertPersonToDisplay } from './useVerbs';

interface MetaDisplayProps {
  settings: SettingsParams;
  verb: ExtendedVerbMeta | undefined;
}

const SpanishInfinitive: FC<{ word: string }> = ({ word }) => {
  const [showSolution, setShowSolution] = useState(false);
  return (
    <span
      onClick={() => setShowSolution(!showSolution)}
      style={{ cursor: 'pointer' }}
    >
      {showSolution ? word : 'Click here to show spanish infinitive'}
    </span>
  );
};

const MetaDisplay: FC<MetaDisplayProps> = ({ settings, verb }) => {
  if (settings.mode === 'word' || !verb) return null;
  return (
    <div className="meta">
      <div className="left-side">
        {convertPersonToDisplay(verb.person)} | {verb.tense_english} |{' '}
        {verb.mood_english}
      </div>
      <div className="right-side">
        <span>{verb.infinitive_english}</span> |{' '}
        <span>
          <SpanishInfinitive word={verb.infinitive} />
        </span>
      </div>
    </div>
  );
};

export default MetaDisplay;
