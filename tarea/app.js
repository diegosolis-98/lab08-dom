class Alumno {
    constructor(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }

    mostrarAlumno() {
        const contenedor = document.createElement("div");

        const informacion = document.createElement("p");
        informacion.textContent = `Nombre: ${this.nombre} | Nota: ${this.nota}`;

        // Botón modificar
        const btnModificar = document.createElement("button");
        btnModificar.textContent = "Modificar";

        // Botón eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";

        // Evento para modificar
        btnModificar.addEventListener("click", () => {
            const nuevoNombre = prompt("Ingrese el nuevo nombre:", this.nombre);
            const nuevaNota = prompt("Ingrese la nueva nota:", this.nota);

            if (nuevoNombre !== null && nuevoNombre.trim() !== "" &&
                nuevaNota !== null && nuevaNota.trim() !== "" &&
                !isNaN(nuevaNota) && Number(nuevaNota) >= 0 &&
                Number(nuevaNota) <= 20) {

                this.nombre = nuevoNombre;
                this.nota = Number(nuevaNota);

                informacion.textContent =
                    `Nombre: ${this.nombre} | Nota: ${this.nota}`;
            } else {
                alert("Datos inválidos. No se realizaron cambios.");
            }
        });

        // Evento para eliminar
        btnEliminar.addEventListener("click", () => {
            contenedor.remove();
        });

        contenedor.appendChild(informacion);
        contenedor.appendChild(btnModificar);
        contenedor.appendChild(btnEliminar);

        return contenedor;
    }
}
// Obtener elementos del HTML
const formulario = document.getElementById("formAlumno");
const listaAlumnos = document.getElementById("listaAlumnos");

// Evento submit para registrar alumnos
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const nota = Number(document.getElementById("nota").value);

    // Crear objeto Alumno
    const alumno = new Alumno(nombre, nota);

    // Mostrar objeto en la página
    listaAlumnos.appendChild(alumno.mostrarAlumno());

    // Limpiar formulario
    formulario.reset();
});