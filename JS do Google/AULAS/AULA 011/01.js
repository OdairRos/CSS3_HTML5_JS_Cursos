let amigo = {nome: 'odair',
    sexo: 'm',
    peso: 60,
    engordar(p=0){
        console.log('engordou')
        this.peso += p
    }
}
amigo.engordar();
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)