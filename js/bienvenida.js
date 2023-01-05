function bienvenida() {
        let nombre = document.getElementById('validationCustom01').value;
        let apellido = document.getElementById('validationCustom02').value;
       document.querySelector('h1').innerHTML = `<b>Bienvenido ${nombre} ${apellido} a tu DEPORTSHOES</b>` 

       Swal.fire(
        'Buen Trabajo!',
        'Puedes ingresar a la seccion de consultas',
        'success'
      )
   
   }