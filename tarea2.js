// Lista de los dias del mes
const diasMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Distribución de porcentajes
const diasPares = 0.3;
const diasImpares = 0.7;

let totalDiasEnfadada = 0;
let diasEnfadadaAcumulados = 0;
const diasEnfadadaPorMes = [];

// Determinar dias enojadas durante el año
for (let i = 0; i < diasMes.length; i++) {

    const dias = diasMes[i]; 
    let porcentaje; // Declaramos la variable porcentaje

    // Determina el porcentaje que le corresponde a cada mes
    if (dias % 2 === 0){
        porcentaje = diasPares;
    } else {
        porcentaje = diasImpares;
    }

    const diasEnfadada = Math.floor(dias * porcentaje);
    diasEnfadadaPorMes.push(diasEnfadada); // Almacena la cantidad de enfados por mes
    totalDiasEnfadada += diasEnfadada;
}


const mitadDiasEnfadada = totalDiasEnfadada / 2
let mesEvitar = 0;

for (let i = 0; i < diasEnfadadaPorMes.length; i++){

    diasEnfadadaAcumulados += diasEnfadadaPorMes[i];
    if (diasEnfadadaAcumulados >= mitadDiasEnfadada) {
        mesEvitar = i; // Retorna el mes (0-11)
        break;
    }
}

// Ejemplo para año no bisiesto
console.log("El total de días enfadada al año son: ", totalDiasEnfadada);
console.log("El numero de mes a evitar es: ", mesEvitar);

