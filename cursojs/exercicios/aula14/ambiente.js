for(c=0;c<2;c++){
    console.log(`${c}°`)
}

var inicio = 1
var fim = 5
var passo = 1

if (inicio < fim){
    for(inicio; inicio <= fim; inicio += passo){
        console.log(inicio)
    }
} else{
    for(inicio; inicio >= fim; inicio -= passo){
        console.log(inicio)
    }
}

