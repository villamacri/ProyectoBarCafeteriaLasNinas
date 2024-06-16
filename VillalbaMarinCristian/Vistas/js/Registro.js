// Selecciona el formulario de registro
let formRegistro = document.querySelector('form');

// Agrega un evento de escucha para el envío del formulario
formRegistro.addEventListener('submit', function(event) {
    // Evita que el formulario se envíe automáticamente
    event.preventDefault();

    // Obtiene los valores de los campos del formulario usando let
    let nombre = document.getElementById('nombre').value.trim();
    let apellido = document.getElementById('apellido').value.trim();
    let email = document.getElementById('email').value.trim();
    let contrasena = document.getElementById('contrasena').value.trim();
    let fechaNacimiento = document.getElementById('fechaNacimiento').value.trim();
    let direccion = document.getElementById('direccion').value.trim();
    let pais = document.getElementById('pais').value.trim();

    // Validación básica: verifica que todos los campos obligatorios estén llenos
    if (nombre === '' || apellido === '' || email === '' || contrasena === '' || fechaNacimiento === '' || direccion === '' || pais === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Si todos los campos están llenos, podrías proceder con el envío del formulario
    // Aquí podrías enviar los datos del formulario a través de AJAX o realizar otras acciones necesarias
    console.log('Formulario válido. Datos a enviar:', { nombre, apellido, email, contrasena, fechaNacimiento, direccion, pais });

    // Ejemplo: redirigir a una página de confirmación o enviar datos a un servidor
    // formRegistro.submit();  // Envío del formulario
});
// Copiar automáticamente la dirección de correo electrónico al portapapeles
let correoIcono = document.querySelector('.bi-envelope-fill');
let correoTexto = 'cafebarnñs@gmail.com';

correoIcono.addEventListener('click', function() {
    navigator.clipboard.writeText(correoTexto)
        .then(() => alert('Dirección de correo copiada: ' + correoTexto))
        .catch(err => console.error('Error al copiar correo: ', err));
});
