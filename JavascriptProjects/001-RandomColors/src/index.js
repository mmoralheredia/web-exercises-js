let typeColorButtons = document.querySelectorAll('input')
let button = document.getElementById('button')
let textColor = document.querySelector('span')

//Configuración inicial de la pagina, en tipo de color por nombres y color rojo predeterminado.
let initialColor = 'red'
let typeColor = 'Color by name'
document.body.style.backgroundColor = initialColor
textColor.style.color = initialColor
textColor.textContent = initialColor
typeColorButtons[0].className = 'activo'

// Evento de escucha de los buttons de tipos de colores a mostrar.
typeColorButtons.forEach(button => {
    // Por cada elemento en el array de botones de tipos de color a mostrar, se agrega una escucha.
    button.addEventListener('click', () => {
        // Se reinicia la clase de activo a todos los botones de tipo de color.
        typeColorButtons.forEach(element => {
            element.className = ''
        })
        // Y se añade la clase activo a el botón seleccionado.
        button.className = 'activo'
        typeColor = button.value
    })
})

// Evento de escucha de button random.
button.addEventListener('click', () => {
    let color

    if (typeColor === 'Color by name') {
        color = colorRandomName()
        document.body.style.backgroundColor = color
        textColor.style.color = color
        textColor.textContent = color

    } else if (typeColor === 'Color by rgb') {
        color = colorRandomRGB()
        document.body.style.backgroundColor = color
        textColor.style.color = color
        textColor.textContent = color

    } else if (typeColor === 'Color by hex') {
        color = colorRandomHEX()
        document.body.style.backgroundColor = color
        textColor.style.color = color
        textColor.textContent = color
    }
})


// Funciones para colores random de distintas formas
function colorRandomRGB() {
    let randomArray = [
        Math.floor((Math.random() * 256)),
        Math.floor((Math.random() * 256)),
        Math.floor((Math.random() * 256))
    ]
    return `rgb(${randomArray[0]} , ${randomArray[1]}, ${randomArray[2]})`
}

function colorRandomHEX() {
    const valueHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let colorHex = '#'
    for (let i = 0; i <= 5; i++) {
        colorHex += valueHex[Math.floor(Math.random() * 16)]
    }
    return colorHex
}

function colorRandomName() {
    const colorsList = ['aqua', 'black', 'blue', 'brown', 'coral', 'crimson', 'cyan', 'darkblue',
        'darkgray', 'darkgreen', 'darkorange', 'deeppink', 'fuchsia', 'gold', 'gray', 'green',
        'indigo', 'lavender', 'lightblue', 'lightgray', 'lightgreen', 'lightpink', 'lightyellow', 'lime',
        'magenta', 'maroon', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue',
        'mediumturquoise', 'mediumvioletred', 'midnightblue', 'navy', 'olive', 'orange', 'orangered',
        'palegreen', 'paleturquoise', 'palevioletred', 'peru', 'pink', 'plum', 'powderblue', 'purple',
        'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'sienna',
        'silver', 'skyblue', 'slateblue', 'slategray', 'springgreen', 'steelblue', 'tan', 'teal',
        'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'yellow', 'yellowgreen']
    // Selecciona un numero random dentro del margen del arreglo y este lo pasa como indice al arreglo y asi devolver un color random.
    let indexColorRandom = Math.floor(Math.random() * colorsList.length)
    return colorsList[indexColorRandom]
}

