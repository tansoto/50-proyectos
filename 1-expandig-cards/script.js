const panels = document.querySelectorAll('.panel')//querySelectorAll se usa para seleccionar todos los elementos que tengan la clase .panel

panels.forEach(panel => {//forEach se usa para recorrer todos los elementos que tengan la clase .panel
    panel.addEventListener('click', () => {//addEventListener se usa para agregar un evento a cada elemento que tenga la clase .panel
        removeActiveClasses()//removeActiveClasses se usa para remover la clase .active
        panel.classList.add('active')//classList.add se usa para agregar la clase .active   
    })
})

//funcion que remueve la clase .active de todos los elementos que tengan la clase .panel
function removeActiveClasses() {//removeActiveClasses se usa para remover la clase .active
    panels.forEach(panel => {//forEach se usa para recorrer todos los elementos que tengan la clase .panel
        panel.classList.remove('active')//classList.remove se usa para remover la clase .active
    })
}   