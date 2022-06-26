import { Verb } from './useVerbs';

export const getEnglishVerb = ({ verb_english }: Verb, person: string) => {
  switch (person) {
    case 'form_1s':
      return verb_english;
    case 'form_2s':
      return convert2s(verb_english);
    case 'form_3s':
      return convert3s(verb_english);
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
    .replaceAll('I ', 'You ')
    .replaceAll(' was ', ' were ')
    .replaceAll(' am ', ' are ');
}

function convert3s(verb: string) {
  return verb
    .replace('I ', 'He ')
    .replaceAll(' am ', ' is ')
    .replace(/(?<=\bHe\s)(\w+)/, (w) => `${w}s`);
}

function convert1p(verb: string) {
  return verb
    .replaceAll('I ', 'We ')
    .replaceAll(' was ', ' were ')
    .replaceAll(' am ', ' are ');
}

function convert2p(verb: string) {
  return verb
    .replaceAll('I ', 'You (all) ')
    .replaceAll(' was ', ' were ')
    .replaceAll(' am ', ' are ');
}

function convert3p(verb: string) {
  return verb
    .replaceAll('I ', 'They ')
    .replaceAll(' was ', ' were ')
    .replaceAll(' am ', ' are ');
}
