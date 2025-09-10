// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "https://www.postposmo.com/wp-content/uploads/2025/08/Diversidad-acuatica-conoce-a-los-animales-que-nadan-en-nuestros-mares-1.jpg.webp",
  "https://www.postposmo.com/wp-content/uploads/2025/08/Delfines-e1755072886737.jpg",
    "https://www.postposmo.com/wp-content/uploads/2025/08/Caballito-de-mar-scaled-e1755072865180.jpg",
  "https://www.postposmo.com/wp-content/uploads/2022/05/pulpo.jpg.webp",
  "https://www.postposmo.com/wp-content/uploads/2020/05/foca-1-1.jpg",
];

const titulos = [
  "Orca/ballena asesina",
  "Delfín",
  "caballito de mar",
  "pulpo",
  "foca",
];

const frases = [
  "Te ves tierna, pero eres peligrosa, eres lìder de nturaleza pero te cuesta confiar y la unión es tu poder:confía en tu círculo más cercano.",
  "Eres muy inteligente, tratas de sobresalir en lo que haces y casi siempre lo logras, pero tienes el ego muy grande. Nada con  el ritmo de tu corazón, estás llena de alegría, comunicación y armonía.",
  "El romántico del mar, te gusta el amor bonito, los abrazos largos y las relaciones largas.Aférrate  a tu calma y estabilidad eso mantiene en armonìa tu propio ritmo vital.",
  " Si te sale el pulpo, signfica que tienes más problemas que brazos (y eso ya es mucho decir), muy productiva haciendo mil cosas a la vez.Transforma tu entorno con creatividad y fluidez; tu inteligencia te guía a través de múltiples caminos.",
  "Eres la amiga ruidosa del mar, Te emocionas fàcil, celebras todo con aplausos y risas fuertes y siempre encuentras la forma de llamar la atenciòn con tu ternura, y al mismo tiemnpo eres muy perezoso, amas dormir."
];



// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");


// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function queAnimalMarinoEres() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.length); // 0, 1, 2, 3, 4 
  
  console.log(indice)

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  queAnimalMarinoEres();
});

queAnimalMarinoEres();
