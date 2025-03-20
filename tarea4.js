//  Calcula mediante la resta de 2 dias consecutivos
function calcularTendencia(temperaturaAyer, temperaturaAnteayer) {
    const tendencia = temperaturaAyer - temperaturaAnteayer;

    if (tendencia > 0) {
        return 'Positiva';
    } else if (tendencia < 0) {
        return 'Negativa';
    } else {
        return 'Neutra'; // Agregamos para temperaturas iguales
    }
}

// temperaturas de cada semana
const semana1 = [19, 21, 20, 23, 25, 27, 29];
const semana2 = [31, 30, 30, 33, 32, 30, 27];
const semana3 = [23, 24, 22, 19, 18, 22, 22];

// Temperaturas alojadas en un solo array
const temperaturasSemanas = [semana1, semana2, semana3];

// Nombre de días
const diasSemanas = [
    "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

// Bucle para recorrer las semanas
for (let semana = 0; semana < temperaturasSemanas.length; semana++) {
    console.log(`\nSemana ${semana + 1}:`);

    // Itera para calcular la tendencia
    for (let dia = 2; dia < temperaturasSemanas[semana].length; dia++) {
        const temperaturaAnteayer = temperaturasSemanas[semana][dia - 2];
        const temperaturaAyer = temperaturasSemanas[semana][dia - 1];

        // Se invoca la función para obtener la tendencia
        const tendencia = calcularTendencia(temperaturaAyer, temperaturaAnteayer);
        
        // Imprime el día de semana y la tendencia en consola
        console.log(`${diasSemanas[dia]} - Tendencia: ${tendencia}`);
    }
}
