document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario
        
        // Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const contrasena = document.getElementById('contrasena').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
        const direccion = document.getElementById('direccion').value;
        const pais = document.getElementById('pais').value;

        // Validaciones adicionales (ejemplo: longitud mínima de la contraseña)
        if (contrasena.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            return;
        }

        // Mostrar los datos en una alerta (solo como ejemplo)
        alert(`
            Nombre: ${nombre}
            Apellido: ${apellido}
            Email: ${email}
            Contraseña: ${contrasena}
            Fecha de Nacimiento: ${fechaNacimiento}
            Dirección: ${direccion}
            País: ${pais}
        `);
    });
});
