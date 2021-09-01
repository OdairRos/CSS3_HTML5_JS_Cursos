const div = document.querySelector('#div1')
const button = document.querySelector('button')
const body = document.querySelector('body')

button.addEventListener('click', remove)

body.onkeydown = function(event) {
    const isEsc = event.key === 'Escape'
    if(isEsc == true) {
        add()
    }
}

function remove () {
    div.classList.remove('invisible')
}

function add () {
    div.classList.add('invisible')
}