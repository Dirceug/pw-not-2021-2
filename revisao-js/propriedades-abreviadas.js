/*
Maneira normal de ser atribuir propriedades
let infoUsuario = {
    usuario: 'Jucicleison',
    nomeCompleto: 'Jucicleison da Silva Souza',
    grupo: 'alunos',
    senha: '12345678',
}
*/
let usuario = 'Jucicleison'
let nome = 'Jucicleison da Silva Souza'
let grupo = 'alunos'
let password = '12345678'

//Maneira comum de atrobuir propriedades vindos de variáveis
/*let infoUsuario = {
    usuario: usuario,
    nomeCompleto: nome,
    grupo: grupo,
    senha: password,
}*/

//Abreviando propriedades
let infoUsuario = {
    usuario, //usuario: usuario,
    nomeCompleto: nome,
    grupo,  //grupo: grupo,
    senha: password,
}

console.log(infoUsuario)

console.log({password})
console.log({grupo})
console.log({password, grupo})