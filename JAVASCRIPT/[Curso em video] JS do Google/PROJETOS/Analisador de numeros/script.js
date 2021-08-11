var numeros = []; //vetor com numeros adcionados

function Adcionar(){
    var num = Number(document.getElementById('num').value)
    document.getElementById('num').value = ' '
    div = document.getElementById('div2')
    div.innerHTML = ' '

    if(num > 100 || num < 0){
        alert('Numero inserido invalido!')
    }else{  
        numeros.push(num)     
        let sel = document.getElementById('lista')
        let Newopt = new Option(`Valor ${numeros[numeros.length -1 ]} Adcionado.`)
        sel.add(Newopt)
    }
}


function Analisar(){
    if(numeros.length < 1){
        alert("Sem numeros para analisar!")
    }else{
        var num = Number(document.getElementById('num').value)
        div = document.getElementById('div2')
        div.innerHTML =`<p>Ao todo temos ${numeros.length} numeros cadastrados</p>
        <p>O Maior valor informado foi ${MaMeValor()}</p>
        <p>O menor valor informado foi ${MaMeValor('Me')}</p>
        <p>Somando todos os valores temos ${Soma()}</p>
        <p>A média dos valores digitados é ${media()}</p>`
    }
}

function MaMeValor(MaMe='Ma'){
    if(MaMe == 'Ma'){
        let maior = numeros[0];
    
        for(i in numeros){
            if (maior < numeros[i]){
                maior = numeros[i];
            }
        }
        return maior;
    }else if(MaMe = 'Me'){
        let menor = numeros[0];

        for(i in numeros){
            if (menor > numeros[i]){
                menor = numeros[i];
            }
        }
        return menor;
    }
    
}

function Soma(vetor = numeros){
    let soma = 0
    for(i in numeros){
        soma += numeros[i];
    }

    return soma;
}

function media(vetor = numeros){
    let media = 0
    for(i in numeros){
        media += numeros[i]
    }
    return (media / numeros.length).toFixed(2);
}