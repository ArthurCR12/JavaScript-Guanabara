function tabuada() {
    let num = document.querySelector('#txt-numero')
    let tab = document.querySelector('#seletab')

    if (num.value.length == 0) {
        alert('Coloque um número para fazer a tabuada')
    } else {
        tab.innerHTML = ''
        let n = Number(num.value)
        for (var c = 1; c <= 10; c++) {            
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `${n*c}`
            tab.appendChild(item)
        }
    }
}
function alertar(){
    let tabsel = document.getElementById('seletab');
    let valorSelecionado = tabsel.value;
    alert("Valor selecionado: " + valorSelecionado);
}



