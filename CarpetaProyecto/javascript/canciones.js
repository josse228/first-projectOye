
/*------------------Se crea un objeto cancion------------------*/

  class Cancion {
    constructor(nombre, ruta, reproducciones, icono) {
      this.nombre = nombre;
      this.ruta = ruta;
      this.reproducciones = reproducciones;
      this.icono = icono;
    };
  };
  

document.getElementById('contenedorCanciones').addEventListener('onload', cargarCanciones());

/*------------------Funcion para traer los datos via AJAX------------------*/

function cargarCanciones() {
    let peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function () {
      if (this.status == 200 &&
          this.readyState == 4) {
        cargarJSON(this);
      };
    };
    peticion.open('GET', '/CarpetaProyecto/canciones.json', true);
    peticion.send();
};

/*---------------Funcion para manipular los datos extraidos---------------*/

function cargarJSON(json) {
  var datos = JSON.parse(json.response);
  var canciones = datos.canciones

/*--------Bucle que recorre todas las canciones--------*/

  for (i = 0; i < canciones.length; i++) {
    
    let nombre = canciones[i].nombre;
    let ruta = canciones[i].ruta;
    let reproducciones = canciones[i].reproducciones;
    let icono = canciones[i].icono;

/*------Se crea una instancia de objeto con las variables asignadas------*/

    let datosCancion = new Cancion(nombre, ruta, reproducciones, icono);

    agregarCancion(datosCancion);

  };
/*---------------Evento para el filtro de busqueda---------------*/
    document.getElementById('busqueda').addEventListener('keyup', (evento) => {

      let busqueda = evento.target.value.toLowerCase();
  
      let cancionesActivas = document.getElementsByClassName('col-lg-4');

/*---Bucle para recorrer las canciones actuales en la pag.---*/
        for ( i=0 ; i<cancionesActivas.length ; i++){
  
          let tituloCanciones = cancionesActivas[i].innerText;
/*--Si la busqueda coincide con algun titulo de la cancion, lo muestra:--*/
          if(tituloCanciones.indexOf(busqueda) > -1){
            cancionesActivas[i].style.display = '';
/*--De lo contrario, lo oculta--*/
          }else {
            cancionesActivas[i].style.display = 'none';
          }
        
        }

    });
      

}
/*---------------Funcion que manipula el DOM para cargarlos dinamicamente---------------*/
function agregarCancion(cancion) {
  
    let listaCanciones = document.getElementById('contenedorCanciones')
    let element = document.createElement('div')
    element.innerHTML = `

      <div class="row p-0 mx-auto no-gutters">
          <div class="col-6 mx-auto">
              <img class="img-responsive" src="./imagenes/icon_${cancion.icono}.svg" alt="">
          </div>
      </div>
      <div class="row p-0 no-gutters mx-auto">
          <div class="col-12 text-center">
            <h6>${cancion.nombre}</h6>
          </div>
          <div class="col-auto mx-auto">
              <audio src="./canciones/${cancion.ruta}" controls></audio>
          </div>
      </div>

  ` 
  element.classList.add('col-12','col-md-6','col-lg-4','mx-auto','justify-content-center');
  
  listaCanciones.appendChild(element);
};

