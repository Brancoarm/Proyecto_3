const formulario = document.getElementById('registrationForm');

formulario.addEventListener('submit', async(e) => {
    e.preventDefault();

    try {    
        const respuesta = await fetch('https://sheet.best/api/sheets/57a5e49e-1325-4c40-a4f1-79e68e9d5e92', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Nombres": formulario.nombres.value,
                "Apellidos": formulario.apellidos.value,
                "RUT": formulario.rut.value,
                "País": formulario.pais.value,
                "Región": formulario.region.value,
                "Comuna": formulario.comuna.value,
                "Calle": formulario.calle.value,
                "Numeración": formulario.numeracion.value,
                "Email": formulario.email.value,
                "Teléfono": formulario.telefono.value,
            })
        });

        if (!respuesta.ok) {
            throw new Error('Error en la solicitud: ' + respuesta.statusText);
        }

        const data = await respuesta.json();
        console.log('Datos registrados con éxito:', data);
        alert('Datos registrados con éxito!');
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error al registrar sus datos. Por favor, inténtelo de nuevo.');
    }
});
