// Se especifica los dias por mes
const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// Minutos limite por mes
const minutosPermitidos = 450;
// Minutos limite por dia
const minutosDiarios = 15;
// Conteo de meses
let mesesSinDescuento = 0;

// Se recorre cada mes para evaluarlo
for (let i = 0; i < diasPorMes.length; i++) {
  // Se verifica si excede los minutos permitidos
  let minutosMensuales = diasPorMes[i] * minutosDiarios;

  // En caso de no exceder, se suman
  if (minutosMensuales <= minutosPermitidos) {
    mesesSinDescuento++;
  } 
}

// SALIDA
console.log('Los meses sin descuento serán: ', mesesSinDescuento)



