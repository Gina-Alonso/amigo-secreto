// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];
function agregarAmigo() {
    //guarda el valor del input en la variable
    let nombres = document.getElementById('amigo').value;
    //verificar que no este vacio
    if (nombres === '') {
        alert('Por favor ingresa un nombre valido');
        return;
    } else {
        //agrega el nombre a la lista de amigos
        nombresAmigos.push(nombres);
        document.getElementById('amigo').value = '';//limpia el input
        
    }
    return;
}