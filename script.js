document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuarioInput = document.getElementById('usuario').value;
    const passwordInput = document.getElementById('contrasena').value;
    const mensaje = document.getElementById('loginMensaje');

    const usuarioValido = "NissanGT";
    const passwordValida = "12345*";

    if (usuarioInput === usuarioValido && passwordInput === passwordValida) {
        mensaje.style.color = "green";
        mensaje.textContent = "¡Acceso concedido! Cargando catálogo...";

        setTimeout(function() {
            document.getElementById('login').style.display = 'none';
            const catalogo = document.getElementById('catalogo-section');
            catalogo.style.display = 'block';
            
            catalogo.scrollIntoView({ behavior: 'smooth' });
        }, 1000);

    } else {
        mensaje.style.color = "red";
        mensaje.textContent = "Usuario o contraseña incorrectos.";
    }
}); 