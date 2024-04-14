//Funcion que me aplica el estilo a la opción seleccionada en el menu y quita la previamente seleccionada
const seleccionar = (link) => {
    const opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo responsive
    const x = document.getElementById("nav");
    x.className = "";
}

//Función que muestra el menu responsive
const responsiveMenu = () => {
    const x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//Detecto el scrolling para aplicar la animación de las barras de habilidades
window.onscroll = function () {
    efectoHabilidades()
};

//Funcion que aplica la animación de la barra de habilidades
const efectoHabilidades = () => {
    const skills = document.getElementById("skills");
    const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }
}
// Funcionamiento de indicador del menu
const opciones = document.querySelectorAll('#links a');
const indicador = document.querySelector('.indicador');
let lastSelectedIndex = 0;

opciones.forEach((opcion, index) => {
    opcion.addEventListener('mouseover', () => {
        indicador.style.transform = `translateX(${index * 175}%)`; // Adjust the translation value to align the indicator properly
    });
    opcion.addEventListener('mouseout', () => {
        indicador.style.transform = `translateX(${lastSelectedIndex * 175}%)`; // Adjust the translation value to align the indicator properly
        indicador.style.backgroundColor = '#ff9a13'; // Restaura el color de fondo
    });

    opcion.addEventListener('click', () => {
        const removeClassFromElements = (elements, className) => {
            elements.forEach(element => element.classList.remove(className));
        };

        removeClassFromElements(opciones, 'seleccionado');

        opcion.classList.add('seleccionado');

        lastSelectedIndex = index;

    });

});
