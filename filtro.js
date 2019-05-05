const personajes = [
  { nombre: 'Monkey D. Luffy', sexo: 'hombre', tipo: 'pirata', grupo: 'StrawHat', img: './Straw-Hat/monkey-d-luffy.png', serie: 'One piece' },
  { nombre: 'Roronoa Zoro', sexo: 'hombre', tipo: 'pirata', grupo: 'StrawHat', img: './Straw-Hat/roronoa-zoro.png', serie: 'One piece' },
  { nombre: 'Godo Usopp', sexo: 'hombre', tipo: 'pirata', grupo: 'StrawHat', img: './Straw-Hat/godo-usopp.png', serie: 'One piece' },
  { nombre: 'Vinsmoke Sanji', sexo: 'hombre', tipo: 'pirata', grupo: 'StrawHat', img: './Straw-Hat/vinsmoke-sanji.png', serie: 'One piece' },
  { nombre: 'Cat Burglar Nami', sexo: 'mujer', tipo: 'pirata', grupo: 'StrawHat', img: './Straw-Hat/cat-burglar-nami.png', serie: 'One piece' },
  { nombre: 'Tony Chopper', sexo: 'hombre', tipo: 'pirata', grupo: 'StrawHat', img: './Straw-Hat/tony-chopper.png', serie: 'One piece' },
  { nombre: 'Nico Robin', sexo: 'mujer', tipo: 'pirata', grupo: 'StrawHat', img: './Straw-Hat/nico-robin.png', serie: 'One piece' },
  { nombre: 'Roboto Franky', sexo: 'hombre', tipo: 'pirata', grupo: 'StrawHat', img: './Straw-Hat/roboto-franky.png', serie: 'One piece' },
  { nombre: 'Soul King Brook', sexo: 'hombre', tipo: 'pirata', grupo: 'StrawHat', img: './Straw-Hat/soul-king-brook.png', serie: 'One piece' },
  { nombre: 'Monkey D. Garp', sexo: 'hombre', tipo: 'marine', grupo: 'marine', img: './Straw-Hat/soul-king-brook.png', serie: 'One piece' },
]

const listado = document.getElementById('lista-de-personajes')
// Para mostrarlos, recorremos el listado con un for
function CrearCajitas(algunaPropiedad) {
  for (let i = 0; i < personajes.length; i++) {
    if (personajes[i].nombre === algunaPropiedad || personajes[i].sexo === algunaPropiedad || personajes[i].tipo === algunaPropiedad || personajes[i].grupo === algunaPropiedad || personajes[i].serie === algunaPropiedad) {
      const cajita = document.createElement('div')
      cajita.classList.add('personaje')


      const titulo = document.createElement('div')
      titulo.classList.add('titulo')
      titulo.textContent = personajes[i].nombre

      const imagen = document.createElement('img');
      imagen.setAttribute('src', personajes[i].img);
      cajita.appendChild(titulo)
      cajita.appendChild(imagen)
      listado.appendChild(cajita)
    }
  }
}

CrearCajitas('One piece');
console.log(listado.children);


const botonDeFiltro = document.querySelector('button')

botonDeFiltro.onclick = function filtro(e) {
  e.preventDefault();
  const formulario = document.querySelector('form');
  const elemBusqueda = formulario.elements[0];
  const textoBusqueda = elemBusqueda.value;

  while (listado.children.length > 0) {
    listado.children[0].remove();
  }

  CrearCajitas(textoBusqueda)
}


//hacer .include así aparecen los nombres