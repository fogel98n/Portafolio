const nombres = ["skills", "proyectos", "sobre-mi"]

let barra_header = document.createElement("header")
barra_header.className = "menu"


nombres.forEach((nombre) => {
    let btn = document.createElement("button")
    btn.className = "botones"
    btn.textContent = nombre
    btn.addEventListener("click", () => {
        let seccion = document.getElementById(nombre)
        if (seccion) {
            seccion.scrollIntoView({ behavior: "smooth" })
        } else {
            console.warn(`No se encontró la sección con ID: ${nombre}`)
        }
    })


    barra_header.appendChild(btn)
})
export { barra_header }