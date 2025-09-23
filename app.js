// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//vaiable
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Se cambió 'ariaValueMax' a 'value' para obtener el valor del input.

    if (nombre) {
        amigos.push(nombre);
        mostrarLista();
        input.value = "";
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

// Función para mostrar la lista de amigos
function mostrarLista() { // Se corrigió el nombre de la función de 'mostrar lista' a 'mostrarLista'.
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos.

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear amigo secreto
function sortearAmigo() { // Se corrigió el nombre de la función de 'sortearAmigo ' a 'sortearAmigo'.
    const resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        alert("Por favor, agrega al menos un amigo antes de sortear.");
        return;
    }

    // Índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio]; // Se corrigió el nombre de la variable de 'amigosSeleccionado' a 'amigoSeleccionado'.

    // Mostrar resultado
    resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSeleccionado}`;
}

// Agregar amigos presionando enter
document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("amigo");
    const botonAgregar = document.getElementById("agregarBoton"); // Asumiendo que hay un botón con este ID.

    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            agregarAmigo();
        }
    });

    // Evento para el botón de agregar
    if (botonAgregar) {
        botonAgregar.addEventListener("click", agregarAmigo);
    }

    // Evento para el botón de sortear
    const botonSortear = document.getElementById("sortearBoton"); // Asumiendo que hay un botón con este ID.
    if (botonSortear) {
        botonSortear.addEventListener("click", sortearAmigo);
    }
});