
let content = document.createElement("section")
content.className = "contenedor_info"
content.id = "skills"


let contenedor = document.createElement("div")
contenedor.className = "contenedor_texto"

let titulo = document.createElement("h1")
titulo.className = "titulo"
titulo.innerText = "Hola soy "

let titulo1 = document.createElement("h1")
titulo1.className = "titulo1"
titulo1.innerText = "Fogel"


let span = document.createElement("p")
span.className = "des"
span.innerText = "Estudiante de  computación"


let p = document.createElement("p")
p.className = "parrafo"
p.innerText = "Me apasiona el desarrollo web, enfocado en crear sistemas minimalistas y eficientes, y siempre actualizado con las últimas tecnologías para adaptarme y contribuir eficazmente en cualquier equipo."


let span1 = document.createElement("span")
span1.className = "skills"
span1.innerText = "Skills"


let contenedorIconos = document.createElement("div")
contenedorIconos.className = "contenedor_iconos"


const iconos = [
    "git", "css", "discord", "figma", "github", "html",
    "idea", "js", "linux", "arch", "vscode", "bash", "docker", "java", "py"
]

iconos.forEach((icono) => {
    const img = document.createElement("img")
    img.src = `https://skillicons.dev/icons?i=${icono}`
    img.alt = icono
    img.className = "icono"
    contenedorIconos.appendChild(img)
})

let botonGit = document.createElement("button")
botonGit.className = "boton-git"

let iconoGit = document.createElement("img")
iconoGit.src = "https://skillicons.dev/icons?i=github"; 
iconoGit.alt = "github"
iconoGit.className = "icono-git"

let textoGit = document.createElement("span")
textoGit.innerText = "Git"
textoGit.className = "texto-git"

botonGit.appendChild(iconoGit)
botonGit.appendChild(textoGit)


botonGit.addEventListener("click", () => {
    window.open("https://github.com/fogel98n", "_blank")
})

let botonIg = document.createElement("button")
botonIg.className = "boton-ig"

let iconoIg = document.createElement("img")
iconoIg.src = "https://skillicons.dev/icons?i=instagram" 
iconoIg.alt = "instagram"
iconoIg.className = "icono-ig"

let textoIg = document.createElement("span")
textoIg.innerText = "Instagram"
textoIg.className = "texto-ig"

botonIg.appendChild(iconoIg)
botonIg.appendChild(textoIg)

botonIg.addEventListener("click", () => {
    window.open("https://www.instagram.com/fogel__tt/?next=%2F", "_blank")
})

let botonGmail = document.createElement("button")
botonGmail.className = "boton-gmail"
let iconoGmail = document.createElementNS("http://www.w3.org/2000/svg", "svg")

iconoGmail.setAttribute("xmlns", "http://www.w3.org/2000/svg")

iconoGmail.setAttribute("viewBox", "0 0 48 48")
iconoGmail.setAttribute("width", "24")
iconoGmail.setAttribute("height", "24")

iconoGmail.innerHTML = `

    <path fill="#EA4335" d="M45 16.2l-20 13.3-20-13.3V8h40v8.2zM45 20v18H3V20l20 13.3L45 20z"/>

`

let textoGmail = document.createElement("span")
textoGmail.innerText = " Email"
textoGmail.className = "texto-gmail"

botonGmail.appendChild(iconoGmail)
botonGmail.appendChild(textoGmail)
botonGmail.addEventListener("click", () => {
    window.open("mailto:forellanabarrios@gmail.com?subject=Asunto%20del%20correo&body=Mensaje%20aquí", "_self")
})

let titulo_proyecto=document.createElement("h1")
titulo_proyecto.className="titulo_proyectos"
titulo_proyecto.innerText="proyectos destacados"


contenedor.appendChild(titulo)
contenedor.appendChild(titulo1)


content.appendChild(span)
content.appendChild(p)
content.appendChild(span1)
content.appendChild(contenedor)
content.appendChild(contenedorIconos)
content.appendChild(botonGit)
content.appendChild(botonIg)
content.appendChild(botonGmail)
content.appendChild(titulo_proyecto)
export { content }