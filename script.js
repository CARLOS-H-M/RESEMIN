document.getElementById('accessForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const area = document.getElementById('area').value;
    const clave = document.getElementById('clave').value;

    // Aquí puedes agregar la lógica para validar la clave
    // Por ejemplo, supongamos que la clave correcta es "1234"
    if (clave === "1234") {
        const enlaceContainer = document.getElementById('enlaceContainer');
        const enlaceAcceso = document.getElementById('enlaceAcceso');

        // Mostrar el enlace correspondiente al área seleccionada
        switch (area) {
            case 'area1':
                enlaceAcceso.href = 'https://www.ejemplo.com/area1';
                enlaceAcceso.textContent = 'Acceder al Área 1';
                break;
            case 'area2':
                enlaceAcceso.href = 'https://www.ejemplo.com/area2';
                enlaceAcceso.textContent = 'Acceder al Área 2';
                break;
            case 'area3':
                enlaceAcceso.href = 'https://www.ejemplo.com/area3';
                enlaceAcceso.textContent = 'Acceder al Área 3';
                break;
            default:
                alert('Área no válida');
                return;
        }

        enlaceContainer.style.display = 'block';
    } else {
        alert('Clave incorrecta. Inténtalo de nuevo.');
    }
});