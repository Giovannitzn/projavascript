    
    const suedad = (numero) => {
        let edad = parsefloat (document.getElementById('miedad').value);
    //    if (edad!= null){
           if (edad>=18) {

                let deporte = document.getElementById('inputdeporte').value;
                while (deporte != null){
                    switch (deporte) {
                        case "Tennis":
                            alert("Tenemos las zapatillas para las partidas dobles");
                        break;
                        case "Basquet":
                            alert("Le ofrecemos zapatillas para sus multiples canastas");
                        break;
                        case "Futbol":
                            alert("Tenemos modelos para que disfrutaras tus goles");
                            break;
                        default:
                            alert("Disculpa aun no tenemos productos");
                            break;
                        }
                    }

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
            const lista1 = document.getElementById('lista1')
            const arrayitem = ["Su selección fue: Zapatilla modelo " + zapatilla1.marca + "", "Zapatilla de Marca:  " + zapatilla1.modelo + "" ," Zapatilla con precio S/.: " + zapatilla1.precio];
            const fragment = document.createDocumentFragment()
        
            arrayitem.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item
                fragment.appendChild(li)
            })

            lista1.appendChild(fragment)
            
   } else {
    //alert ("Entiendo que menor de edad, o hubo un error...");
    //document.querySelector('h2').innerHTML = `eres menor de edad, Gracias por tu visita.` 
    document.querySelector('h2').innerHTML = `Usted tiene ${edad} años es menor de edad, Gracias por tu visita.` 
}}


//let edad = document.getElementById('miedad').value;
//document.querySelector('h2').innerHTML = `${edad} eres menor de edad, Gracias por tu visita.` 
suedad(edad);

alert("Gracias por visitarnos, espero vuelvas pronto");





 