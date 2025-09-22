// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
//agregar amigos
function agregarAmigo(){
    const input = document.getElementById("amigo");
    const nombre = input.ariaValueMax.trim();

    if(nombre){
        amigos.push(nombre);
        mostrarLista();
        input.value = "";

    } else {
        alert("por favor, ingresa un nombre válido");
    }
}

function mostrar lista (){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild (li);
    });
}

function sortearAmigo (){
    const resultado = document.getElementById("resultado");

    if (amigos.length === 0){
        alert("por favor, agregar al menos un amigo antes de sortear.");
        return;
    }
    //indice aleatorio 
    const indiceAleatorio = Math.floor(Math.random()*amigos.length);
    const amigosSeleccionado = amigos [indiceAleatorio];

    //mostrar resulytado

    resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigosSeleccionado}</strong></li>`;

}

// agregar amigos presionando enter
document.addEventListener("DOMContentLoaded", function(){
    const input = document.getElementById("amigo");
    input.addEventListener("keypress", function(event){
        if (event.key === "Enter"){
            agregarAmigo();
        }
    })
})