const div = document.createElement('div');
div.innerHTML = 'ola devs'

const body = document.getElementsByTagName('body')
const src = document.getElementsByTagName('script')

const head = document.getElementsByTagName('header')
//insertBefore
body.insertBefore(div, src)

//insertafter

body.insertBefore(div, head.nextElementSibling)