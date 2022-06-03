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
  { spanish: ["está", "esto"], english: "this", verb: false },
  { spanish: ["hoy"], english: "today", verb: false },
  { spanish: ["porque"], english: "because", verb: false },
  { spanish: ["pero"], english: "but", verb: false },
  { spanish: ["poder"], english: "can", verb: false },
  { spanish: ["alto"], english: "tall", verb: false },
  { spanish: ["bajo"], english: "short", verb: false },
  { spanish: ["moreno"], english: "brunette / dark hair", verb: false },
  { spanish: ["rubio"], english: "blond", verb: false },
  { spanish: ["pelirrojo"], english: "redhead", verb: false },
  { spanish: ["bonito", "lindo", "mono"], english: "pretty", verb: false },
  { spanish: ["delgado", "flaco"], english: "skinny", verb: false },
  { spanish: ["gordo"], english: "fat", verb: false },
  { spanish: ["divertido", "cómico"], english: "funny", verb: false },
  { spanish: ["serio"], english: "serious", verb: false },
  { spanish: ["timido"], english: "shy", verb: false },
  { spanish: ["sincero"], english: "sincere", verb: false },
  { spanish: ["honesto"], english: "honest", verb: false },
  { spanish: ["generoso"], english: "geneorus", verb: false },
  { spanish: ["comprar"], english: "to buy", verb: false },
  { spanish: ["pagar"], english: "to pay", verb: false },
  { spanish: ["la caja"], english: "till (cashier)", verb: false },
  { spanish: ["la caja"], english: "box", verb: false },
  { spanish: ["marrón"], english: "brown", verb: false },
  { spanish: ["camiseta"], english: "t-shirt", verb: false },
  { spanish: ["gris"], english: "gray", verb: false },
  { spanish: ["el vestido"], english: "dress", verb: false },
  { spanish: ["comprar"], english: "buy", verb: false },
  { spanish: ["muy"], english: "very", verb: false },
  { spanish: ["leer"], english: "to read", verb: false },
  { spanish: ["creer"], english: "to think / believe", verb: false },
  { spanish: ["correr"], english: "to run", verb: false },
  { spanish: ["aprender"], english: "to learn", verb: false },
  { spanish: ["alemán"], english: "german", verb: false },
  { spanish: ["escribir"], english: "to write", verb: false },
  { spanish: ["abrir"], english: "to open", verb: false },
  { spanish: ["recibir"], english: "to receive", verb: false },
  { spanish: ["asistir"], english: "to assist/attend", verb: false },
  { spanish: ["carta", "letra"], english: "letter", verb: false },
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
  { spanish: ["jugar"], english: "to play", verb: false },
  { spanish: ["empezar"], english: "to begin / start", verb: false },
  { spanish: ["decir"], english: "to say / tell", verb: false },
  { spanish: ["poder"], english: "to be able to / can", verb: false },
  { spanish: ["preferir"], english: "to prefer", verb: false },
  { spanish: ["la ropa"], english: "clothing", verb: false },
  { spanish: ["el pantalon"], english: "pants", verb: false },
  { spanish: ["los vaqueros"], english: "jeans", verb: false },
  { spanish: ["la camisa"], english: "shirt", verb: false },
  { spanish: ["la corbata"], english: "tie", verb: false },
  { spanish: ["la pajarita"], english: "boetie ", verb: false },
  { spanish: ["la camiseta"], english: "t-shirt", verb: false },
  { spanish: ["la falda"], english: "skirt", verb: false },
  { spanish: ["la blusa"], english: "blouse", verb: false },
  { spanish: ["la chaqueta"], english: "jacket", verb: false },
  { spanish: ["el abrigo"], english: "coat", verb: false },
  { spanish: ["el traje"], english: "suit", verb: false },
  { spanish: ["la gorra"], english: "hat (baseball)", verb: false },
  { spanish: ["los calcetines"], english: "socks", verb: false },
  { spanish: ["los zapatos"], english: "shoes", verb: false },
  { spanish: ["el cinturón"], english: "belt", verb: false },
  { spanish: ["usar"], english: "to wear / to use", verb: false },
  { spanish: ["llevar"], english: "to carry / wear", verb: false },
  { spanish: ["blanco"], english: "white", verb: false },
  { spanish: ["negro"], english: "black", verb: false },
  { spanish: ["gris"], english: "gray", verb: false },
  { spanish: ["azul"], english: "blue", verb: false },
  { spanish: ["amarillo"], english: "yellow", verb: false },
  { spanish: ["naranja"], english: "orange (color)", verb: false },
  { spanish: ["rojo"], english: "red", verb: false },
  { spanish: ["rosa"], english: "pink", verb: false },
  { spanish: ["verde"], english: "green", verb: false },
  { spanish: ["marrón"], english: "brown", verb: false },
  { spanish: ["violeta", "morado"], english: "purple", verb: false },
  { spanish: ["siempre"], english: "always", verb: false },
  { spanish: ["la comida"], english: "food", verb: false },
  { spanish: ["el desayuno"], english: "breakfast", verb: false },
  { spanish: ["el amuerzo"], english: "lunch", verb: false },
  { spanish: ["la cena"], english: "dinner", verb: false },
  { spanish: ["la carne"], english: "meat", verb: false },
  { spanish: ["el chuletón", "el biftec"], english: "steak", verb: false },
  { spanish: ["el pescado"], english: "fish", verb: false },
  { spanish: ["el pollo"], english: "chicken", verb: false },
  { spanish: ["las verduras"], english: "vegetables", verb: false },
  { spanish: ["los guisantes"], english: "peas", verb: false },
  { spanish: ["las judías"], english: "beans", verb: false },
  { spanish: ["las patatas"], english: "potatoes", verb: false },
  { spanish: ["la lechuga"], english: "lettuce", verb: false },
  { spanish: ["las zanahorias"], english: "carrots", verb: false },
  { spanish: ["las frutas"], english: "fruit (plural)", verb: false },
  { spanish: ["los tomates"], english: "tomatoes", verb: false },
  { spanish: ["el arroz"], english: "rice", verb: false },
  { spanish: ["el huevo"], english: "egg", verb: false },
  { spanish: ["asado"], english: "roasted", verb: false },
  { spanish: ["gustar"], english: "to please", verb: false },
  { spanish: ["ese"], english: "that", verb: false },
  { spanish: ["barato"], english: "cheap", verb: false },
  { spanish: ["caro"], english: "expensive", verb: false },
  { spanish: ["falda"], english: "skirt", verb: false },
  { spanish: ["o"], english: "or", verb: false },
  { spanish: ["la familia"], english: "family", verb: false },
  { spanish: ["los parientes"], english: "relatives", verb: false },
  { spanish: ["el padre"], english: "father", verb: false },
  { spanish: ["la madre"], english: "mother", verb: false },
  { spanish: ["los padres"], english: "parents", verb: false },
  { spanish: ["el esposo"], english: "husband", verb: false },
  { spanish: ["la esposa"], english: "wife", verb: false },
  { spanish: ["el hijo"], english: "son", verb: false },
  { spanish: ["la hija"], english: "daughter", verb: false },
  { spanish: ["el hermano"], english: "brother", verb: false },
  { spanish: ["la hermana"], english: "sister", verb: false },
  { spanish: ["el abuelo"], english: "grandfather", verb: false },
  { spanish: ["la abuela"], english: "grandmother", verb: false },
  { spanish: ["el tío"], english: "uncle", verb: false },
  { spanish: ["la tía"], english: "aunt", verb: false },
  { spanish: ["el nieto"], english: "grandson", verb: false },
  { spanish: ["la nieta"], english: "granddoughter", verb: false },
  { spanish: ["el primo"], english: "cousin", verb: false },
  { spanish: ["la prima"], english: "cousin", verb: false },
  { spanish: ["el sobrino"], english: "nephew", verb: false },
  { spanish: ["la sobrina"], english: "niece", verb: false },
  { spanish: ["la mascota"], english: "pet", verb: false },
  { spanish: ["viejo"], english: "old", verb: false },
  { spanish: ["joven"], english: "young", verb: false },
  { spanish: ["cuántos"], english: "how many", verb: false },
  { spanish: ["años"], english: "years", verb: false },
  { spanish: ["saber"], english: "to know (information, facts)", verb: false },
  { spanish: ["conocer"], english: "to know (deeper knowledge)", verb: false },
  { spanish: ["enero"], english: "January", verb: false },
  { spanish: ["febrero"], english: "February", verb: false },
  { spanish: ["marzo"], english: "March", verb: false },
  { spanish: ["abril"], english: "April", verb: false },
  { spanish: ["mayo"], english: "May", verb: false },
  { spanish: ["junio"], english: "June", verb: false },
  { spanish: ["julio"], english: "July", verb: false },
  { spanish: ["agosto"], english: "August", verb: false },
  { spanish: ["septiembre"], english: "September", verb: false },
  { spanish: ["octubre"], english: "October", verb: false },
  { spanish: ["noviembre"], english: "November", verb: false },
  { spanish: ["diciembre"], english: "Decembre", verb: false },
  { spanish: ["los días"], english: "days", verb: false },
  { spanish: ["los meses"], english: "months", verb: false },
  { spanish: ["el salón"], english: "living room", verb: false },
  { spanish: ["el sofá"], english: "sofa", verb: false },
  { spanish: ["la tele", "la televisión"], english: "tv", verb: false },
  { spanish: ["el ventilador del techo"], english: "cieling fan", verb: false },
  { spanish: ["la lámpara"], english: "lamp", verb: false },
  { spanish: ["el suelo"], english: "floor", verb: false },
  { spanish: ["la alfombra"], english: "carpet/rug", verb: false },
  { spanish: ["el cojín"], english: "cushion", verb: false },
  { spanish: ["la cocina"], english: "kitchen", verb: false },
  { spanish: ["cocinar"], english: "to cook", verb: false },
  { spanish: ["la estufa"], english: "stove", verb: false },
  { spanish: ["el horno"], english: "oven", verb: false },
  { spanish: ["la nevera"], english: "refrigerator", verb: false },
  { spanish: ["el congelador"], english: "freezer", verb: false },
  { spanish: ["los armarios"], english: "cabinets", verb: false },
  { spanish: ["la mesa"], english: "table", verb: false },
  { spanish: ["el plato"], english: "plate", verb: false },
  { spanish: ["el cuenco"], english: "bowl", verb: false },
  { spanish: ["la taza"], english: "cup", verb: false },
  { spanish: ["el vaso"], english: "glass", verb: false },
  { spanish: ["el tenedor"], english: "fork", verb: false },
  { spanish: ["la cuchara"], english: "spoon", verb: false },
  {
    spanish: ["la cucharita", "la cucharilla"],
    english: "teaspoon",
    verb: false,
  },
  { spanish: ["el cuchillo"], english: "knife", verb: false },
  { spanish: ["el baño"], english: "bathroom", verb: false },
  { spanish: ["la ducha"], english: "shower", verb: false },
  { spanish: ["la bañera"], english: "bathtub", verb: false },
  { spanish: ["el váter", "el inodoro"], english: "toilet", verb: false },
  { spanish: ["el fregadero"], english: "sink", verb: false },
  { spanish: ["el cepillo de dientes"], english: "toothbrush", verb: false },
  {
    spanish: ["la pasta de dientes", "la pasta dentífrica"],
    english: "toothpaste",
    verb: false,
  },
  { spanish: ["el espejo"], english: "mirror", verb: false },
  { spanish: ["la toalla"], english: "towel", verb: false },
  { spanish: ["la toallita"], english: "washcloth", verb: false },
  { spanish: ["el champú"], english: "shampoo", verb: false },
  { spanish: ["el jabón"], english: "soap", verb: false },
  { spanish: ["la cama"], english: "bed", verb: false },
  { spanish: ["la almohada"], english: "pillow", verb: false },
  { spanish: ["la sábana"], english: "sheet", verb: false },
  { spanish: ["la manta"], english: "blanket", verb: false },
  { spanish: ["el armario"], english: "closet", verb: false },
  { spanish: ["la ropa"], english: "clothes", verb: false },
  { spanish: ["la puerta"], english: "door", verb: false },
  { spanish: ["venir"], english: "come", verb: false },
  { spanish: ["tomar"], english: "consume anything", verb: false },
  { spanish: ["la semana que viene"], english: "next week", verb: false },
  { spanish: ["devolver"], english: "return, repay", verb: false },
  { spanish: ["feo"], english: "ugly", verb: false },
  { spanish: ["gordo"], english: "fat", verb: false },
  { spanish: ["flaco"], english: "skinny", verb: false },
  { spanish: ["guapo"], english: "handsome", verb: false },
  { spanish: ["perezoso"], english: "lazy", verb: false },
  {
    spanish: ["correos", "officina de correos"],
    english: "post office",
    verb: false,
  },
  { spanish: ["la iglesia"], english: "church", verb: false },
  { spanish: ["el cuaderno"], english: "notebook", verb: false },
  { spanish: ["el papel"], english: "paper", verb: false },
  { spanish: ["buscar"], english: "to search", verb: false },
  { spanish: ["aburrido"], english: "boring", verb: false },
  { spanish: ["difícil"], english: "difficult", verb: false },
  { spanish: ["obligatorio"], english: "required", verb: false },
  { spanish: ["popular"], english: "popular", verb: false },
  { spanish: ["cuántos"], english: "how many?", verb: false },
  { spanish: ["también"], english: "also / too", verb: false },
  { spanish: ["quién"], english: "who", verb: false },
  { spanish: ["quién es"], english: "who is...", verb: false },
  { spanish: ["quines son"], english: "why are...", verb: false },
  { spanish: ["mismo"], english: "same", verb: false },
  { spanish: ["todo", "toda"], english: "all / everything", verb: false },
  { spanish: ["horario"], english: "schedule", verb: false },
  { spanish: ["aprender"], english: "to learn", verb: false },
  { spanish: ["vender"], english: "to sell", verb: false },
  { spanish: ["pensar", "creer"], english: "think / believe", verb: false },
  {
    spanish: ["entender", "comprender"],
    english: "to understand",
    verb: false,
  },
  { spanish: ["romper"], english: "to break", verb: false },
  { spanish: ["toser"], english: "to couogh", verb: false },
  { spanish: ["correr"], english: "to run", verb: false },
  {
    spanish: ["tener", "deber"],
    english: "have to / should do sth",
    verb: false,
  },
  { spanish: ["prometer"], english: "promise", verb: false },
  { spanish: ["sorprender"], english: "surprise", verb: false },
  { spanish: ["escribir"], english: "to write", verb: false },
  { spanish: ["recibir"], english: "to receive", verb: false },
  { spanish: ["abrir"], english: "to open", verb: false },
  { spanish: ["ocurrir"], english: "to occur ", verb: false },
  { spanish: ["existir"], english: "to exist", verb: false },
  { spanish: ["permitir"], english: "to permit", verb: false },
  { spanish: ["decidir"], english: "to decide", verb: false },
  { spanish: ["tercero"], english: "third party", verb: false },
  { spanish: ["traer"], english: "to carry / bring", verb: false },
  { spanish: ["poner"], english: "to put", verb: false },
  { spanish: ["hacer"], english: "to do / make ", verb: false },
  { spanish: ["salir"], english: "to leave / go out", verb: false },
  { spanish: ["suponer"], english: "to suppose", verb: false },
  { spanish: ["ver"], english: "to see", verb: false },
  { spanish: ["caer"], english: "to fall", verb: false },
  { spanish: ["escoger"], english: "to choose / select", verb: false },
  { spanish: ["siguiente"], english: "next", verb: false },
  { spanish: ["dirigir"], english: "to direct", verb: false },
  { spanish: ["izquierda"], english: "left", verb: false },
  { spanish: ["derecha"], english: "right", verb: false },
  {
    spanish: ["el cuarto", "la habitación", "el dormitorio"],
    english: "bedroom",
    verb: false,
  },
];

export default dictionary;
