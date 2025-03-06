document.getElementById('accessForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const area = document.getElementById('area').value;
    const clave = document.getElementById('clave').value;

    // Definimos las claves válidas para cada área
    const clavesValidas = {
        fabricacion: "fab123", // Clave para Fabricación
        control: "ctrl456",    // Clave para Control Estructural
        servicio: "serv789"    // Clave para Servicio
    };

    // Definimos los enlaces para cada área
    const enlaces = {
        fabricacion: "https://www.ejemplo.com/fabricacion",
        control: "https://www.ejemplo.com/control-estructural",
        servicio: "https://www.ejemplo.com/servicio"
    };

    // Validamos la clave
    if (clave === clavesValidas[area]) {
        const enlaceContainer = document.getElementById('enlaceContainer');
        const enlaceAcceso = document.getElementById('enlaceAcceso');

        // Mostrar el enlace correspondiente al área seleccionada
        enlaceAcceso.href = enlaces[area];
        enlaceAcceso.textContent = `Acceder al Área de ${area.charAt(0).toUpperCase() + area.slice(1)}`;
        enlaceContainer.style.display = 'block';
    } else {
        alert('Clave incorrecta. Inténtalo de nuevo.');
    }
});