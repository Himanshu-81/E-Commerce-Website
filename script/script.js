const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')

if(bar) {
    bar.addEventListener('click', (e) => {
        nav.classList.add('active')
    })
} 

if(close) {
    close.addEventListener('click', (e) => {
        nav.classList.remove('active')
    })
}

