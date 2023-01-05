
const suedad = (numero) => {

       let marcaIn = document.getElementById('validationCustom10').value;
       let modeloIn = document.getElementById('validationCustom11').value;
       let precioIn = parseInt(document.getElementById('validationCustom13').value);   
       let cantidadIn = parseInt(document.getElementById('validationCustom12').value);
        
          class Zapatilla{
            constructor(marca, modelo, precio, cantidad) {
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
            this.cantidad = cantidad;
        }
        }
        
        let zapatilla1 = new Zapatilla(marcaIn, modeloIn, precioIn, cantidadIn);
        
        const lista = document.getElementById('lista')
        
        const arrayitem = ["Su selección fue: Zapatilla modelo " + zapatilla1.marca + "", "Zapatilla de Marca:  " + zapatilla1.modelo + "" ," Zapatilla con precio S/.: " + zapatilla1.precio];

        const fragment = document.createDocumentFragment()

        arrayitem.forEach(item => {
            const li = document.createElement('li')
            li.textContent = item
            fragment.appendChild(li)
        })
        lista.appendChild(fragment)

    if (edad>=18) {
   let deporte = document.getElementById('inputdeporte').value;
    while (deporte != null){
          switch (deporte) {
            case "Tennis":
            alert("Tenemos las zapatillas para las partidas dobles");
            break;
            case "Basquet":
                alert("Nuestra galerias tienes zapatillas para sus canastas");
            break;
            case "Futbol":
                alert("Con la variedad de modelos disfrutaras tus goles");
                break;
            default:
                alert("Disculpa aun no tenemos productos");
                 break;
            }break;
        }
stop;
} else {
    alert ("Entiendo que menor de edad, o hubo un error...");
}}


let edad = parseInt (prompt ("Cual es tu edad:"));


 