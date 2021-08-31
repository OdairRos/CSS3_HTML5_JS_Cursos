const h1 = document.querySelector('h1')

h1.onmouseover = print

function print(){
    console.log('print')
}

// Da problema quando querer adicionar mais de uma funcionalidade

h1.onmouseover = function(){
    console.log('outro print')
}