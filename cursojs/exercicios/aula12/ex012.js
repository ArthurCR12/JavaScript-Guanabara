//var hora = 23
var agora = new Date()
var hora = agora.getHours()

if (hora >= 0 && hora < 24) {
    console.log(`Agora são exatamente ${hora} horas.`)
} else {
    console.log(`${hora} horas - Não é um horario valido!`)
}

if (hora >= 0 && hora < 5) {
    console.log('Boa Madrugada !')
}
else if (hora < 12) {
    console.log('Bom Dia')
}
else if (hora < 19) {
    console.log('Boa Tarde')
}
else if (hora < 24) {
    console.log('Boa Noite')
} else {
    console.log('Horario Invalido')
}