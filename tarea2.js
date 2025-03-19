const diasDelMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let diasEnfadada = 0;

// Días enfadada por año
for (let i = 0; i < diasDelMes.length; i++) {
  if (diasDelMes[i] % 2 === 0) {
    diasEnfadada += diasDelMes[i] * 0.3;
    
  } else {
    diasEnfadada += diasDelMes[i] * 0.7;
  }
}


// Mes a evitar
const limiteEnfado = diasEnfadada / 2;
let MesEnfadada = 0;
let mes = 0;

for (let i = 0; i < diasDelMes.length; i++) {
  if (diasDelMes[i] % 2 === 0) {
    MesEnfadada += diasDelMes[i] * 0.3;
    
    if (MesEnfadada > limiteEnfado) {
      mes = i;
      break;
    }
    
  } else {
    MesEnfadada += diasDelMes[i] * 0.7;
    
    if (MesEnfadada > limiteEnfado) {
      mes = i;
      break;
    }
  }
}

// SALIDA
console.log('AÑO NO BISIESTO');
console.log('Días enfadada por año: ', Math.round(diasEnfadada));
console.log('El mes donde se le evita es: ', mes);
