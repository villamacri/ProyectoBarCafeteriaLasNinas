document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío automático del formulario

    // Obtener valores de los campos
    let email = document.getElementById('email').value.trim();
    let contrasena = document.getElementById('contrasena').value.trim();

    // Validar campos
    if (email === '' || contrasena === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Validar el formato del correo electrónico usando una expresión regular
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('El formato del correo electrónico no es válido.');
        return;
    }

    // Realizar el inicio de sesión (aquí puedes enviar los datos al servidor o realizar una simulación)
    if (email === 'usuario@example.com' && contrasena === '123456') {
        alert('Inicio de sesión exitoso!');
        // Aquí podrías redirigir al usuario a otra página
        // window.location.href = 'dashboard.html';
    } else {
        alert('Correo electrónico o contraseña incorrectos.');
    }
});

let togglePassword = document.getElementById('togglePassword');
let passwordInput = document.getElementById('contrasena');

togglePassword.addEventListener('click', function() {
    let type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('bi-eye');
    this.classList.toggle('bi-eye-slash');
});

function mostrarMensaje(mensaje, esError = false) {
    let mensajeElement = document.createElement('div');
    mensajeElement.classList.add('alert', 'alert-' + (esError ? 'danger' : 'success'));
    mensajeElement.textContent = mensaje;

    let form = document.querySelector('form');
    form.insertAdjacentElement('beforebegin', mensajeElement);

    // Quitar el mensaje después de unos segundos
    setTimeout(function() {
        mensajeElement.remove();
    }, 3000); // 3000 milisegundos = 3 segundos
}

// Llamada de ejemplo para mostrar un mensaje de error
mostrarMensaje('Correo electrónico o contraseña incorrectos.', true);

function validarFormulario() {
    // Simular autenticación exitosa
    let email = document.getElementById('email').value;
    let contrasena = document.getElementById('contrasena').value;

    // Aquí deberías validar en un sistema real, pero por simplicidad vamos a simular que se autentica
    // Si el email y la contraseña coinciden, asumimos que el usuario ha iniciado sesión
    if (email === 'admin@example.com' && contrasena === 'admin123') {
      // Redirigir al administrador a la página de configuración
      window.location.href = 'Configuracion.html';
    } else {
      alert('Correo electrónico o contraseña incorrectos.');
    }

    // Prevenir el envío del formulario real para este ejemplo
    return false;
  }

