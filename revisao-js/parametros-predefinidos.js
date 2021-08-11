
//forma é um parâmetro opcional ou parâmetro pré-definidos, Sendo assim, ele não precisa ser informado na chamada da função. Caso tenha sido omitido, assumirá o valor 'R'
//quando ouverem parâmetros opcionais e obrigatórios, os obrigatórios sempre vem antes!!!
function areaForma(base, altura, forma = 'R') {
    let area
    switch(forma) {
        case 'R': //Retangulo
            area = base * altura
            break
        case 'T': //Triângulo
            area = base * altura /2
            break
        case 'E': //Elipse
            area = (base/2) * (altura/2) * Math.PI
    }
    return area
}

console.log(`Retângulo 45X15: ${areaForma(45, 15, 'R')}`)
console.log(`Triângulo 13X8: ${areaForma(13, 8, 'T')}`)
console.log(`Elipse 12X16: ${areaForma(12, 16, 'E')}`)
console.log(`Quadrado 6,5X6,5: ${areaForma(6.5, 6.5,)}`)
console.log(`Retângulo 20X25: ${areaForma(20, 25,)}`)