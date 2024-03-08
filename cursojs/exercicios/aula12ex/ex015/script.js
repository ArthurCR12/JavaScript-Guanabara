var frase = document.getElementById('frase')
var img = document.getElementById('img1')
var anoNasc = document.getElementById('iano')
var radsexo = document.getElementsByName('radsexo')
var sexo
var data = new Date()
var ano = data.getFullYear()

function verificar() {
    if (anoNasc.value.length == 0 || Number(anoNasc.value) > ano) {
        alert('Verifique os dados e tente novamente!')
    } else {
        var idade = Number(ano) - Number(anoNasc.value)

        if (radsexo[0].checked){
             sexo = 'Homem'
        }else if(radsexo[1].checked){
            sexo = 'Mulher'
        }
        
        if (idade > 0 && idade < 3 && sexo == 'Homem') {
            frase.innerHTML = `Detectamos um ${sexo}  ${idade} Anos`
            img.src = 'img/bbM.png'
        } else if (idade > 0 && idade < 3 && sexo == 'Mulher') {
            frase.innerHTML = `Detectamos um ${sexo}  ${idade} Anos`
            img.src = 'img/bbF.png'
        }
        else if (idade > 3 && idade < 13 && sexo == 'Mulher') {
            frase.innerHTML = `Detectamos um ${sexo}  ${idade} Anos`
            img.src = 'img/menina.png'
        }
        else if (idade > 3 && idade < 13 && sexo == 'Homem') {
            frase.innerHTML = `Detectamos um ${sexo}  ${idade} Anos`
            img.src = 'img/menino.png'
        }
        else if (idade > 13 && idade < 18 && sexo == 'Mulher') {
            frase.innerHTML = `Detectamos um ${sexo}  ${idade} Anos`
            img.src = 'img/adoF.png'
        }
        else if (idade > 13 && idade < 18 && sexo == 'Homem') {
            frase.innerHTML = `Detectamos um ${sexo}  ${idade} Anos`
            img.src = 'img/adoM.png'
        }
        else if (idade > 18 && idade < 40 && sexo == 'Mulher') {
            frase.innerHTML = `Detectamos um ${sexo}  ${idade} Anos`
            img.src = 'img/mulher.png'
        }
        else if (idade > 18 && idade < 40 && sexo == 'Homem') {
            frase.innerHTML = `Detectamos um ${sexo}  ${idade} Anos`
            img.src = 'img/homem.png'
        }
        else if (idade > 40 && idade < 60 && sexo == 'Mulher') {
            frase.innerHTML = `Detectamos um ${sexo}  ${idade} Anos`
            img.src = 'img/mulher40.png'
        }
        else if (idade > 40 && idade < 60 && sexo == 'Homem') {
            frase.innerHTML = `Detectamos um ${sexo}  ${idade} Anos`
            img.src = 'img/homem40.png'
        }
        else if (idade > 60 && idade < 160 && sexo == 'Mulher') {
            frase.innerHTML = `Detectamos um ${sexo}  ${idade} Anos`
            img.src = 'img/idosa.png'
        }
        else if (idade > 60 && idade < 160 && sexo == 'Homem') {
            frase.innerHTML = `Detectamos um ${sexo}  ${idade} Anos`
            img.src = 'img/idoso.png'
        } else{
            frase.innerHTML = `Idade de ${idade} é invalida!`
            img.src = ''
        }
    }
}