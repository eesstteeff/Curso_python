const formulario = document.querySelector('.form-contacto');
const registro = document.querySelector('.registro');
const exito = document.querySelector('.exito');

//escucho cuando se submitea el formulario de contacto
formulario.addEventListener('submit', async(e) => {
  e.preventDefault();

try {
 const respuesta = await fetch('https://sheet.best/api/sheets/81961415-a1e3-47ff-92e6-d5b8f65afdb8', {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "nombres": formulario.nombres.value,
      "apellidos": formulario.apellidos.value,
      "email": formulario.email.value,
      "comentario": formulario.comentario.value,
      "suscripcion": formulario.suscripcion.value
    })
  });

  const contenido = await respuesta.json();
} catch(error){
  console.log(error)
}

  registro.classList.remove('activo');
  exito.classList.add('activo');

  setTimeout(function() {
    registro.classList.add('activo');
    exito.classList.remove('activo');
    document.querySelector('.form-contacto').reset()
  }, 3000);
})

