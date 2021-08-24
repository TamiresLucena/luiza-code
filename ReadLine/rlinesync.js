const rLine = require('readline-sync');

const nome = rLine.question(`Qual é o seu nome?\n`);
const nota1 = rLine.question(`Informa a nota 1: \n`);
const nota2 = rLine.question(`Informa a nota 2: \n`);
const nota3 = rLine.question(`Informa a nota 3: \n`);

const media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;

if (media > 7) console.log('Aprovada');
else if (media >= 5) console.log('Recuperação');
else console.log('Reprovada');

