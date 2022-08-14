/*
FUNÇÃO NOMINAL:
*/
// function soma(){}

/*
ARROW FUNCTIONS NOMINAL:
soma - Nome da função
() - Cabeçalho de parametros (é a representação de dados esxternos a função).
=> - arrow.
{} - corpo função (o corpo da função carrega os códigos que executam a tarefa especifica para qual a função foi criada)
*/
let resultado;
module.exports = soma = (numero1, numero2)=>{

    resultado = numero1 + numero2;
    return resultado;

}