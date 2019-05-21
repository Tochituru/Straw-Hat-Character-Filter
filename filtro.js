const personajes = [
  { nombre: 'monkey d. luffy', sexo: 'hombre', tipo: 'pirata', grupo: 'sombrero de paja', img: './Straw-Hat/monkey-d-luffy.png', serie: 'One piece' },
  { nombre: 'roronoa zoro', sexo: 'hombre', tipo: 'pirata', grupo: 'sombrero de paja', img: './Straw-Hat/roronoa-zoro.png', serie: 'One piece' },
  { nombre: 'godo ussopp', sexo: 'hombre', tipo: 'pirata', grupo: 'sombrero de paja', img: './Straw-Hat/godo-usopp.png', serie: 'One piece' },
  { nombre: 'vinsmoke sanji', sexo: 'hombre', tipo: 'pirata', grupo: 'sombrero de paja', img: './Straw-Hat/vinsmoke-sanji.png', serie: 'One piece' },
  { nombre: 'cat burglar nami', sexo: 'mujer', tipo: 'pirata', grupo: 'sombrero de paja', img: './Straw-Hat/cat-burglar-nami.png', serie: 'One piece' },
  { nombre: 'tony chopper', sexo: 'hombre', tipo: 'pirata', grupo: 'sombrero de paja', img: './Straw-Hat/tony-chopper.png', serie: 'One piece' },
  { nombre: 'nico robin', sexo: 'mujer', tipo: 'pirata', grupo: 'sombrero de paja', img: './Straw-Hat/nico-robin.png', serie: 'One piece' },
  { nombre: 'roboto franky', sexo: 'hombre', tipo: 'pirata', grupo: 'sombrero de paja', img: './Straw-Hat/roboto-franky.png', serie: 'One piece' },
  { nombre: 'soul king brook', sexo: 'hombre', tipo: 'pirata', grupo: 'sombrero de paja', img: './Straw-Hat/soul-king-brook.png', serie: 'One piece' },
  { nombre: 'monkey d. garp', sexo: 'hombre', tipo: 'marine', grupo: 'marine', img: './Straw-Hat/monkey-d-garp.png', serie: 'One piece' },
]

const listado = document.getElementById('lista-de-personajes')
function CrearFiltroDePersonajes(algunaPropiedad) {
  for (let i = 0; i < personajes.length; i++) {
    if (personajes[i].nombre.includes(algunaPropiedad) || personajes[i].sexo === algunaPropiedad || personajes[i].tipo === algunaPropiedad || personajes[i].grupo === algunaPropiedad || personajes[i].serie === algunaPropiedad) {
      const cajita = document.createElement('div')
      cajita.classList.add('personaje')


      const titulo = document.createElement('div')
      titulo.classList.add('titulo')
      titulo.textContent = personajes[i].nombre.toUpperCase()

      const imagen = document.createElement('img');
      imagen.setAttribute('src', personajes[i].img);
      cajita.appendChild(titulo)
      cajita.appendChild(imagen)
      listado.appendChild(cajita)
    }
  }
}
const seleccionDefault = 'One piece'

CrearFiltroDePersonajes(seleccionDefault);
console.log(listado.children);


const botonDeFiltro = document.querySelector('button')

botonDeFiltro.onclick = function filtro(e) {
  e.preventDefault();
  const formulario = document.querySelector('form');
  const elemBusqueda = formulario.elements[0];
  const textoBusqueda = elemBusqueda.value.toLowerCase();

  while (listado.children.length > 0) {
    listado.children[0].remove();
  }
  if (textoBusqueda.length === 0) {
    CrearFiltroDePersonajes(seleccionDefault);
  } else {
    CrearFiltroDePersonajes(textoBusqueda);
  };

}

