const diasDelMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let diasEnfadada = 0;

// RESOLUCION I
for (let i = 0; i < diasDelMes.length; i++) {
  if (diasDelMes[i] % 2 === 0) {
    diasEnfadada += diasDelMes[i] * 0.3;
    
  } else {
    diasEnfadada += diasDelMes[i] * 0.7;
  }
}

console.log('Días enfadada por año: ', Math.round(diasEnfadada));

// RESOLUCION II
const limiteEnfado = diasEnfadada / 2;
diasEnfadada = 0;
let mes = 0;

for (let i = 0; i < diasDelMes.length; i++) {
  if (diasDelMes[i] % 2 === 0) {
    diasEnfadada += diasDelMes[i] * 0.3;
    
    if (diasEnfadada > limiteEnfado) {
      mes = i;
      break;
    }
    
  } else {
    diasEnfadada += diasDelMes[i] * 0.7;
    
    if (diasEnfadada > limiteEnfado) {
      mes = i;
      break;
    }
  }
}

console.log('El mes donde se le evita es: ', mes)
