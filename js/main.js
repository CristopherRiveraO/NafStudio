window.onload = specialDomInicial;



// inicia la Configuración

let map, marker, watchID, geoLoc;

function initMap() {

  const myLatLng = { lat: 10.01813, lng: -84.21394 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: myLatLng
  });
  marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Tasty Bites"
  });
  getPosition();
}

function getPosition() {
  if(navigator.geolocation) {
    geoLoc = navigator.geolocation;
    watchID = geoLoc.watchPosition(showLocationOnMap, errorHandler);
  } else {
    alert("Lo sentimos, el navegador no soporta geolocalización");
  }
}

function showLocationOnMap(position) {
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const directionsService = new google.maps.DirectionsService();

  var latitud = position.coords.latitude;
  var longitud = position.coords.longitude;
  const myLatLng = {lat: latitud, lng: longitud};
  directionsRenderer.setMap(map);
  calculateAndDisplayRoute(directionsService, directionsRenderer, myLatLng);
}

function errorHandler(err) {
  if(err.code == 1) {
    alert("Error: Acceso denegado!");
  } else if (err.code == 2) {
    alert("Error: Posición no existe o no se encuentra!");
  }
}

function calculateAndDisplayRoute(directionsService, directionsRenderer, myLatLng) {
  directionsService.route(
    {
      origin: {lat: myLatLng.lat, lng: myLatLng.lng},
      destination: { lat: 10.01813, lng: -84.21394 },
      // tambien se puede usar de otro modo WALKING - BICYCLING - TRANSIT
      travelMode: google.maps.TravelMode["DRIVING"]
    },
    (response, status) => {
      if (status == "OK") {
        directionsRenderer.setDirections(response);
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );
}

window.initMap = initMap;



function specialDomInicial() {
  let specialsDatos = document.getElementById("row-specials-datos");
  let specialImg = document.getElementById("row-specials-img");
  let urlImagen = "";
  let htmlDinamico = "";
  cargaMemoria();

  urlImagen ="assets/img/specials-1.png";
          htmlDinamico += "<h3>Architecto ut aperiam autem id</h3>";
          htmlDinamico += "<p class='fst-italic'>Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>";
          htmlDinamico += "<p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>";

  specialsDatos.innerHTML = "";
  specialsDatos.innerHTML = htmlDinamico;
  specialImg.src = "";
  specialImg.src = urlImagen;

  agregarEventos();
}

function specialsDom(){
  let specialsDatos = document.getElementById("row-specials-datos");
  let specialImg = document.getElementById("row-specials-img");
  let tab = parseInt(this.name);
  let urlImagen = "";
  let htmlDinamico = "";
  
  switch (tab) {
      case 1:
          urlImagen ="assets/img/specials-1.png";
          htmlDinamico += "<h3>Architecto ut aperiam autem id</h3>";
          htmlDinamico += "<p class='fst-italic'>Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>";
          htmlDinamico += "<p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>";
          break;
      case 2:
          urlImagen ="assets/img/specials-2.png";
          htmlDinamico += "<h3>Et blanditiis nemo veritatis excepturi</h3>";
          htmlDinamico += "<p class='fst-italic'>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia etreiciendis sunt sunt est</p>";
          htmlDinamico += "<p>Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto  madirna desera vafle de nideran pal</p>";
          break;
      case 3:
          urlImagen ="assets/img/specials-3.png";
          htmlDinamico += "<h3>Impedit facilis occaecati odio neque aperiam sit</h3>";
          htmlDinamico += "<p class='fst-italic'>Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>";
          htmlDinamico += "<p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima  molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>";
          break;           
  }

  specialsDatos.innerHTML = "";
  specialsDatos.innerHTML = htmlDinamico;
  specialImg.src = "";
  specialImg.src = urlImagen;
}

function agregarEventos() {
  let listItems = document.getElementsByClassName("specialPer-listItem");

  for (const item in listItems) {
      if (listItems[item].nodeName==="A") {
          listItems[item].onclick = specialsDom;
      }
  }
}