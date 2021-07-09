
function Clique(){
    let sele = document.getElementById('sele')
    let valor = document.getElementById('Valor')
    var valorV = Number(valor.value) 
    var i;
    // Deletando caso ja tenha uma tabuada na select
    for(i = sele.length -1; i >= 0; i--){
        sele.remove(i)
    }
    // Vereficando se foi digitado um valor
    if(valor.value.length <1){
        window.alert('Valor não digitado, considerando como 1')
        valorV = 1
    }
    // Criando uma nova tabuada com o valor desejado
    for(i= 1;i<=10; i++){

        var aux = new Option(`${valorV} x ${i} = ${i*valorV}`, 'aux')
        sele.add(aux)
    }
}