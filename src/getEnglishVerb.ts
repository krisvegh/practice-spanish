import { Verb } from './useVerbs';

export const getEnglishVerb = (
  { verb_english, tense_english }: Verb,
  person: string
) => {
  switch (person) {
    case 'form_1s':
      return verb_english;
    case 'form_2s':
      return convert2s(verb_english);
    case 'form_3s':
      return convert3s(verb_english, tense_english);
    case 'form_1p':
      return convert1p(verb_english);
    case 'form_2p':
      return convert2p(verb_english);
    case 'form_3p':
      return convert3p(verb_english);
    default:
      return '';
  }
};

function convert2s(verb: string) {
  return verb
    .replaceAll(/\bI\b/g, 'You')
    .replaceAll(/\bwas\b/g, 'were')
    .replaceAll(/\bam\b/g, 'are');
}

function convert3s(verb: string, tense: string) {
  const v = verb
    .replace(/\bI\b/g, 'He')
    .replaceAll(/\bam\b/g, 'is')
    .replaceAll(/\bhave\b/g, 'has');

  if (tense === 'Present') {
    return v.replace(/(\bHe\b\s)(\w+)(.*)/g, `$1$2s$3`);
  } else {
    return v;
  }
}

function convert1p(verb: string) {
  return verb
    .replaceAll(/\bI\b/g, 'We')
    .replaceAll(/\bwas\b/g, 'were')
    .replaceAll(/\bam\b/g, 'are');
}

function convert2p(verb: string) {
  return verb
    .replaceAll(/\bI\b/g, 'You (all)')
    .replaceAll(/\bwas\b/g, 'were')
    .replaceAll(/\bam\b/g, 'are');
}

function convert3p(verb: string) {
  return verb
    .replaceAll(/\bI\b/g, 'They')
    .replaceAll(/\bwas\b/g, 'were')
    .replaceAll(/\bam\b/g, 'are');
}
