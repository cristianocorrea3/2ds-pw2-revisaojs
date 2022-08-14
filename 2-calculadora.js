//DECLARANDO DUAS VARIÁVEIS
let numero1;
let numero2;
let resultado;

//DECLARANDO UMA CONTANTE
const titulo = 'PROGRAMA DE REVISÃO - CALCULADORA';

/*
OPERADORES MATEMÁTICOS:
+ SOMA
- SUBTRAÇÃO
* MULTIPLICAÇÃO 
/ DIVISÃO
*/
numero1 = 10;
numero2 = 0;

//OPERAÇÃO DE SOMA
resultado = numero1 + numero2;//resultado 12
console.log('SOMA: ' + resultado);

// let saida = 'SOMA: ' + resultado;
// console.log(typeof numero1);
// console.log(typeof numero2);
// console.log(typeof 'SOMA: ');
// console.log(typeof resultado);
// console.log(typeof saida);

//OPERAÇÃO DE SUBTRAÇÃO
resultado = numero1 - numero2;//resultado 5
console.log('SUBTRAÇÃO: ' + resultado);

//OPERAÇÃO DE MULTIPLICAÇÃO
resultado = numero1 * numero2;//resultado 50
console.log('MULTIPLIÇÃO: ' + resultado);

//OPERAÇÃO DE DIVISÃO
if(numero2 != 0){
    resultado = numero1 / numero2;//resultado 2
    console.log('DIVISÃO: ' + resultado);
}else{
    console.log('IMPOSSÍVEL DIVIDIR POR ZERO (0)');
}

/*
OPERADORES RELACIONAIS OU DE COMPARAÇÃO:
< MENOR QUE
> MAIOR QUE
<= MENOR OU IGUAL A 
>= MAIOR OU IGUAL A 
== IGUAL A
!= DIFERENTE DE
*/

/*
TESTE LÓGICOS: É A COMPARAÇÃO DE DOIS OU MAIS VALORES QUE SÓ
RESULTAR EM UM DE DUAS POSSIBILIDADE, SÃO VERDADEIRO (true) OU
FALSO (false)
*/
//EXEMPLOS DE TESTES LÓGICOS:
// console.log(numero1 < numero2);//false
// console.log(numero1 > numero2);//true
// console.log(numero1 <= numero2);//false
// console.log(numero1 >= numero2);//true
// console.log(numero1 == numero2);//false
// console.log(numero1 != numero2);//true

// console.log(numero2 <= 0);
// console.log(numero2 != 0);
// console.log(numero2 > 0);