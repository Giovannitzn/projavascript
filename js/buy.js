const cGrid = document.querySelector('.cGrid')
const tcarr = document.querySelector('.tcarr')
const btnc = document.querySelector('comprart')

try {
    fetch('prod.json')
.then(respuesta => {
    return respuesta.json() 
})
.then(datos => {
    let contador = 0;
    while (datos.length > contador) {

        let producto = document.createElement('div')

        let imagCont = document.createElement('div')
        let img = document.createElement('img')

        let conte = document.createElement('div')

        let titulo = document.createElement('h2')
        let precio = document.createElement('p')

        let adicar = document.createElement('button')

        producto.setAttribute('class', 'product')

        imagCont.setAttribute('class', 'imagCont')
        img.setAttribute('src', datos[contador].image)
        img.setAttribute('alt', 'Imagen 1')

        conte.setAttribute('class', 'conte')

        titulo.setAttribute('class', 'titulo')
        precio.setAttribute('class', 'precio')

        titulo.innerHTML = datos[contador].nombre
        precio.innerHTML = datos[contador].precio + "$"

        adicar.setAttribute('class', 'btnadicar')
        adicar.setAttribute('value', contador)
        adicar.innerHTML = 'Añadir Carrito'

        producto.appendChild(imagCont)
        imagCont.appendChild(img)
        producto.appendChild(conte)
        conte.appendChild(titulo)
        conte.appendChild(precio)
        conte.appendChild(adicar)

        cGrid.appendChild(producto)

        adicar.addEventListener('click', (e) =>{
            e.preventDefault()

            const tr = document.createElement('tr')
            const tdma = document.createElement('td')
            const tdpre = document.createElement('td')

            tdma.setAttribute('class', 'obtjst')
            tr.setAttribute('class', 'trjs')

            tdma.innerHTML = datos[adicar.value].nombre
            tdpre.innerHTML = datos[adicar.value].precio

            const tdGen = document.querySelectorAll('.obtjst')
            if (tdGen.length == 0) {
                tr.appendChild(tdma)
                tr.appendChild(tdpre)           
                tcarr.appendChild(tr)

            } else {
            tdGen.forEach((elem, i) => {
                console.log(elem);
                if(elem.innerHTML == datos[adicar.value].nombre) {
                alert('El producto seleccionado ya fue agregado')
                tr.removeChild(tdma)
                tr.removeChild(tdpre)
                tcarr.removeChild(tr)
            } else {
                tr.appendChild(tdma)
                tr.appendChild(tdpre)           
                tcarr.appendChild(tr)
                }
            })
        }
    });

        contador++;
    }
})
} catch (e) {
    console.log(e);
}

btnc.addEventListener('click', (e) => {
    const trjs = document.querySelectorAll('.trjs')

    if (trjs.length == 0) {
        alert('No hay productos para comprar')
    } else{
        trjs.forEach(elem => {
            elem.outerHTML=''
        })
        alert('Compra exitosa')
    } 
})