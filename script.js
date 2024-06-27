let diccionario = ['CIELO', 'VIAJE', 'PAPEL', 'KARMA'];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
let intentos = 5; // Número de intentos

document.getElementById("guess-button").addEventListener("click", intentar);

function intentar() {
    const INTENTO = leerIntento();
    if (INTENTO.length !== 5) {
        alert("La palabra debe tener 5 letras");
        return;
    }

    if (INTENTO === palabra) {
        terminar("<h1> GANASTE </h1>", true);
        return;
    }

    mostrarIntento(INTENTO);
    intentos--;
    if (intentos === 0) {
        terminar("<h1> PERDISTE </h1>", false);
    }
}

function leerIntento() {
    let intento = document.getElementById("guess-input").value;
    intento = intento.toUpperCase();
    return intento;
}

function mostrarIntento(INTENTO) {
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';

    for (let i = 0; i < palabra.length; i++) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i] === palabra[i]) { // VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if (palabra.includes(INTENTO[i])) { // AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else { // GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);
}

function terminar(mensaje, ganaste) {
    const INPUT = document.getElementById('guess-input');
    const BOTON = document.getElementById('guess-button');
    INPUT.disabled = true;
    BOTON.disabled = true;
    
    // Mostrar la palabra correcta en la cuadrícula si se ganó el juego
    if (ganaste) {
        const GRID = document.getElementById("grid");
        const ROW = document.createElement('div');
        ROW.className = 'row';

        for (let i = 0; i < palabra.length; i++) {
            const SPAN = document.createElement('span');
            SPAN.className = 'letter';
            SPAN.innerHTML = palabra[i];
            SPAN.style.backgroundColor = 'green'; // 
            ROW.appendChild(SPAN);
        }

        GRID.appendChild(ROW);
    }

    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje + "<h2>La palabra correcta era: " + palabra + "</h2>";
    contenedor.style.textAlign = "center";
    contenedor.style.marginTop = "20px";
}
// Función para crear partículas sakura
function crearSakura() {
    const sakura = document.createElement('div');
    sakura.className = 'sakura';
    sakura.style.left = Math.random() * window.innerWidth + 'px';
    sakura.style.animationDuration = Math.random() * 3 + 2 + 's';
    sakura.style.opacity = Math.random();
    document.getElementById('particles').appendChild(sakura);

    setTimeout(() => {
        sakura.remove();
    }, 5000);
}

// Crear partículas sakura cada cierto tiempo
setInterval(crearSakura, 500);
