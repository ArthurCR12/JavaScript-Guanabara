var idade = -10
if (idade > 18 && idade < 65) {
    console.log('Voto Obrigatório')
} else if (idade > 0 && idade < 18 || idade > 100) {
    console.log('Não Vota')
} else if (idade >= 16 || idade >= 60) {
    console.log('Voto Opicional')
} else{
    console.log('Invalido')
}     