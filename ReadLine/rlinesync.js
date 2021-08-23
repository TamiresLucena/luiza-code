const rLine = require('readline-sync');

const nome = rLine.question(`Qual é o seu nome?\n`);
console.log(`Olá ${nome}!`);

