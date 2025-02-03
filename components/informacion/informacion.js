let footer = document.createElement("footer")
footer.className = "footer"
footer.id = "sobre-mi";

let sobreMi = document.createElement("div")
sobreMi.className = "sobre-mi"

let iconoPersona = document.createElementNS("http://www.w3.org/2000/svg", "svg");
iconoPersona.setAttribute("viewBox", "0 0 24 24")
iconoPersona.setAttribute("width", "48")
iconoPersona.setAttribute("height", "48")
iconoPersona.style.fill = "#0FD065"

let path = document.createElementNS("http://www.w3.org/2000/svg", "path")
path.setAttribute(
  "d",
  "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
)
iconoPersona.appendChild(path)

let titulo = document.createElement("h2")
titulo.textContent = "Sobre mí"

let descripcion_personal = document.createElement("div")
descripcion_personal.className = "descrip_personal"

let parrafo = document.createElement("p")
parrafo.className="l"
parrafo.innerHTML = `
    ¡Hola! 👋 Soy <span class="nombre">Fernando Josemaria Orellana Barrios</span>, estudiante de bachillerato en computacion en  Santa catalina labure, actualmente cursando el ultimo año de mi carrera.
    <br><br>
    Mi pasión se centra en el desarrollo web backend, donde disfruto aprendiendo y aplicando nuevas tecnologías. Estoy tratando de trabajar en proyectos académicos y personales.
    <br><br>
    Actualmente, estoy enfocado en seguir aprendiendo y creciendo profesionalmente, preparándome para los desafíos que me esperan en el mundo del desarrollo de software.
`
descripcion_personal.appendChild(parrafo)
sobreMi.appendChild(iconoPersona)
sobreMi.appendChild(titulo)
footer.appendChild(sobreMi)
footer.appendChild(descripcion_personal)

export { footer }
