function Contar(){
    var Inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.querySelector("#passo")
    var resultado = document.getElementById('resultado')
    let inicioV = Number(Inicio.value)
    let fimV = Number(fim.value)
    let passoV = Number(passo.value)
    resultado.innerHTML = ' '
    
    if(Inicio.value.length < 1  || fim.value.length < 1){
        resultado.innerHTML = 'Impossivel contar'
    }else if(passo == 0 || passo.value.length < 1){
        window.alert('Valor do passo não digitado ou é igual a zero, sera considerado passo 1 para a contagem')
        passoV = 1
    }

    if(inicioV > fimV){
        for(inicioV; inicioV >= fimV; inicioV-=passoV){
            resultado.innerHTML += `${inicioV}👉`
        }
    }else{
        for(inicioV; inicioV <= fimV; inicioV+=passoV){
            resultado.innerHTML += `${inicioV}👉`
        }
    }
    resultado.innerHTML += "🏁"
}