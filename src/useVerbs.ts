import Papa from 'papaparse';
import { useCallback, useEffect, useState } from 'react';
import { Word } from './dictionary';
import { getEnglishVerb } from './getEnglishVerb';
import getRandomElements from './getRandomElements';
import { SettingsParams } from './Settings';

export type Mood = 'Indicative' | 'Subjunctive';
export type Tense =
  | 'Present'
  | 'Future'
  | 'Imperfect'
  | 'Preterite'
  | 'Conditional'
  | 'Present Perfect'
  | 'Future Perfect'
  | 'Past Perfect'
  | 'Preterite (Archaic)'
  | 'Conditional Perfect';

export const allTenses: Tense[] = [
  'Present',
  'Future',
  'Imperfect',
  'Preterite',
  'Conditional',
  'Present Perfect',
  'Future Perfect',
  'Past Perfect',
  'Preterite (Archaic)',
  'Conditional Perfect',
];

export const allPersons: Partial<keyof Verb>[] = [
  'form_1s',
  'form_2s',
  'form_3s',
  'form_1p',
  'form_2p',
  'form_3p',
];

export interface Verb {
  infinitive: string;
  infinitive_english: string;
  mood: string;
  mood_english: Mood;
  tense: string;
  tense_english: Tense;
  verb_english: string;
  form_1s: string;
  form_2s: string;
  form_3s: string;
  form_1p: string;
  form_2p: string;
  form_3p: string;
  gerund: string;
  gerund_english: string;
  pastparticiple: string;
  pastparticiple_english: string;
}

export const convertPersonToDisplay = (person: string) => {
  switch (person) {
    case 'form_1s':
      return 'I / Yo';
    case 'form_2s':
      return 'You / Tú';
    case 'form_3s':
      return 'He, She / El, Ella, Usted';
    case 'form_1p':
      return 'We / Nosotros';
    case 'form_2p':
      return 'You all / Vosotros';
    case 'form_3p':
      return 'They / Ellos, Ellas, Utds.';
    default:
      return '';
  }
};

const useVerbs = () => {
  const [verbs, setVerbs] = useState<Verb[]>([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch('./verb_database.csv');
      const text = await response.text();
      const { data } = Papa.parse<Verb>(text, { header: true });
      setVerbs(data);
    }
    getData();
  }, []);

  const getRandomPerson = useCallback(
    () => getRandomElements(allPersons, 1)[0],
    []
  );

  const getVerbList = useCallback(
    (settings: SettingsParams): Word[] => {
      const { tenses, wordLimit, mood, specificVerb } = settings;
      const filteredVerbs = verbs.filter((verb) => {
        return (
          tenses.includes(verb.tense_english) && mood === verb.mood_english
        );
      });

      const hasSpecificValue = Boolean(specificVerb.length);

      const specificVerbs = hasSpecificValue
        ? filteredVerbs.filter((verb) => {
            return verb.infinitive === specificVerb;
          })
        : [];

      const foundSpecificWord = Boolean(specificVerbs.length);

      if (foundSpecificWord) {
        const sWords: Word[] = specificVerbs
          .map((verb) => {
            return allPersons.map((person) => ({
              english: getEnglishVerb(verb, person),
              spanish: [verb[person]],
              meta: { ...verb, person },
            }));
          })
          .flat();

        return sWords;
      }

      const words: Word[] = filteredVerbs.map((verb) => {
        const person = getRandomPerson();
        return {
          english: getEnglishVerb(verb, person),
          spanish: [verb[person]],
          meta: { ...verb, person },
        };
      });

      return getRandomElements(words, wordLimit);
    },
    [getRandomPerson, verbs]
  );

  return { verbs, getVerbList };
};

export { useVerbs };
