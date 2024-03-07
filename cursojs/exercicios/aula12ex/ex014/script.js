function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img1')
    var data = new Date()
    var hora = data.getHours() 
    hora = 0   

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 5 ){
        // Boa Madrugada
        img.src = '../img/noite.png'    
        document.body.style.background = 'rgb(20,20,20)'
    } else if(hora >= 5 && hora < 12){
        // Bom dia
        img.src = '../img/manha.png'
        document.body.style.background = '#ffba85'
    } else if(hora >= 12 && hora < 19){
        // Boa tarde
        img.src = '../img/tarde.png'
        document.body.style.background = '#6b99fd'
    } else{
        // Boa noite
        img.src = '../img/noite.png'
        document.body.style.background = '#251503'
    }

}