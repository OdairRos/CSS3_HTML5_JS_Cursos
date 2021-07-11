function Verefica(){
    var data = new Date();
    var AnoAtual = data.getFullYear()
    var Anoformulario = document.querySelector('#Ano')
    var resultado = document.querySelector('#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(Anoformulario.value.length == 0 || Anoformulario.value > AnoAtual){
        window.alert('[ERRO] Verefique os dados e tente novamente')
    }else{
        var sexo = document.getElementsByName('sexo')
        var idade = AnoAtual - Number(Anoformulario.value)
        var genero = ''

        if(sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'Bebe-menino.png')
            }else if(idade < 21){
                img.setAttribute('src', 'Homen-jovem.png')
            }else if(idade < 51){
                img.setAttribute('src', 'Homen-Adulto.png')
            }else{
                img.setAttribute('src', 'Homen-velho.png')
            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'Bebe-menina.png')
            }else if(idade < 21){
                img.setAttribute('src', 'Mulher-Jovem.png')
            }else if(idade < 51){
                img.setAttribute('src', 'Mulher-adulta.png')
            }else{
                img.setAttribute('src', 'Mulher-velha.png')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}