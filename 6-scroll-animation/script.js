const boxes = document.querySelectorAll('.box')//selecciona todos los elementos con la clase box

window.addEventListener('scroll', checkBoxes)//cuando se hace scroll se ejecuta la funcion

checkBoxes()//se ejecuta la funcion

function checkBoxes() {//funcion que se ejecuta cuando se hace scroll
    const triggerBottom = window.innerHeight / 5 * 4//se obtiene el tamaño de la ventana y se divide entre 5 y se multiplica por 4 para obtener el 80% de la ventana

    boxes.forEach(box => {//se recorre cada elemento con la clase box
        const boxTop = box.getBoundingClientRect().top//se obtiene la posicion del elemento con respecto a la ventana y se guarda en la variable boxTop

        if(boxTop < triggerBottom) {//si la posicion del elemento es menor al 80% de la ventana se le agrega la clase show)
            box.classList.add('show')//se agrega la clase show
        } else {//si no se le quita la clase show
            box.classList.remove('show')//se quita la clase show
        }
    })
}