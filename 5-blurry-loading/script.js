const loadText = document.querySelector('.loading-text')// obtiene el elemento con la clase loading-text
const bg = document.querySelector('.bg')// obtiene el elemento con la clase bg

let load = 0 // variable que inicia en 0

let int = setInterval(blurring, 30)// se ejecuta la funcion blurring cada 30 milisegundos osea 0.03 segundos

function blurring() {// funcion blurring que se ejecuta cada 0.03 segundos y hace que el texto se desenfoque y el fondo se vaya enfocando
  load++// incrementa la variable load en 1

  if (load > 99) {// si la variable load es mayor a 99
    clearInterval(int)// se limpia el intervalo
  }// fin del if

  loadText.innerText = `${load}%`// se le asigna a la propiedad innerText del elemento con la clase loading-text el valor de la variable load
  loadText.style.opacity = scale(load, 0, 100, 1, 0)// se le asigna a la propiedad opacity del elemento con la clase loading-text el valor de la funcion scale
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`// se le asigna a la propiedad filter del elemento con la clase bg el valor de la funcion scale
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {// funcion scale que recibe 5 parametros para hacer una regla de 3 simple que es la que se usa para el desenfoque y el enfoque
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min// regla de 3 simple que hace que el valor de la variable load se convierta en un valor entre 1 y 0 para el opacity y entre 30 y 0 para el blur
}