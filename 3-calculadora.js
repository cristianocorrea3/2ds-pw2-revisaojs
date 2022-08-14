/*
FUNÇÕES SÃO ESTRUTURAS DE CÓDIGO QUE REALIZAM TAREFAS
ESPECIFICAS PODENDO OU NÃO EXIGIR VALORES EXTERNOS.
ESSES VALORES EXTERNOS SÃO CHAMADOS DE PARAMETROS.
AS FUNÇÕES PODEM SER MODULARIZADAS, OU SEJA, CRIADAS
EM PEQUENOS BLOCOS DE CÓDIGOS INDEPENDENTES E QUE PODEM 
SER CHAMADOS EM VÁRIAS PARTES DE UMA APLICAÇÃO.
ESSA CHAMADA SE DA POR MEIO DE UM NOME QUE A FUNÇÃO
RECEBE NO MOMENTO DE SUA CRIAÇÃO.
FUNÇÕES PODEM OU NÃO RETORNAR VALORES.
*/

const soma = require('./funcoes/soma');
console.log('RESULTADO DA SOMA: ' + soma(10, 15));