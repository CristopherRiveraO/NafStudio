window.onload = callService;

var datos;
var urlApp = "https://cristopherriverao.github.io/Naf_IMG_API/galeriaUnas.json";

function callService () {
    $.ajax({
        url: urlApp,
        type: "get",
        dataType: "json",
        success: onSuccess,
        error: onError
    });
}

function onSuccess (data) {
    datos = data;
    procesarDatosGelx();
    procesarDatosAcrilicas();
    procesarDatosCalcio();
}

function onError (jqXHR, textStatus, errorThrow) {
    alert("mensaje de error: " + errorThrow + "\nURL " + urlApp);
}

function procesarDatosGelx() {
    let galeriaContainer = document.getElementById("galeriagelx");
    let html = "";
    datos.imagenes.forEach(imagen => {
        if (imagen.categoria == "GelX") {
            html+="<div class='carousel-item'>";
            html+= "<img src='"+imagen.imagen+"'  class='d-block w-100' alt='...'>";
            html+="</div>";
        }
    });
    galeriaContainer.innerHTML= "";
    galeriaContainer.innerHTML = html;
    $("#galeriagelx").find(".carousel-item").first().addClass("active");
}

function procesarDatosAcrilicas() {
    let galeriaContainer = document.getElementById("acrilicas");
    let html = "";
    datos.imagenes.forEach(imagen => {
        if (imagen.categoria == "acrilicas") {
            html+="<div class='carousel-item'>";
            html+= "<img src='"+imagen.imagen+"'  class='d-block w-100' alt='...'>";
            html+="</div>";
        }
    });
    galeriaContainer.innerHTML= "";
    galeriaContainer.innerHTML = html;
    $("#acrilicas").find(".carousel-item").first().addClass("active");
}

function procesarDatosCalcio() {
    let galeriaContainer = document.getElementById("calcio");
    let html = "";
    datos.imagenes.forEach(imagen => {
        if (imagen.categoria == "calcio") {
            html+="<div class='carousel-item'>";
            html+= "<img src='"+imagen.imagen+"'  class='d-block w-100' alt='...'>";
            html+="</div>";
        }
    });
    galeriaContainer.innerHTML= "";
    galeriaContainer.innerHTML = html;
    $("#calcio").find(".carousel-item").first().addClass("active");
}

function procesarSemi() {
    let galeriaContainer = document.getElementById("semi");
    let html = "";
    datos.imagenes.forEach(imagen => {
        if (imagen.categoria == "semi") {
            html+="<div class='carousel-item'>";
            html+= "<img src='"+imagen.imagen+"'  class='d-block w-100' alt='...'>";
            html+="</div>";
        }
    });
    galeriaContainer.innerHTML= "";
    galeriaContainer.innerHTML = html;
    $("#semi").find(".carousel-item").first().addClass("active");
}