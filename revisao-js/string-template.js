let nome = 'Jucicleison'
let idade = 19
let cidade = 'Franca/SP'


console.log('Comcatenação de String:')
console.log('Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade + '.')
console.log('-----------------------------------------------------------')
console.log('Usando String para concatenar texto:')
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e morom em ${cidade}.`)
console.log('-----------------------------------------------------------')
console.log('Usando String Template para "operações" do JS:')
console.log(`Daqui a cinco anos, ${nome.toUpperCase()} terá ${idade + 5} anos.`)
//String Tamplete só funciona quando delimitado por acento grave (``)
console.log('tring Tamplete só funciona quando delimitado por acento grave (``)')
console.log('Daqui a cinco anos, ${nome.toUpperCase()} terá ${idade + 5} anos.')