let div = document.querySelectorAll('.fixada')
let span = document.getElementById('menu')
let menu = document.getElementById('lista')

span.addEventListener('click', ()=> {
   div.forEach((d)=> {
    d.style.transform = 'translateX(0)'
    d.style.opacity = '1'
   })
   menu.style.transform = 'translateX(0)'
   menu.style.opacity = '1'
})

div.forEach((fixada)=> {
    fixada.addEventListener('click', ()=> {
        fixada.style.transform = 'translateX(-100%)'
        fixada.style.opacity = '0'
    })
})

menu.addEventListener('click', (event)=> {
    event.stopPropagation()
})