document.getElementById('topCanciones').addEventListener('onload', cargarCanciones());

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
  var canciones = datos.canciones;

/*---------------Se reordenan los datos de mayor a menor reproducciones---------------*/

  var newDatos = canciones.sort(function (a, b) {
    return b.reproducciones - a.reproducciones;
    });

/*---------------Bucle que recorre cada cancion ordenada para sacar el top 3---------------*/

    for (var i = 0; i < newDatos.length; i++) {
      if( i<=2 ){
        topCanciones(newDatos[i]);
      }
    }

  };

/*---------------Funcion que manipula el DOM para cargarlos dinamicamente---------------*/

function topCanciones(cancion) {

  let listaCanciones = document.getElementById('topCanciones')
  let element = document.createElement('div')
  element.innerHTML = `
        <div class="col-12 col-md-6 text-center">
          <h6 class="text-success">${cancion.nombre}</h6>
        </div>
        <div class="col-12 col-md-6 justify-content-center mx-auto">
          <audio src="canciones/${cancion.ruta}" controls></audio>
        </div>
        ` 
element.classList.add('row');

listaCanciones.appendChild(element);
};
