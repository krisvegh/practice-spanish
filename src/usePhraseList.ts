import intersection from "lodash.intersection";
import { useMemo } from "react";
import { randomIntFromInterval } from "./App";
import { Word } from "./dictionary";
import phrases from "./phrases";

const ignoredESWords = [
  "el",
  "la",
  "to",
  "/",
  "las",
  "los",
  "es",
  "son",
  "de",
  "a",
  "del",
];
const ignoredENWords = [
  "/",
  "a",
  "to",
  "the",
  "sth",
  "go",
  "in",
  "is",
  "he",
  "on",
  "for",
  "of",
  "are",
  "don't",
];

const usePhraseList = (currentWord: Word) => {
  const { spanish, english } = currentWord;

  const ESKeywords = useMemo(
    () =>
      spanish
        .map((w) => w.split(" "))
        .flat()
        .filter((w) => !ignoredESWords.includes(w)),
    [spanish]
  );

  const ENKeywords = useMemo(
    () => english.split(" ").filter((w) => !ignoredENWords.includes(w)),
    [english]
  );

  const relatedPhrases = useMemo(() => {
    return phrases.filter((phrase) => {
      const { english: ENPhrase, spanish: ESPhrase, keywords = [] } = phrase;
      const foundESPhrase = intersection(
        [...ESPhrase[0].split(" "), ...keywords],
        ESKeywords
      );
      const foundENPhrase = intersection(ENPhrase.split(" "), ENKeywords);

      return [...foundESPhrase, ...foundENPhrase].length > 0;
    });
  }, [ENKeywords, ESKeywords]);

  if (relatedPhrases.length === 0) return null;
  console.log(relatedPhrases);
  const phraseIndex = randomIntFromInterval(0, relatedPhrases.length - 1);
  return relatedPhrases[phraseIndex];
};

export { usePhraseList };
