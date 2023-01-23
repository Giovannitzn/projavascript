function consulta () {

    let deporte = document.getElementById('inputdeporte').value;
    let marcaIn = document.getElementById('validationCustom10').value.toUpperCase();
    let modeloIn = document.getElementById('validationCustom11').value.toUpperCase();
    let precioIn = parseInt(document.getElementById('validationCustom13').value);   
    let cantidadIn = parseInt(document.getElementById('validationCustom12').value);
    
    document.querySelector('h2').innerHTML = `Tu deporte de interes ${deporte}` ;

        class Zapatilla2{
            constructor(marca, modelo, precio, cantidad) {
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
            this.cantidad = cantidad;
          }
        }

    let zapatilla1 = new Zapatilla2(marcaIn, modeloIn, precioIn, cantidadIn);

    const lista = document.getElementById('lista')

    const arrayitem = ["Seleccionaste Zapatilla marca " + zapatilla1.marca + "", "Modelo:  " + zapatilla1.modelo  + "" ," Zapatilla con precio: " + zapatilla1.precio];

    const fragment = document.createDocumentFragment()

    arrayitem.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item
        fragment.appendChild(li)
    })

    lista.appendChild(fragment)

}



consulta();

Swal.fire(
    'Muchas Gracias!',
    'Procesando',
    'success'
  )


        










 