let numeros = []
function adicionar() {
    let n = document.getElementById('itxt-num')
    let selc = document.getElementById('iselect')
    let addNum = document.createElement('option')
    let div = document.getElementById('resultado')
    div.innerHTML = ''
    let num = Number(n.value)
    if (num <= 1 || num >= 100)
        alert('Informe um número entre 1 e 100')
    else if (numeros.includes(num)) {
        alert(`Número ${num} ja foi inserido !`)

    }
    else {
        numeros.push(num)
        addNum.text = `Valor ${num} adicionado`
        selc.appendChild(addNum)
    }
}

function finalizar() {
    if (numeros.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let p = document.createElement('p')
        let div = document.getElementById('resultado')
        div.innerHTML = ''
        let nmaior = 0
        let nmenor = 100
        let soma = 0
        for (c = 0; c < numeros.length; c++) {
            soma += numeros[c]
            if (nmaior < numeros[c]) {
                nmaior = numeros[c]
            }
            if (nmenor > numeros[c]) {
                nmenor = numeros[c];
            }
        }                

        media = soma / numeros.length

        p.textContent = `Ao todo, temos ${numeros.length} números cadastrados.`
        div.append(p)
        p = document.createElement('p');
        p.textContent = `O maior valor informado foi de ${nmaior}`
        div.append(p)
        p = document.createElement('p');
        p.textContent = `O menor valor informado foi de ${nmenor}`
        div.append(p)
        p = document.createElement('p');
        p.textContent = `Somandos todos os valores, temos ${soma}`
        div.append(p)
        p = document.createElement('p');
        p.textContent = `A média dos valores digitados é ${media}`
        div.append(p)
    }
}

function limpar() {
    document.getElementById('resultado').innerHTML = ''
    document.getElementById('iselect').innerHTML = ''
    document.getElementById('itxt-num').value = ''
    document.getElementById('itxt-num').focus()
}