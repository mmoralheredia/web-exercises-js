// Extraer elementos del DOM
const screen = document.querySelector('p') // Pantalla
const buttons = document.querySelectorAll('button') // Buttons

// Cantidad del contador
let total = 0

// Recorrer la lista de elementos botones y agregarle eventos de escucha
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.className === 'add') total++
        else if (button.className === 'subtract') total--
        else if (button.className === 'reset') total = 0

        screen.innerText = total

        if (total === 0) screen.style.color = 'black'
        else if (total < 0) screen.style.color = 'red'
        else if (total > 0) screen.style.color = 'green'
    })
})
