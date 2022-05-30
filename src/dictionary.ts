export interface Word {
  english: string;
  spanish: string[];
  verb: boolean;
}

export type Dictionary = Word[];

export const initWord: Word = {
  english: "",
  spanish: [],
  verb: false,
};

const dictionary: Dictionary = [
  {
    english: "can / to be able to",
    spanish: ["poder"],
    verb: true,
  },
  {
    english: "this",
    spanish: ["está", "esto"],
    verb: false,
  },
  { spanish: ["hoy"], english: "today", verb: false },
  { spanish: ["porque"], english: "because", verb: false },
  { spanish: ["pero"], english: "but", verb: false },
  { spanish: ["poder"], english: "can", verb: false },
  { spanish: ["alto"], english: "tall", verb: false },
  { spanish: ["bajo"], english: "short", verb: false },
  { spanish: ["moreno"], english: "brunette / dark hair", verb: false },
  { spanish: ["rubio"], english: "blond", verb: false },
  { spanish: ["pelirrojo"], english: "redhead", verb: false },
  { spanish: ["bonito", "lindo"], english: "pretty", verb: false },
  { spanish: ["flaco"], english: "skinny", verb: false },
  { spanish: ["gordo"], english: "fat", verb: false },
  { spanish: ["cómico"], english: "funny", verb: false },
  { spanish: ["serio"], english: "serious", verb: false },
  { spanish: ["timido"], english: "shy", verb: false },
  { spanish: ["sincero"], english: "sincere", verb: false },
  { spanish: ["honesto"], english: "honest", verb: false },
  { spanish: ["generoso"], english: "geneorus ", verb: false },
  { spanish: ["comprar"], english: "to buy", verb: false },
  { spanish: ["pagar"], english: "to pay", verb: false },
  { spanish: ["caja"], english: "till (cashier)", verb: false },
  { spanish: ["marrón"], english: "brown", verb: false },
  { spanish: ["camiseta"], english: "t-shirt", verb: false },
  { spanish: ["gris"], english: "gray", verb: false },
  { spanish: ["el vestido"], english: "dress", verb: false },
  { spanish: ["comprar"], english: "buy", verb: false },
  { spanish: ["ropa"], english: "clothes", verb: false },
  { spanish: ["muy"], english: "very", verb: false },
  { spanish: ["leer"], english: "to read", verb: false },
  { spanish: ["creer"], english: "to think / believe", verb: false },
  { spanish: ["correr"], english: "to run", verb: false },
  { spanish: ["aprender"], english: "to learn", verb: false },
  { spanish: ["aleman"], english: "german", verb: false },
  { spanish: ["escribir"], english: "to write", verb: false },
  { spanish: ["abrir"], english: "to open", verb: false },
  { spanish: ["recibir"], english: "to receive", verb: false },
  { spanish: ["asistir"], english: "to assist/attend", verb: false },
  { spanish: ["carta"], english: "letter", verb: false },
  { spanish: ["puerta"], english: "door", verb: false },
  { spanish: ["lunes"], english: "Monday", verb: false },
  { spanish: ["martes"], english: "Tuesday", verb: false },
  { spanish: ["miércoles"], english: "Wednesday", verb: false },
  { spanish: ["jueves"], english: "Thursday", verb: false },
  { spanish: ["viernes"], english: "Friday", verb: false },
  { spanish: ["sábado"], english: "saturday", verb: false },
  { spanish: ["domingo"], english: "sunday", verb: false },
  { spanish: ["mañana"], english: "tomorrow", verb: false },
  { spanish: ["ayer"], english: "yesterday ", verb: false },
  { spanish: ["anteayer"], english: "before yesterday", verb: false },
  { spanish: ["pasado mañana"], english: "after tomorrow", verb: false },
  { spanish: ["ver"], english: "to see", verb: false },
  { spanish: ["dar"], english: "to give", verb: false },
  { spanish: ["hacer"], english: "to do / make", verb: false },
  { spanish: ["salir"], english: "to leave", verb: false },
  { spanish: ["poner"], english: "to put", verb: false },
];

export default dictionary;
