window.onload = specialDomInicial;

function specialDomInicial() {
    let specialsDatos = document.getElementById("row-specials-datos");
    let specialImg = document.getElementById("row-specials-img");
    let specialsDatosPestanas = document.getElementById("row-specials-datos-pestanas");
    let specialImgPestanas = document.getElementById("row-specials-img-pestanas");
    let urlImagen = "";
    let htmlDinamico = "";
    let urlImagenPes = "";
    let htmlDinamicoPes = "";


    urlImagen ="img/galeria/gelx-1.jpg";
    htmlDinamico += "<h3>Gel X</h3>";
    htmlDinamico += "<h3>Precio: ¢15 000</h3>";
    htmlDinamico += "<h3>Mantenimiento: ¢12 000</h3>";
    htmlDinamico += "<p class='fst-italic'>Estructura de Gel X que consiste en un tipo de uñas postizas hechas de gel suave que se pegan con un esmalte de gel que actúa como pegamento. Al ser un formato pre-creado, permite que la clienta elija entre multitud de tamaños, limados y largos.</p>";

    urlImagenPes ="img/galeria/volumen-1.jpg";
    htmlDinamicoPes += "<h3>Voluminosas</h3>";
    htmlDinamicoPes += "<h3>Precio: ¢15 000</h3>";
    htmlDinamicoPes += "<h3>Retoque: ¢12 000</h3>";
    htmlDinamicoPes += "<p class='fst-italic'>La técnica rusa o de volumen para la aplicación de extensión de pestañas, a diferencia de la normal, consiste en adherir de 2 a más extensiones súper ligeras y delgadas, por cada pestaña natural.</p>";

    specialsDatos.innerHTML = "";
    specialsDatos.innerHTML = htmlDinamico;
    specialImg.src = "";
    specialImg.src = urlImagen;

    specialsDatosPestanas.innerHTML = "";
    specialsDatosPestanas.innerHTML = htmlDinamicoPes;
    specialImgPestanas.src = "";
    specialImgPestanas.src = urlImagenPes;

 
    

    agregarEventos();
    agregarEventosPes();
  
}

function specialsDom(){
    let specialsDatos = document.getElementById("row-specials-datos");
    let specialImg = document.getElementById("row-specials-img");
    let op = parseInt(this.name);
    let urlImagen = "";
    let htmlDinamico = "";
    
    switch (op) {
        case 1:
            urlImagen ="img/galeria/gelx-1.jpg";
            htmlDinamico += "<h3>Gel X</h3>";
            htmlDinamico += "<h3>Precio: ¢15 000</h3>";
            htmlDinamico += "<h3>Mantenimiento: ¢12 000</h3>";
            htmlDinamico += "<p class='fst-italic'>Estructura de Gel X que consiste en un tipo de uñas postizas hechas de gel suave que se pegan con un esmalte de gel que actúa como pegamento. Al ser un formato pre-creado, permite que la clienta elija entre multitud de tamaños, limados y largos.</p>";

            break;
        case 2:
            urlImagen ="img/galeria/acrilico-1.jpg";
            htmlDinamico += "<h3>Acrílico</h3>";
            htmlDinamico += "<h3>Precio: ¢13 000 - ¢18 000 </h3>";
            htmlDinamico += "<h3>Mantenimiento: ¢12 000</h3>";
            htmlDinamico += "<p class='fst-italic'>Las uñas acrílicas son extensiones que se le añaden a la uña natural y puedes elegir la longitud de estas, solo escoge el esmalte que te apetezca y, ¡listo! Con ambos tipos podrás conseguir uñas que resistan durante varios días y semanas.</p>";
            break;
        case 3:
            urlImagen ="img/galeria/calcio-2.jpg";
            htmlDinamico += "<h3>Gel Calcio</h3>";
            htmlDinamico += "<h3>Precio: ¢12 000</h3>";
            htmlDinamico += "<h3>Mantenimiento: ¢12 000</h3>";
            htmlDinamico += "<p class='fst-italic'>Permite reparar uñas dañadas por las manicuras repetidas, la exposición prolongada a productos de limpieza, e incluso a una mala alimentación. El calcio nutre la matriz y la superficie de la uña, lo que ayuda a recuperar su elasticidad y a volverse más fuertes.</p>";
            break;
        case 4:
            urlImagen ="img/pedi.jpg";
            htmlDinamico += "<h3>Pedicure Esmaltado Semipermanente</h3>";
            htmlDinamico += "<h3>Precio: ¢7 000</h3>";
            htmlDinamico += "<p class='fst-italic'>El brillo en tus uñas permanece en todo momento. Es un esmaltado de secado inmediato y de larga duración que mantiene un resultado reluciente</p>";
            break;
        case 5:
                urlImagen ="img/galeria/pedispa.jpg";
                htmlDinamico += "<h3>Pedicure Spa + Semi</h3>";
                htmlDinamico += "<h3>Precio: ¢15 000</h3>";
                htmlDinamico += "<p class='fst-italic'>Un tratamiento completo de pedicure incluye cuidado de los pies, pierna y uñas de los pies. El masaje del pies se extiende un poco mas arriba del tobillo. Los masajes en la pedicura ayudan a estimular la circulación de la sangre.</p>";
                break;  
        case 6:
                urlImagen ="img/galeria/cursounas.jpg";
                htmlDinamico += "<h3>Curso para Manicure</h3>";
                htmlDinamico += "<h3>Precio: ¢230 000</h3>";
                htmlDinamico += "<p class='fst-italic'>Reserva tu espacio y entra en el mundo de la belleza y colocación de manicura</p>";
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


function specialsDomP(){
    let specialsDatosPestanas = document.getElementById("row-specials-datos-pestanas");
    let specialImgPestanas = document.getElementById("row-specials-img-pestanas");
    let tab = parseInt(this.name);
    let urlImagenPes = "";
    let htmlDinamicoPes = "";
    
    switch (tab) {
        case 1:
            urlImagenPes ="img/galeria/volumen-1.jpg";
            htmlDinamicoPes += "<h3>Voluminosas</h3>";
            htmlDinamicoPes += "<h3>Precio: ¢20 000 - ¢28 000</h3>";
            htmlDinamicoPes += "<h3>Retoque: ¢15 000 - ¢18 000</h3>";
            htmlDinamicoPes += "<p class='fst-italic'>La técnica rusa o de volumen para la aplicación de extensión de pestañas, a diferencia de la normal, consiste en adherir de 2 a más extensiones súper ligeras y delgadas, por cada pestaña natural.</p>";

            break;
        case 2:
            urlImagenPes ="img/galeria/natural-3.jpg";
            htmlDinamicoPes += "<h3>Naturales</h3>";
            htmlDinamicoPes += "<h3>Precio: ¢16 000 </h3>";
            htmlDinamicoPes += "<h3>Retoque: ¢12 000</h3>";
            htmlDinamicoPes += "<p class='fst-italic'>La técnica de extensión de pestañas efecto natural, es recomendada para mujeres que quieren mantener la proporción de sus pestañas pero con una longitud más larga, esta técnica se realiza colocando un pelo por un uno natural, permitiendo tener una mirada fresca con un volumen natural.</p>";
            break;
        case 3:
            urlImagenPes ="img/galeria/foxy-1.jpg";
            htmlDinamicoPes += "<h3>Foxy Eye</h3>";
            htmlDinamicoPes += "<h3>Precio: ¢16 000</h3>";
            htmlDinamicoPes += "<h3>Retoque: ¢12 000</h3>";
            htmlDinamicoPes += "<p class='fst-italic'>Las extensiones de pestañas Foxy consiste en colocar fans (abanicos de 4-6 pelos) de extensiones en tus pestañas con largos ascendentes, para crear un efecto intenso de ojos delineados</p>";
            break;
        case 4:
            urlImagenPes ="img/galeria/rimel-1.jpg";
            htmlDinamicoPes += "<h3>Efecto Rímel</h3>";
            htmlDinamicoPes += "<h3>Precio: ¢18 000</h3>";
            htmlDinamicoPes += "<h3>Retoque: ¢13 000</h3>";
            htmlDinamicoPes += "<p class='fst-italic'>Como su nombre lo dice, se trata de una técnica creada en Rusia que logra duplicar o triplicar el volumen natural de tus pestañas</p>";
            break;
        case 5:
            urlImagenPes ="img/galeria/cejas-3.jpg";
            htmlDinamicoPes += "<h3>Cejas 4K</h3>";
            htmlDinamicoPes += "<h3>Precio: ¢16 000</h3>";
            htmlDinamicoPes += "<p class='fst-italic'>Las cejas 4k consisten en aplicar un sombreado semipermanente con pigmentos minerales que tiñen este vello facial dándole un acabado más marcado pero súper natural</p>";
            break;
        case 6:
            urlImagenPes ="img/galeria/cursopestana.jpg";
            htmlDinamicoPes += "<h3>Cursos de Pestñas Pelo a Pelo</h3>";
            htmlDinamicoPes += "<h3>Precio: ¢120 000</h3>";
            htmlDinamicoPes += "<h3>El curso consta de material teórico y práctica dirigida personalizada";
            htmlDinamicoPes += "<p class='fst-italic'>Reserva tu espacio y entra en el mundo de la belleza y colocación de pestañas pelo a pelo</p>";
            break;  
                   
    }

    specialsDatosPestanas.innerHTML = "";
    specialsDatosPestanas.innerHTML = htmlDinamicoPes;
    specialImgPestanas.src = "";
    specialImgPestanas.src = urlImagenPes;
}


function agregarEventosPes() {
    let listItems = document.getElementsByClassName("specialPer-listItemd");

    for (const item in listItems) {
        if (listItems[item].nodeName==="A") {
            listItems[item].onclick = specialsDomP;
        }
    }
}