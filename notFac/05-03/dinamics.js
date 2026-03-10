let addButton = document.getElementById("agregador");

// por algun motivo recomienda definir dentro del eventListener
addButton.addEventListener("click", function() {
    let input = document.getElementById("campo");
    let cleanInput = input.value.trim();
    if (cleanInput !== "") {
        let lista = document.getElementById("lista");
        let tareaPorAgregar = document.createElement("li");
        tareaPorAgregar.textContent = cleanInput;
        // Agregar atributo data-estado
        tareaPorAgregar.setAttribute("data-estado", "pendiente");
        lista.appendChild(tareaPorAgregar);
        cantPendientes();
        input.value = "";
        
        // Botones de tareas
        let acceptB = document.createElement("button");
        acceptB.textContent = "✓";
        tareaPorAgregar.appendChild(acceptB);
        acceptB.addEventListener("click", function() {
            if (tareaPorAgregar.getAttribute("data-estado") === "pendiente") {
                tareaPorAgregar.style.color = "grey";
                tareaPorAgregar.style.textDecoration = "line-through";
                acceptB.textContent = "↺";
                
                notPendiente(tareaPorAgregar);
                cantPendientes();

            } 
            else {
                tareaPorAgregar.style.color = "";
                tareaPorAgregar.style.textDecoration = "";
                acceptB.textContent = "✓";

                esPendiente(tareaPorAgregar);
                cantPendientes();

            }

            
        });
        
        let deleteB = document.createElement("button");
        deleteB.textContent = "X";
        tareaPorAgregar.appendChild(deleteB);
        deleteB.addEventListener("click", function() {
            lista.removeChild(tareaPorAgregar);
            cantPendientes();
            
        });

        if (input.style.borderColor === "red") {
            input.style.borderColor = "";
        }
    }
    else {
        alert("No se puede agregar una tarea vacía");
        input.style.borderColor = "red";            
    }
});

let todas = document.getElementById("all");
todas.addEventListener("click", function() {
    mostrarTodas();
});

let pendientes = document.getElementById("pendientes");
pendientes.addEventListener("click", function() {
    filtrarPendientes();
});

let completados = document.getElementById("completas");
completados.addEventListener("click", function() {
    filtrarCompletados();
});



function notPendiente(tarea) {
    return tarea.setAttribute("data-estado", "completado");
}

function esPendiente(tarea) {
    return tarea.setAttribute("data-estado", "pendiente");
}

function cantPendientes() {
    const tareas = document.querySelectorAll('#lista li[data-estado="pendiente"]')
    let contador = tareas.length;
    let contadorDiv = document.getElementById("contador");
    contadorDiv.textContent = `${contador} tareas pendientes`;

// # busca etiqueta, li es los elementos de esa etiqueta, y [] elementos con ese atributo y valor

}
function filtrarPendientes() {
    const tareas = document.querySelectorAll('#lista li');
    tareas.forEach(tarea => {
        if (tarea.getAttribute("data-estado") === "pendiente") {
            tarea.style.display = "";
        }
        else {
            tarea.style.display = "none";
        }
    });
}
function filtrarCompletados() {
    const tareas = document.querySelectorAll('#lista li');
    tareas.forEach(tarea => {
        if (tarea.getAttribute("data-estado") === "completado") {
            tarea.style.display = "";   
        }
        else {
            tarea.style.display = "none";
        }
    });
}
function mostrarTodas() {
    const tareas = document.querySelectorAll('#lista li');
    tareas.forEach(tarea => {
        if (tarea.style.display === "none") {
            tarea.style.display = "";
        }
    });
}

