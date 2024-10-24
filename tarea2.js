const diasDelMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let diasEnfadada = 0;

for (let i = 0; i < diasDelMes.length; i++) {
  if (diasDelMes[i] % 2 === 0) {
    diasEnfadada += diasDelMes[i] * .7;
  } else {
    diasEnfadada += diasDelMes[i] * .3;
  }
}

console.log('Días enfadada por año: ', diasEnfadada);
