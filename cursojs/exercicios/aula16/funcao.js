function parimpar(n){
    if(n%2 == 0){
        return 'Par !'
    }else{
        return 'Impar !'
    }
}

let resultado = parimpar(4)
console.log(resultado)
console.log(parimpar(5))


console.log()
function soma(n1=0, n2=0){
    return n1 + n2
}

console.log('A soma de 13 + 5 é: ' + soma(13,5))

console.log()
let func = function(x){
    return x*3
}

console.log('O numero 10 elevado ao cubo é igual: ' + func(10))


console.log()
console.log('Fatorial Simples')
function fatorial(n){
    let fat = 1
    let txt = `O fatorial de ${n} é `
    for(let c = n;c > 1; c--){
        fat *= c
        txt += ` ${fat}`
    }        
    console.log(txt)
}
fatorial(5)


// Recursividade
console.log()
console.log('Fatorial Complexo')
function fatorial2(n){
    if(n==1){
        return 1
    } else{
        return n * fatorial2(n-1)
    }
}
console.log(fatorial2(5))

