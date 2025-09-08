// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "https://www.postposmo.com/wp-content/uploads/2025/08/Diversidad-acuatica-conoce-a-los-animales-que-nadan-en-nuestros-mares-1.jpg.webp",
  "https://www.postposmo.com/wp-content/uploads/2025/08/Delfines-e1755072886737.jpg",
];

const titulos = [
  "Orca/ballena asesina",
  "Delfín",
  "caballito de mar",
  "pulpo"
];

const frases = [
  "Te alimentas de plantas, frutas, hojas y flores. Vives en bosques de climas cálidos y prefieres la tierra que el agua.",
  "Eres pequeña pero tu extravagancia no pasa desapercibida. Vives en bosques húmedos y lluviosos y tienes veneno en la piel.",
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

function que animal marino eres() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.lenght); // 0, 1, 2, 3, 4  

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();
