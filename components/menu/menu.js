const nombres = ["skills", "proyectos", "sobre-mi"]; // Nombres de las secciones

// Crear el elemento header
let barra_header = document.createElement("header");
barra_header.className = "menu";

// Crear botones para cada sección
nombres.forEach((nombre) => {
    let btn = document.createElement("button");
    btn.className = "botones";
    btn.textContent = nombre;

    // Agregar evento de clic para desplazarse a la sección correspondiente
    btn.addEventListener("click", () => {
        let seccion = document.getElementById(nombre);
        if (seccion) {
            seccion.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave
        } else {
            console.warn(`No se encontró la sección con ID: ${nombre}`);
        }
    });

    // Agregar el botón al header
    barra_header.appendChild(btn);
});

// Exportar el header
export { barra_header };