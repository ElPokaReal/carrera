function AgregarCorredor() {
  
    let nuevaFila = document.createElement("tr");
  
    let celdaNombre = document.createElement("td");
    celdaNombre.textContent = inputNombre;
    nuevaFila.appendChild(celdaNombre);
  
    let celdaEdad = document.createElement("td");
    celdaEdad.textContent = inputEdad;
    nuevaFila.appendChild(celdaEdad);
  
    let celdaCategoria = document.createElement("td");
    celdaCategoria.textContent = categoria;
    nuevaFila.appendChild(celdaCategoria);
  
    // Celda para Hora Salida
    let celdaHoraSalida = document.createElement("td");
    let inputHoraSalida = document.createElement("input");
    inputHoraSalida.type = "time"; 
    inputHoraSalida.id = "horaSalida_" + inputNombre; // ID único
    celdaHoraSalida.appendChild(inputHoraSalida);
    nuevaFila.appendChild(celdaHoraSalida);

    // Celda para Hora Llegada
    let celdaHoraLlegada = document.createElement("td");
    let inputHoraLlegada = document.createElement("input");
    inputHoraLlegada.type = "time";
    inputHoraLlegada.id = "horaLlegada_" + inputNombre; // ID único
    celdaHoraLlegada.appendChild(inputHoraLlegada);
    nuevaFila.appendChild(celdaHoraLlegada);

    // Celda para Tiempo Total (inicialmente vacía)
    let celdaTiempoTotal = document.createElement("td");
    nuevaFila.appendChild(celdaTiempoTotal);

    document.getElementById("tablaCorredores").appendChild(nuevaFila);
  
    document.getElementById("nombreCorredor").value = "";
    document.getElementById("edadCorredor").value = "";
    
    inputHoraSalida.addEventListener('change', () => {
    calcularTiempoTotal(inputNombre);
});

inputHoraLlegada.addEventListener('change', () => {
    calcularTiempoTotal(inputNombre);
});

  }

  function calcularTiempoTotal(corredor) {
    let horaSalida = document.getElementById("horaSalida_" + corredor).value;
    let horaLlegada = document.getElementById("horaLlegada_" + corredor).value;

    if (horaSalida && horaLlegada) {
        // Convertir las horas a minutos
        let [horaSalidaH, horaSalidaM] = horaSalida.split(':').map(Number);
        let [horaLlegadaH, horaLlegadaM] = horaLlegada.split(':').map(Number);

        let tiempoSalidaEnMinutos = horaSalidaH * 60 + horaSalidaM;
        let tiempoLlegadaEnMinutos = horaLlegadaH * 60 + horaLlegadaM;

        // Calcular la diferencia en minutos
        let tiempoTotalEnMinutos = tiempoLlegadaEnMinutos - tiempoSalidaEnMinutos;

        // Formatear el tiempo total
        let horas = Math.floor(tiempoTotalEnMinutos / 60);
        let minutos = tiempoTotalEnMinutos % 60;
        let tiempoTotalFormateado = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;

        // Buscar la celda de Tiempo Total y actualizarla
        let filaCorredor = Array.from(document.querySelectorAll('#tablaCorredores tr')).find(fila => {
          return fila.textContent.includes(corredor); 
        });
      
        if (filaCorredor) {
          let celdaTiempoTotal = filaCorredor.querySelectorAll('td')[6];
          celdaTiempoTotal.textContent = tiempoTotalFormateado;
          localStorage.setItem(`tiempoTotal_${corredor}`, tiempoTotalFormateado);
          console.log(`Tiempo total de ${corredor} actualizado`)
        } else {
          console.log("No se encontró la fila del corredor:", corredor);
        }
  }      
}

const corredoresData = [
  {
    "Nº": "1",
      "Corredor": "Emily Sambrano",
      "Edad": "15"
  },
  {
    "Nº": "2",
      "Corredor": "Bejia Galvon",
      "Edad": "15"
  },
  {
    "Nº": "3",
      "Corredor": "Grabiela Bayter",
      "Edad": "16"
  },
  {
    "Nº": "4",
      "Corredor": "Maria Paula Sarmiento",
      "Edad": "15"
  },
  {
    "Nº": "5",
      "Corredor": "Jhon Montilla",
      "Edad": "15"
  },
  {
    "Nº": "6",
      "Corredor": "Jeferson Monsalve",
      "Edad": "22"
  },
  {
    "Nº": "7",
      "Corredor": "Jheferson Contreras",
      "Edad": "34"
  },
  {
    "Nº": "8",
      "Corredor": "Sumaldinoska Sanchez",
      "Edad": "27"
  },
  {
    "Nº": "9",
      "Corredor": "Keilin Velandria",
      "Edad": "28"
  },
  {
    "Nº": "10",
      "Corredor": "Yulgrid Valdez",
      "Edad": "28"
  },
  {
    "Nº": "11",
      "Corredor": "Roxanny Avendaño",
      "Edad": "28"
  },
  {
    "Nº": "12",
      "Corredor": "Maria Urbina",
      "Edad": "27"
  },
  {
    "Nº": "13",
      "Corredor": "Jeiber Hernandes",
      "Edad": "24"
  },
  {
    "Nº": "14",
      "Corredor": "Rossy Vera",
      "Edad": "28"
  },
  {
    "Nº": "15",
      "Corredor": "Roman Andrade",
      "Edad": "22"
  },
  {
    "Nº": "16",
      "Corredor": "Angel Medina",
      "Edad": "19"
  },
  {
    "Nº": "17",
      "Corredor": "Henrry Ramirez",
      "Edad": "29"
  },
  {
    "Nº": "18",
      "Corredor": "Jesus Lobo",
      "Edad": "28"
  },
  {
    "Nº": "19",
      "Corredor": "Cristian Rivera",
      "Edad": "19"
  },
  {
    "Nº": "20",
      "Corredor": "Enderson Uribe",
      "Edad": "28"
  },
  {
    "Nº": "21",
      "Corredor": "Andry Orozco",
      "Edad": "38"
  },
  {
    "Nº": "22",
      "Corredor": "Francisco Moncada",
      "Edad": "35"
  },
  {
    "Nº": "23",
      "Corredor": "Roberto Conde",
      "Edad": "34"
  },
  {
    "Nº": "24",
      "Corredor": "Luis Solarte",
      "Edad": "38"
  },
  {
    "Nº": "25",
      "Corredor": "Kendryn Colon",
      "Edad": "30"
  },
  {
    "Nº": "26",
      "Corredor": "Carlos Moreno",
      "Edad": "38"
  },
  {
    "Nº": "27",
      "Corredor": "Luis Ruiz",
      "Edad": "35"
  },
  {
    "Nº": "28",
      "Corredor": "Jhon Montilla",
      "Edad": "34"
  },
  {
    "Nº": "29",
      "Corredor": "Grey Duran",
      "Edad": "32"
  },
  {
    "Nº": "30",
      "Corredor": "Ruben Rivera",
      "Edad": "30"
  },
  {
    "Nº": "31",
      "Corredor": "Daniel Pavon",
      "Edad": "30"
  },
  {
    "Nº": "32",
      "Corredor": "Yorley Sonobria",
      "Edad": "37"
  },
  {
    "Nº": "33",
      "Corredor": "Lisbeth Albarran",
      "Edad": "36"
  },
  {
    "Nº": "34",
      "Corredor": "Yetsi Rivas ",
      "Edad": "32"
  },
  {
    "Nº": "35",
      "Corredor": "Sildry Locruz ",
      "Edad": "35"
  },
  {
    "Nº": "36",
      "Corredor": "Naikely Montilla",
      "Edad": "33"
  },
  {
    "Nº": "37",
      "Corredor": "Juan Sarmiento ",
      "Edad": "44"
  },
  {
    "Nº": "38",
      "Corredor": "José Guerrero",
      "Edad": "40"
  },
  {
    "Nº": "39",
      "Corredor": "Juan Aranda ",
      "Edad": "47"
  },
  {
    "Nº": "40",
      "Corredor": "Javier Ocanto",
      "Edad": "41"
  },
  {
    "Nº": "41",
      "Corredor": "Osman Rivero",
      "Edad": "40"
  },
  {
    "Nº": "42",
      "Corredor": "Marleidy Asuaje",
      "Edad": "41"
  },
  {
    "Nº": "43",
      "Corredor": "Marvelis Hernandez",
      "Edad": "41"
  },
  {
    "Nº": "44",
      "Corredor": "Luz Andrade",
      "Edad": "46"
  },
  {
    "Nº": "45",
      "Corredor": "Dallana Vergara ",
      "Edad": "43"
  },
  {
    "Nº": "46",
      "Corredor": "Norelis Davila",
      "Edad": "48"
  },
  {
    "Nº": "47",
      "Corredor": "Virginia Mendez ",
      "Edad": "40"
  },
  {
    "Nº": "48",
      "Corredor": "Leonarda Moreno",
      "Edad": "45"
  },
  {
    "Nº": "49",
      "Corredor": "Rafael Araujo ",
      "Edad": "57"
  },
  {
    "Nº": "50",
      "Corredor": "Jesus Ocanto ",
      "Edad": "51"
  },
  {
    "Nº": "51",
      "Corredor": "Jorge Fernandez ",
      "Edad": "50"
  },
  {
    "Nº": "52",
      "Corredor": "Lorenzo Medina ",
      "Edad": "59"
  },
  {
    "Nº": "53",
      "Corredor": "Jose Becerra ",
      "Edad": "55"
  },
  {
    "Nº": "54",
      "Corredor": "Carmen Busto ",
      "Edad": "53"
  },
  {
    "Nº": "55",
      "Corredor": "Maria Ocanto",
      "Edad": "53"
  },
    {
    "Nº": "56",
      "Corredor": "Maria Ocanto",
      "Edad": "53"
  }
]

function cargarDatos() {
    corredoresData.forEach(corredor => {
        let nuevaFila = document.createElement("tr");

        // Create and append Number cell
        let celdaNumero = document.createElement("td");
        celdaNumero.textContent = corredor.Nº;
        nuevaFila.appendChild(celdaNumero);

        // Create and append Runner Name cell
        let celdaNombre = document.createElement("td");
        celdaNombre.textContent = corredor.Corredor;
        nuevaFila.appendChild(celdaNombre);

        // Create and append Age cell
        let celdaEdad = document.createElement("td");
        celdaEdad.textContent = corredor.Edad;
        nuevaFila.appendChild(celdaEdad);

        // Calculate and assign category based on age
        let edad = parseInt(corredor.Edad);
        let categoria;
        if (edad >= 15 && edad <= 18) {
            categoria = "Juvenil";
        } else if (edad >= 19 && edad <= 29) {
            categoria = "Libre";
        } else if (edad >= 30 && edad <= 39) {
            if (corredor["Nº"] === "7") {
                categoria = "(N)"; 
            } else {
                categoria = "Sub Master";
            }
        } else if (edad >= 40 && edad <= 49) {
            categoria = "Master A";
        } else if (edad >= 50 && edad <= 59) {
            categoria = "Master B";
        } else if (edad >= 60) {
            categoria = "Master C";
        }

        // Create and append Category cell with the calculated 'categoria'
        let celdaCategoria = document.createElement("td");
        celdaCategoria.textContent = categoria;
        nuevaFila.appendChild(celdaCategoria);

    // Celda para Hora Salida
    let celdaHoraSalida = document.createElement("td");
    let inputHoraSalida = document.createElement("input");
    inputHoraSalida.type = "time";
    inputHoraSalida.id = "horaSalida_" + corredor.Corredor; // ID único
    celdaHoraSalida.appendChild(inputHoraSalida);
    nuevaFila.appendChild(celdaHoraSalida);

    // Celda para Hora Llegada
    let celdaHoraLlegada = document.createElement("td");
    let inputHoraLlegada = document.createElement("input");
    inputHoraLlegada.type = "time";
    inputHoraLlegada.id = "horaLlegada_" + corredor.Corredor; // ID único
    celdaHoraLlegada.appendChild(inputHoraLlegada);
    nuevaFila.appendChild(celdaHoraLlegada);

    // Celda para Tiempo Total (inicialmente vacía)
    let celdaTiempoTotal = document.createElement("td");
    nuevaFila.appendChild(celdaTiempoTotal);

    // Crear boton para Limpiar los Tiempos
    let celdaLimpiar = document.createElement("td");
    let botonLimpiar = document.createElement("button");
    botonLimpiar.textContent = "Limpiar Tiempos";
    botonLimpiar.addEventListener("click", () => {
        inputHoraSalida.value = "";
        inputHoraLlegada.value = "";
        celdaTiempoTotal.textContent = "";

        localStorage.removeItem(`horaSalida_${corredor.Corredor}`);
        localStorage.removeItem(`horaLlegada_${corredor.Corredor}`);
        localStorage.removeItem(`tiempoTotal_${corredor.Corredor}`);
    });
    celdaLimpiar.appendChild(botonLimpiar);
    nuevaFila.appendChild(celdaLimpiar);

    let savedHoraSalida = localStorage.getItem(`horaSalida_${corredor.Corredor}`);
    let savedHoraLlegada = localStorage.getItem(`horaLlegada_${corredor.Corredor}`);
    let savedTiempoTotal = localStorage.getItem(`tiempoTotal_${corredor.Corredor}`);

    if (savedHoraSalida) {
      inputHoraSalida.value = savedHoraSalida;
    }

    if (savedHoraLlegada) {
      inputHoraLlegada.value = savedHoraLlegada;
    }

    if(savedTiempoTotal) {
      celdaTiempoTotal.textContent = savedTiempoTotal;
    }

    document.getElementById("tablaCorredores").appendChild(nuevaFila);

    // Add event listeners for calculating total time
    inputHoraSalida.addEventListener('change', () => {
      calcularTiempoTotal(corredor.Corredor);
      localStorage.setItem(`horaSalida_${corredor.Corredor}`, inputHoraSalida.value);
      console.log(`Hora de salida de ${corredor.Corredor} actualizada`)
    });

    inputHoraLlegada.addEventListener('change', () => {
      calcularTiempoTotal(corredor.Corredor);
      localStorage.setItem(`horaLlegada_${corredor.Corredor}`, inputHoraLlegada.value);
      console.log(`Hora de llegada de ${corredor.Corredor} actualizada`)
    });
  });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', () => {
  cargarDatos();
});