export interface Word {
  english: string;
  spanish: string[];
}

export type Dictionary = Word[];

export const initWord: Word = {
  english: "",
  spanish: [],
};

const dictionary: Dictionary = [
  { spanish: ["está", "esto"], english: "this" },
  { spanish: ["hoy"], english: "today" },
  { spanish: ["porque"], english: "because" },
  { spanish: ["pero"], english: "but" },
  { spanish: ["poder"], english: "can" },
  { spanish: ["alto"], english: "tall" },
  { spanish: ["bajo", "baja"], english: "short" },
  { spanish: ["moreno", "morena"], english: "brunette / dark hair" },
  { spanish: ["rubio"], english: "blond" },
  { spanish: ["pelirrojo"], english: "redhead" },
  { spanish: ["bonito", "lindo", "mono"], english: "pretty" },
  { spanish: ["flaco", "delgado"], english: "skinny" },
  { spanish: ["gordo"], english: "fat" },
  { spanish: ["divertido", "cómico"], english: "funny" },
  { spanish: ["serio"], english: "serious" },
  { spanish: ["timido"], english: "shy" },
  { spanish: ["sincero"], english: "sincere" },
  { spanish: ["honesto"], english: "honest" },
  { spanish: ["generoso"], english: "geneorus" },
  { spanish: ["comprar"], english: "to buy" },
  { spanish: ["pagar"], english: "to pay" },
  { spanish: ["la caja"], english: "till (cashier)" },
  { spanish: ["la caja"], english: "box" },
  { spanish: ["marrón"], english: "brown" },
  { spanish: ["camiseta"], english: "t-shirt" },
  { spanish: ["gris"], english: "gray" },
  { spanish: ["el vestido"], english: "dress" },
  { spanish: ["muy"], english: "very" },
  { spanish: ["leer"], english: "to read" },
  { spanish: ["creer"], english: "to think / believe" },
  { spanish: ["correr"], english: "to run" },
  { spanish: ["aprender"], english: "to learn" },
  { spanish: ["alemán"], english: "german" },
  { spanish: ["escribir"], english: "to write" },
  { spanish: ["abrir"], english: "to open" },
  { spanish: ["recibir"], english: "to receive" },
  { spanish: ["asistir"], english: "to assist/attend" },
  { spanish: ["carta", "letra"], english: "letter" },
  { spanish: ["lunes"], english: "Monday" },
  { spanish: ["martes"], english: "Tuesday" },
  { spanish: ["miércoles"], english: "Wednesday" },
  { spanish: ["jueves"], english: "Thursday" },
  { spanish: ["viernes"], english: "Friday" },
  { spanish: ["sábado"], english: "saturday" },
  { spanish: ["domingo"], english: "sunday" },
  { spanish: ["mañana"], english: "tomorrow" },
  { spanish: ["ayer"], english: "yesterday " },
  { spanish: ["anteayer"], english: "before yesterday" },
  { spanish: ["pasado mañana"], english: "after tomorrow" },
  { spanish: ["ver"], english: "to see" },
  { spanish: ["dar"], english: "to give" },
  { spanish: ["hacer"], english: "to do / make" },
  { spanish: ["poner"], english: "to put" },
  { spanish: ["jugar"], english: "to play" },
  { spanish: ["empezar"], english: "to begin / start" },
  { spanish: ["decir"], english: "to say / tell" },
  { spanish: ["poder"], english: "to be able to / can" },
  { spanish: ["preferir"], english: "to prefer" },
  { spanish: ["la ropa"], english: "clothing" },
  { spanish: ["el pantalon"], english: "pants" },
  { spanish: ["los vaqueros"], english: "jeans" },
  { spanish: ["la camisa"], english: "shirt" },
  { spanish: ["la corbata"], english: "tie" },
  { spanish: ["la pajarita"], english: "boetie " },
  { spanish: ["la camiseta"], english: "t-shirt" },
  { spanish: ["la falda"], english: "skirt" },
  { spanish: ["la blusa"], english: "blouse" },
  { spanish: ["la chaqueta"], english: "jacket" },
  { spanish: ["el abrigo"], english: "coat" },
  { spanish: ["el traje"], english: "suit" },
  { spanish: ["la gorra"], english: "hat (baseball)" },
  { spanish: ["los calcetines"], english: "socks" },
  { spanish: ["los zapatos"], english: "shoes" },
  { spanish: ["el cinturón"], english: "belt" },
  { spanish: ["usar"], english: "to wear / to use" },
  { spanish: ["llevar"], english: "to carry / wear" },
  { spanish: ["blanco"], english: "white" },
  { spanish: ["negro"], english: "black" },
  { spanish: ["gris"], english: "gray" },
  { spanish: ["azul"], english: "blue" },
  { spanish: ["amarillo"], english: "yellow" },
  { spanish: ["naranja"], english: "orange (color)" },
  { spanish: ["rojo"], english: "red" },
  { spanish: ["rosa"], english: "pink" },
  { spanish: ["verde"], english: "green" },
  { spanish: ["marrón"], english: "brown" },
  { spanish: ["violeta", "morado"], english: "purple" },
  { spanish: ["siempre"], english: "always" },
  { spanish: ["la comida"], english: "food" },
  { spanish: ["el desayuno"], english: "breakfast" },
  { spanish: ["el amuerzo"], english: "lunch" },
  { spanish: ["la cena"], english: "dinner" },
  { spanish: ["la carne"], english: "meat" },
  { spanish: ["el chuletón", "el biftec"], english: "steak" },
  { spanish: ["el pescado"], english: "fish" },
  { spanish: ["el pollo"], english: "chicken" },
  { spanish: ["las verduras", "las vegetales"], english: "vegetables" },
  { spanish: ["los guisantes"], english: "peas" },
  { spanish: ["las judías"], english: "beans" },
  { spanish: ["las patatas"], english: "potatoes" },
  { spanish: ["la lechuga"], english: "lettuce" },
  { spanish: ["las zanahorias"], english: "carrots" },
  { spanish: ["las frutas"], english: "fruit (plural)" },
  { spanish: ["los tomates"], english: "tomatoes" },
  { spanish: ["el arroz"], english: "rice" },
  { spanish: ["el huevo"], english: "egg" },
  { spanish: ["asado"], english: "roasted" },
  { spanish: ["gustar"], english: "to please" },
  { spanish: ["ese"], english: "that" },
  { spanish: ["barato", "barata"], english: "cheap" },
  { spanish: ["caro"], english: "expensive" },
  { spanish: ["la falda"], english: "skirt" },
  { spanish: ["o"], english: "or" },
  { spanish: ["la familia"], english: "family" },
  { spanish: ["los parientes"], english: "relatives" },
  { spanish: ["el padre"], english: "father" },
  { spanish: ["la madre"], english: "mother" },
  { spanish: ["los padres"], english: "parents" },
  { spanish: ["el esposo"], english: "husband" },
  { spanish: ["la esposa"], english: "wife" },
  { spanish: ["el hijo"], english: "son" },
  { spanish: ["la hija"], english: "daughter" },
  { spanish: ["el hermano"], english: "brother" },
  { spanish: ["la hermana"], english: "sister" },
  { spanish: ["el abuelo"], english: "grandfather" },
  { spanish: ["la abuela"], english: "grandmother" },
  { spanish: ["el tío"], english: "uncle" },
  { spanish: ["la tía"], english: "aunt" },
  { spanish: ["el nieto"], english: "grandson" },
  { spanish: ["la nieta"], english: "granddoughter" },
  { spanish: ["el primo", "la prima"], english: "cousin" },
  { spanish: ["el sobrino"], english: "nephew" },
  { spanish: ["la sobrina"], english: "niece" },
  { spanish: ["la mascota"], english: "pet" },
  { spanish: ["viejo"], english: "old" },
  { spanish: ["joven"], english: "young" },
  { spanish: ["años"], english: "years" },
  { spanish: ["saber"], english: "to know (information, facts)" },
  { spanish: ["conocer"], english: "to know (deeper knowledge)" },
  { spanish: ["enero"], english: "January" },
  { spanish: ["febrero"], english: "February" },
  { spanish: ["marzo"], english: "March" },
  { spanish: ["abril"], english: "April" },
  { spanish: ["mayo"], english: "May" },
  { spanish: ["junio"], english: "June" },
  { spanish: ["julio"], english: "July" },
  { spanish: ["agosto"], english: "August" },
  { spanish: ["septiembre"], english: "September" },
  { spanish: ["octubre"], english: "October" },
  { spanish: ["noviembre"], english: "November" },
  { spanish: ["diciembre"], english: "Decembre" },
  { spanish: ["los días"], english: "days" },
  { spanish: ["los meses"], english: "months" },
  { spanish: ["el salón"], english: "living room" },
  { spanish: ["el sofá"], english: "sofa" },
  { spanish: ["la tele", "la televisión"], english: "tv" },
  { spanish: ["el ventilador del techo"], english: "cieling fan" },
  { spanish: ["la lámpara"], english: "lamp" },
  { spanish: ["el suelo"], english: "floor" },
  { spanish: ["la alfombra"], english: "carpet/rug" },
  { spanish: ["el cojín"], english: "cushion" },
  { spanish: ["la cocina"], english: "kitchen" },
  { spanish: ["cocinar"], english: "to cook" },
  { spanish: ["la estufa"], english: "stove" },
  { spanish: ["el horno"], english: "oven" },
  { spanish: ["la nevera"], english: "refrigerator" },
  { spanish: ["el congelador"], english: "freezer" },
  { spanish: ["los armarios"], english: "cabinets" },
  { spanish: ["la mesa"], english: "table" },
  { spanish: ["el plato"], english: "plate" },
  { spanish: ["el cuenco"], english: "bowl" },
  { spanish: ["la taza"], english: "cup" },
  { spanish: ["el vaso"], english: "glass (for a drink)" },
  { spanish: ["el vidrio"], english: "glass (as a material)" },
  { spanish: ["el tenedor"], english: "fork" },
  { spanish: ["la cuchara"], english: "spoon" },
  { spanish: ["la cucharita", "la cucharilla"], english: "teaspoon" },
  { spanish: ["el cuchillo"], english: "knife" },
  { spanish: ["el baño"], english: "bathroom" },
  { spanish: ["la ducha"], english: "shower" },
  { spanish: ["la bañera"], english: "bathtub" },
  { spanish: ["el váter", "el inodoro"], english: "toilet" },
  { spanish: ["el fregadero"], english: "sink" },
  { spanish: ["el cepillo de dientes"], english: "toothbrush" },
  {
    spanish: ["la pasta de dientes", "la pasta dentífrica"],
    english: "toothpaste",
  },
  { spanish: ["el espejo"], english: "mirror" },
  { spanish: ["la toalla"], english: "towel" },
  { spanish: ["la toallita"], english: "washcloth" },
  { spanish: ["el champú"], english: "shampoo" },
  { spanish: ["el jabón"], english: "soap" },
  { spanish: ["la cama"], english: "bed" },
  { spanish: ["la almohada"], english: "pillow" },
  { spanish: ["la sábana"], english: "sheet" },
  { spanish: ["la manta"], english: "blanket" },
  { spanish: ["el armario"], english: "closet" },
  { spanish: ["la ropa"], english: "clothes" },
  { spanish: ["la puerta"], english: "door" },
  { spanish: ["venir"], english: "come" },
  { spanish: ["tomar"], english: "consume anything (take in)" },
  { spanish: ["la semana que viene"], english: "next week" },
  { spanish: ["devolver"], english: "return, repay" },
  { spanish: ["feo"], english: "ugly" },
  { spanish: ["gordo"], english: "fat" },
  { spanish: ["flaco"], english: "skinny" },
  { spanish: ["guapo"], english: "handsome" },
  { spanish: ["perezoso"], english: "lazy" },
  { spanish: ["correos", "officina de correos"], english: "post office" },
  { spanish: ["la iglesia"], english: "church" },
  { spanish: ["el cuaderno"], english: "notebook" },
  { spanish: ["el papel"], english: "paper" },
  { spanish: ["buscar"], english: "to search" },
  { spanish: ["aburrido"], english: "boring" },
  { spanish: ["difícil"], english: "difficult" },
  { spanish: ["obligatorio"], english: "required" },
  { spanish: ["popular"], english: "popular" },
  { spanish: ["cuántos"], english: "how many?" },
  { spanish: ["también"], english: "also / too" },
  { spanish: ["quién"], english: "who" },
  { spanish: ["quién es"], english: "who is..." },
  { spanish: ["quines son"], english: "why are..." },
  { spanish: ["mismo", "misma"], english: "same" },
  { spanish: ["todo", "toda"], english: "all / everything" },
  { spanish: ["horario"], english: "schedule" },
  { spanish: ["aprender"], english: "to learn" },
  { spanish: ["vender"], english: "to sell" },
  { spanish: ["pensar", "creer"], english: "think / believe" },
  { spanish: ["entender", "comprender"], english: "to understand" },
  { spanish: ["romper"], english: "to break" },
  { spanish: ["toser"], english: "to cough" },
  { spanish: ["correr"], english: "to run" },
  { spanish: ["tener", "deber"], english: "have to / should do sth" },
  { spanish: ["prometer"], english: "promise" },
  { spanish: ["sorprender"], english: "to surprise" },
  { spanish: ["escribir"], english: "to write" },
  { spanish: ["recibir"], english: "to receive" },
  { spanish: ["abrir"], english: "to open" },
  { spanish: ["ocurrir"], english: "to occur " },
  { spanish: ["existir"], english: "to exist" },
  { spanish: ["permitir"], english: "to permit" },
  { spanish: ["decidir"], english: "to decide" },
  { spanish: ["tercero"], english: "third party" },
  { spanish: ["traer"], english: "to carry / bring" },
  { spanish: ["poner"], english: "to put" },
  { spanish: ["salir"], english: "to leave / go out" },
  { spanish: ["suponer"], english: "to suppose" },
  { spanish: ["ver"], english: "to see" },
  { spanish: ["caer"], english: "to fall" },
  { spanish: ["escoger"], english: "to choose / select" },
  { spanish: ["siguiente"], english: "next" },
  { spanish: ["dirigir"], english: "to direct" },
  { spanish: ["izquierda"], english: "left" },
  { spanish: ["derecha"], english: "right" },
  { spanish: ["blanda"], english: "soft" },
  { spanish: ["has estado"], english: "have you been" },
  { spanish: ["un poco"], english: "a little" },
  { spanish: ["semana pasada"], english: "last week" },
  { spanish: ["llegar"], english: "get (to), reach, arrive" },
  { spanish: ["tardar"], english: "to take (spend time)" },
  { spanish: ["junto"], english: "together" },
  { spanish: ["piscina"], english: "pool" },
  { spanish: ["frio"], english: "cold" },
  {
    spanish: ["el cuarto", "la habitación", "el dormitorio"],
    english: "bedroom",
  },
  { spanish: ["has visto"], english: "have you seen..." },
  { spanish: ["algo"], english: "something" },
  { spanish: ["demasiado"], english: "too (too much, overly)" },
  { spanish: ["cochina", "cochino"], english: "filthy / dirty" },
  { spanish: ["sucio"], english: "dirty" },
  { spanish: ["ocupada", "ocupado"], english: "busy" },
  { spanish: ["desde"], english: "since / from" },
  { spanish: ["desde luego"], english: "of course" },
  { spanish: ["desde hace tres años"], english: "for three years" },
  { spanish: ["hacia"], english: "toward / around" },
  { spanish: ["hace"], english: "ago" },
  { spanish: ["doler"], english: "to hurt" },
];

export default dictionary;
