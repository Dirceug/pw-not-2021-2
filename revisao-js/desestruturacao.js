//Vetor
let carros = ['Celta', 'Uno', 'Gol']

//Desestruturação total do vetor

let [a, b, c] = carros
console.log(a)
console.log(b)
console.log(c)

//Desestruturtação parcial
//Só os dois primeiro, ignora o terceiro
let [m,n] = carros

console.log('---------------')
console.log(m)
console.log(n)

//Ignora o do meio
let [x,,z] = carros

console.log('---------------')
console.log(x)
console.log(z)

//Ignora o ultimo
let [,i,j] = carros

console.log('---------------')
console.log(i)
console.log(j)

//Objeto
let veiculo ={
    marca: 'Volkswagen', 
    modelo: 'Fusca',
    cor: 'preto',
    ano: 1969
}

//Desestruturação total de um objetos
//1º regra: As variáveis devem ter o mesmo nome das propriedades
//2º regra: a ordem não importa

let { cor, modelo, ano, marca } = veiculo

console.log('------------------------------------')

console.log(marca)
console.log(modelo)
console.log(cor)
console.log(ano)

//Para fazer a desestruturação parcial de objetos, basta criar variáveis correspondentes apenas às propriedades de interesse.
