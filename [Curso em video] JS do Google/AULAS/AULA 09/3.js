let vetor = [4, 2, 1, 3, 5];

pos = vetor.indexOf(5)

if(pos == -1){
    console.log('Valor não encontrado')
}else{
    console.log(`O valor 5 ta na posição ${pos}`)
}

vetor.sort();

for(let pos in vetor ){
    console.log(`A posição ${pos} tem o valor ${vetor[pos]}`);
}