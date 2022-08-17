var hayResultado = false;

function concatenaOperacion(valor) {
    let digito = parseInt(valor);

    if (hayResultado) {
        document.calculator.res.value = "";
        document.calculator.ans.value = "";
        hayResultado = false;
    }

    if (Number.isNaN(digito)) {
        document.calculator.res.value = "";
    }else{
        document.calculator.res.value += valor;
    }

    document.calculator.ans.value += valor;
    
}

function ejecutaExpresion() {
    try {
        document.calculator.res.value = eval(document.calculator.ans.value);
        hayResultado = true;

    } catch (error) {
        alert("Error al calcular expresión " + error);
    }
}

function funcionesEspeciales(tipo) {
    try {
        switch (tipo) {
            case 'P':
                document.calculator.ans.value = "Potencia de 2("+document.calculator.res.value+")";
                document.calculator.res.value = Math.pow(document.calculator.res.value,2);
                
                break;
            case 'R':
                document.calculator.ans.value = "Raiz 2 de("+document.calculator.res.value+")";
                document.calculator.res.value = Math.sqrt(document.calculator.res.value);
                
                break;

            case 'L':
                document.calculator.ans.value = "Logaritmo("+document.calculator.res.value+")";
                document.calculator.res.value = Math.log(document.calculator.res.value);
                
                break;
        }
        hayResultado = true;

    } catch (error) {
        alert("Error al calcular expresión " + error);
    }
}

function registrarMemoriaLocal() {
    if (typeof(Storage)!== "undefined") {
        if (hayResultado) {
            let valor = document.calculator.ans.value + "=" + document.calculator.res.value;
            var arreglo = new Array();
            var memRegistro = JSON.parse(localStorage.getItem("exp"));
            if (memRegistro == null) {
                arreglo[0] = valor;
            }else{
                arreglo = memRegistro;
                arreglo[arreglo.length] = valor;
            }
            localStorage.setItem("exp",JSON.stringify(arreglo));
            let mem = document.getElementById("mem");
            mem.innerHTML += "<option>"+ valor+"</option>";
        }
    }
}

function cargaMemoria() {
    if (typeof(Storage)!== "undefined") {
        var memRegistro = JSON.parse(localStorage.getItem("exp"));
        if (memRegistro != null) {
            let mem = document.getElementById("mem");
            for (let index = 0; index < memRegistro.length; index++) {
                mem.innerHTML += "<option>" + memRegistro[index] + "<option>";
                
            }
        }
        
    }
}