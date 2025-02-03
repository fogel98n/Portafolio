import { barra_header } from "./components/menu/menu.js"
import { content } from "./components/skills/skills.js"
import { contenedor_proyectos } from "./components/proyectos/proyectos.js"
import { footer } from "./components/informacion/informacion.js"
let DOM =document.querySelector("#root")

let contenedor=document.createElement("div")
contenedor.className="contenedor"
contenedor.appendChild(barra_header)
contenedor.appendChild(content)
contenedor.appendChild(contenedor_proyectos)
contenedor.appendChild(footer)


DOM.appendChild(contenedor)