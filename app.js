const formulario = document.querySelector(".from-create");
let contador = 1;
formulario.addEventListener("submit", (e)=> {
    e.preventDefault();
    const descripcion = document.querySelector("#descripcion").value;
    const contenedor = document.querySelector(".publicaciones");
    contenedor.innerHTML += `<div id="${contador}" class="publicacion">
        <p>id: ${contador}</p>
        <p>${descripcion}</p>
        <button id="editar" onclick="editar(this)">Editar</button>
        <button id="eliminar" onclick="eliminar(this)">Eliminar</button>
        </div>`
    ++contador;
});


function editar(e) {
    const parrafo = e.parentElement.querySelector("p:nth-child(2)");
    if(e.textContent === "Editar") {
        parrafo.contentEditable = true;
        e.textContent = "Guardar";
        parrafo.focus();
    }
    else{
        e.textContent = "Editar";
        parrafo.contentEditable = false;
    }
}

function eliminar(e) {
    e.parentElement.remove();
}