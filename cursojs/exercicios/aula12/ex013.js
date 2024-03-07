var agora = new Date()
var diaSemana = agora.getDay()
/*  
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabado
*/

console.log(diaSemana)

switch (diaSemana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break 
}


// Chat GPT Daqui pra baixo
var diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

console.log('Dia da semana:', diasDaSemana[diaSemana]);

var dia = agora.getDate().toString().padStart(2, '0');
var mes = (agora.getMonth() + 1).toString().padStart(2, '0'); // Note: Month is zero-indexed
var ano = agora.getFullYear();

console.log('Data formatada:', dia + ':' + mes + ':' + ano);
