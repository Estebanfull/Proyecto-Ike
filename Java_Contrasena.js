document.getElementById("resetForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
  
    // Simula el envío del formulario (puedes sustituirlo con tu lógica de envío de correo electrónico)
    // Aquí podrías agregar tu código para enviar el correo electrónico con el enlace de restablecimiento
  
    // Muestra el mensaje de éxito
    document.getElementById("message").style.display = "block";
  
    // Redirige a la página principal después de 3 segundos
    setTimeout(function() {
      window.location.href = "Inicio.html";
    }, 5000);
  });
  