function conteoLaboral(){
    const horaInicio = 8; // 8 a.m
    const horaFin = 21; // 9 p.m

    const duracionJornada = horaFin - horaInicio; // 13 horas xd?

    // Conversión de horas a minutos
    let tiempoRestante = duracionJornada * 60;

    // Permite llevar el conteo
    const intervalo = setInterval(() => {
        if (tiempoRestante < 0) {
            clearInterval(intervalo);
            console.log("Felicidades, tu jornada ha culminado.\nPero espera...");

            // Asignación de tiempo extra
            const tiempoExtra = Math.floor(Math.random() * (60 - 10 + 1)) + 10;
            console.log(`Te has ganado ${tiempoExtra} minutos extras. ¿No es genial?`);

            // Contador del tiempo extra
            let tiempoExtraRestante = tiempoExtra;
            const intervaloTiempoExtra = setInterval(() => {
                if (tiempoExtraRestante <= 0) {
                    clearInterval(intervaloTiempoExtra);
                    console.log("El tiempo extra ha terminado :)")
                    return;
                }
              
                // Invocamos funcion
                mostrarTiempoRestante(tiempoExtraRestante, " es el tiempo que te resta...")
                tiempoExtraRestante--;
              
            // Actualizamos cada segundo, simulando minutos              
            }, 1000);
            return;
        }
      
        // Invocamos función
        mostrarTiempoRestante(tiempoRestante, "minutos restantes para ir a casa :/...");
        tiempoRestante--;

    }, 1000); 
}

// Funcion para reutilizar el formato del reloj y el mensaje
function mostrarTiempoRestante(minutos, mensaje) {
    // Formato reloj
    const horas = Math.floor(minutos / 60);
    const minutosModulo = minutos % 60;

    // Formato Mensaje
    console.log(`${horas.toString().padStart(2, "0")}:${minutosModulo.toString().padStart(2,"0")} ${mensaje}`);
}


// Ejecutable
conteoLaboral();

