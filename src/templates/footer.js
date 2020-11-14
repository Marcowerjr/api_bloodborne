/*
Este código consiste en mostrar los integrantes del equipo y el grupo al cual pertenecemos en el Footer del sitio web.
*/
const Footer = () => {
    const view = `
        <div class="Footer-main">
            <div class="Footer-logo">
                <h1>Integrantes: </h1>
                <h1>Marcos Caballero Fernández</h1>
                <h1>Jaziel Giovani Alvarado Encino</h1>
            </div>
            <div class="Footer-nav">
                <h1>Grupo: TID41M </h1>
            </div>
        </div>
    `
    return view
}

export default Footer