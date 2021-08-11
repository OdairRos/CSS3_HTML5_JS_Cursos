
function Verifica(){
    var msg = document.querySelector('.msg')
    var img = document.querySelector('.foto')
    agora = new Date()
    hora = agora.getHours()

    
    if(hora < 12){
        msg.innerHTML = `Bom dia, agora são ${hora} horas da manhã`
        img.src = 'foto-manha.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora > 12 && hora <= 18){
        msg.innerHTML = `Boa tarde, agora são ${hora} horas da tarde`
        img.src = 'foto-tarde.png'
        document.body.style.background = '#b9846f'
    }else{
        msg.innerHTML = `Boa noite, agora são ${hora} horas da noite`
        img.src = 'foto-noite.png'
        document.body.style.background = '#515154'
    }
}
