function bienvenida() {
        let nombre = document.getElementById('validationCustom01').value;
        let apellido = document.getElementById('validationCustom02').value;
       document.querySelector('h1').innerHTML = `<b>Bienvenido ${nombre} ${apellido} a tu DEPORTSHOES</b>` 

       Swal.fire({
        title: 'Gracias por su registro',
        footer: '<a href="./carrito.html">Catalogo para tus pedidos</a>',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }

      })
   
   }