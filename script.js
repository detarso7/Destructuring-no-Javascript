let numeros = [1, 2, 3, 4]

let [num1, num2, num3, num4] = numeros

console.log(num1, num2, num3, num4)


let obj = {
    nome: "Saulo",
    idade: 39
}

let {nome: nomeVar, idade: idadeVar} = obj

console.log(nomeVar, idadeVar)


let [, , nu3, nu4 ] = numeros

console.log(nu3, nu4)

let obetos = {
    Num: num1,
    Nome: nomeVar,
    Nu3: nu3
}

console.log(obetos)


let [...resto] = numeros


console.log(resto)