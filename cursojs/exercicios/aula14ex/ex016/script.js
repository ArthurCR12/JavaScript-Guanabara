function contar() {
    let inicio = document.getElementById('iinicio')
    let fim = document.getElementById('ifim')
    let passo = document.getElementById('ipasso')
    let txtcont = document.getElementById('txtcont')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('ERRO: Faltam dados!')
    } else {
        txtcont.innerHTML = 'Contando:'

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < f) {
            for (i; i <= f; i += p) {
                txtcont.innerHTML += `${i} \u{1F449}` 
            }
        } else {
            for (i; i >= f; i -= p) {
                txtcont.innerHTML += `${i} \u{1F449}`
            }
        }
        txtcont.innerHTML += `\u{1F3C1} \u{1F596}` 
    }

}
