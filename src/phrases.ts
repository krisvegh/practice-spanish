export interface Phrase {
  english: string;
  spanish: string[];
  keywords?: string[];
}

const phrases: Phrase[] = [
  {
    spanish: ["ya es hora de empezar el examen"],
    english: `It's time to start the exam now.`,
  },
  {
    spanish: ["se quien es juan"],
    english: `I know who Juan is`,
  },
  {
    spanish: ["mi perro es moreno"],
    english: `my dog is brown`,
    keywords: ["marrón"],
  },
  {
    spanish: ["cuantos carros tiene"],
    english: `how many cars does he have`,
    keywords: ["cuántos"],
  },
  {
    spanish: [`el baño está a la derecha`],
    english: `the bathroom is on the right`,
  },
  {
    spanish: [`tu madre es muy joven`],
    english: `your mother is very young`,
  },
  {
    spanish: [`has visto mi cuaderno?`],
    english: `have you seen my notebook`,
  },
  {
    spanish: [`tengo una cita para pasado mañana`],
    english: `I have an appointment for after tomorrow`,
  },
  {
    spanish: [`tambien tengo un gato blanco`],
    english: `I also have a white cat`,
  },
  {
    spanish: [`me gusta la carne asada`],
    english: `I like roasted meat`,
    keywords: ["asado"],
  },
  {
    spanish: [`jaun es muy guapo`],
    english: `Juan is very handsome`,
  },
  {
    spanish: [`esta camiseta es muy barata`],
    english: `this t-shirt is veery cheap`,
  },
  {
    spanish: [`su sobrino es muy gordo`],
    english: `Her nephew is very fat`,
  },
  {
    spanish: [`I need a new belt`],
    english: `necesito un cinturón nuevo`,
  },
  {
    spanish: [`mi almohada es muy blanda`],
    english: `My pillow is too soft`,
  },
  {
    spanish: [`has estado en Londres`],
    english: `have you been to london`,
  },
  {
    spanish: [`málaga hace mucho calor en agosto`],
    english: `Malaga is very hot in August`,
  },
  {
    spanish: [`no necesitaré un abrigo en este país`],
    english: `I won't need a coat in this country`,
  },
  {
    spanish: [`tosí la semana pasada`],
    english: `I coughed last week`,
  },
  {
    spanish: [`esta casa está hecha de vidrio`],
    english: `this house is made of glass`,
  },
  {
    spanish: [`se tarda veinte minutos en llegar a la playa`],
    english: `it takes twenty minutes to get to the beach`,
  },
  {
    spanish: [`ayer almorzamos junto a la piscina`],
    english: `yesterday we had lunch by the pool`,
  },
  {
    spanish: [`vuelo el martes`],
    english: `I am flying on Tuesday`,
  },
  {
    spanish: [`quién es el siguiente`],
    english: `who's next`,
  },
  {
    spanish: [`lleva dos meses`],
    english: `It takes two months`,
  },
  {
    spanish: [`voy a comprar huevos`],
    english: `I'm going to buy eggs`,
  },
  {
    spanish: [`enero es frío`],
    english: `january is cold`,
  },
  {
    spanish: [`geri es flaco pero su madre es gorda`],
    english: `geri is skinny but his mother is fat`,
  },
  {
    spanish: [`dijiste algo`],
    english: `did you say something?`,
  },
  {
    spanish: [`mi tio se llama laci`],
    english: `my uncle's name is Laci`,
  },
  {
    spanish: [`estos zapatos son viejos`],
    english: `these shoes are old`,
  },
  {
    spanish: [`Nosotros necesitamos comer mas vegetales`],
    english: `we need to eat more vegetables`,
  },
  {
    spanish: [`Nosotros necesitamos una cama mas grande`],
    english: `we need a bigger bed`,
  },
  {
    spanish: [`preparar el cuchillo, el tenedor y la cuchara`],
    english: `prepare the knife, fork and soon`,
  },
  {
    spanish: [`pones el plato en la mesa`],
    english: `put the plate on the table`,
  },
  {
    spanish: [`no puedes poner anchoas y piña en la misma pizza`],
    english: `You can't put anchovies and pineapple on the same pizza.`,
  },
  {
    spanish: [`hay mucha comida en la nevera`],
    english: `there is a lot of food in the fridge`,
  },
  {
    spanish: [`mira en el espejo`],
    english: `look into the mirror`,
  },
  {
    spanish: [`no voy a la iglesia`],
    english: `I don't go to the church`,
  },
  {
    spanish: [`soy demasiado perezoso para trabajar`],
    english: `I am too lazy to work`,
  },
  {
    spanish: [`pon la manta en la cama`],
    english: `put the blanket on the bed`,
  },
  {
    spanish: [`tengo una chaqueta azul`],
    english: `I have a blue jacket`,
  },
  {
    spanish: [`este es un lugar donde se puede explorar y aprender`],
    english: `This is a place where you can explore and learn.`,
  },
  {
    spanish: [`la toalla esta en el baño`],
    english: `the towel is in the bathroom`,
  },
  {
    spanish: [`la alfombra del dormitorio es fea`],
    english: `the carpet in the bedroom is ugly`,
  },
  {
    spanish: [`poner el cuenco sobre la mesa`],
    english: `please put the bowl on the table`,
  },
  {
    spanish: [`puedes traerme mi teléfono`],
    english: `can you bring me my phone?`,
    keywords: ["traer"],
  },
  {
    spanish: [`juan tenia un traje amarillo`],
    english: `Juan had a yellow suit`,
  },
  {
    spanish: [`qué hay para el desayuno`],
    english: `what is for breakfast`,
  },
  {
    spanish: [`dónde está tu taza`],
    english: `where is your cup?`,
  },
  {
    spanish: [`vamos a cenar a un restaurante`],
    english: `let's go and have a dinner in a restaurant`,
  },
  {
    spanish: [`como se llama tu nieta`],
    english: `what is your granddaughter's name`,
  },
  {
    spanish: [`deberías usar una cucharita`],
    english: `you should use a teaspoon`,
  },
  {
    spanish: [`la falda aquí es barata`],
    english: `the skirt here is cheap`,
  },
  {
    spanish: [`ese gato es lindo`],
    english: `that cat is nice`,
  },
  {
    spanish: [`carne con arroz`],
    english: `meat with rice`,
  },
  {
    spanish: [`nosotras cenamos ayer`],
    english: `we ate dinner yesterday`,
  },
  {
    spanish: [`no sabía qué plato escoger en el restaurante`],
    english: `I didn't know which dish to choose at the restaurant.`,
  },
  {
    spanish: [`rompió el vaso por accidente`],
    english: `He broke the glass by accident`,
    keywords: ["romper"],
  },
  {
    spanish: [`corrí a casa`],
    english: `I ran home`,
    keywords: ["correr"],
  },

  {
    spanish: [`judías con carne`],
    english: `beans with meat`,
  },
  {
    spanish: [`quién puso el cojín en la cama`],
    english: `who put the cushion on the bed`,
  },
  {
    spanish: [`recibí una carta`],
    english: `I received a letter`,
  },
  {
    spanish: [`estoy aburrido`],
    english: `I am bored`,
  },
  {
    spanish: [`voy a comprar un coche la semana que viene`],
    english: `I will buy a car next week`,
  },
  {
    spanish: [`donde esta el inodoro`],
    english: `where is the toilet`,
  },
  {
    spanish: [`el viernes es dia de pizza`],
    english: `friday is pizza day`,
  },
  {
    spanish: [`el toyota es barato y el mercedes es caro`],
    english: `the toyota is cheap and the mercedes is expensive`,
  },
  {
    spanish: [`exactamente la misma`],
    english: `exactly the same`,
  },
  {
    spanish: [`le di veinte euros`],
    english: `I gave him twenty euros`,
  },
  {
    spanish: [`puse el pollo en la estufa`],
    english: `I put the chicken in the stove`,
  },
  {
    spanish: [`soy el nieto de mi abuelo`],
    english: `I am my grandfather's grandson`,
  },
  {
    spanish: [`tienes que ir a la correos`],
    english: `you need to go to the post office`,
  },
  {
    spanish: [`nosotros siempre salimos despues del trabajo`],
    english: `we always go out after work`,
  },
  {
    spanish: [`mi prima nos visitó la semana pasada`],
    english: `my cousin visited us last week`,
  },
  {
    spanish: [`lleva los platos sucios a la cocina`],
    english: `take the dirty plates to the kitchen`,
    keywords: ["llevar", "plato"],
  },
  {
    spanish: [`no juegues con mi corazón`],
    english: `Don't play with my heart.`,
    keywords: ["jugar"],
  },
  {
    spanish: [`mis parientes viven en polonia`],
    english: `My relatives live in Poland`,
  },
  {
    spanish: [`we cooked before yesterday`],
    english: `Nosotros cocinamos anteayer`,
  },
  {
    spanish: [`tengo que comprar calcetines nuevos`],
    english: `I have to buy new socks`,
  },
  {
    spanish: [`Martina es baja`],
    english: `Martina is short`,
  },
];

export default phrases;
