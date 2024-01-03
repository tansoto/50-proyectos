const progress = document.getElementById('progress')// obtengo el elemento con el id progress
const prev = document.getElementById('prev')// obtengo el elemento con el id prev
const next = document.getElementById('next')// obtengo el elemento con el id next
const circles = document.querySelectorAll('.circle')// obtengo todos los elementos con la clase circle

let currentActive = 1 // variable que indica el paso actual

next.addEventListener('click', () => {// evento click para el boton next
    currentActive++// incremento el paso actual

    if(currentActive > circles.length) {// si el paso actual es mayor a la cantidad de circulos
        currentActive = circles.length// el paso actual es igual a la cantidad de circulos
    }
    update()// llamo a la funcion update
})

prev.addEventListener('click', () => {// evento click para el boton prev
    currentActive--// decremento el paso actual
    if(currentActive < 1) {// si el paso actual es menor a 1
        currentActive = 1// el paso actual es igual a 1
    }
    update()// llamo a la funcion update
})

function update() { // funcion update
    circles.forEach((circle, idx) => {// recorro todos los circulos
        if(idx < currentActive) {// si el indice es menor al paso actual
            circle.classList.add('active')// agrego la clase active
        } else {// si no
            circle.classList.remove('active')// remuevo la clase active
        }
    })

    const actives = document.querySelectorAll('.active')// obtengo todos los elementos con la clase active

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'// actualizo el width del elemento con el id progress

    if(currentActive === 1) {// si el paso actual es igual a 1
        prev.disabled = true// deshabilito el boton prev
    } else if(currentActive === circles.length) {// si el paso actual es igual a la cantidad de circulos
        next.disabled = true// deshabilito el boton next
    } else {// si no
        prev.disabled = false// habilito los botones
        next.disabled = false// habilito los botones
    }
}