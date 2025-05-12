function Actualiza() {
    // Obtener la hora actual
    var now = new Date();

    // Zonas horarias
    var newYorkTime = new Date(now.getTime()- 4 * 3600 * 1000);
    var londonTime = new Date(now.getTime()- 6 * 3600 * 1000);
    var tokyoTime = new Date(now.getTime()- 15 * 3600 * 1000);

    // Formatear la hora en formato legible
    var options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    };

    // Mostrar la hora en cada reloj
    document.getElementById("New-York-time").textContent = newYorkTime.toLocaleTimeString('en-US', options);
    document.getElementById("londres-time").textContent = londonTime.toLocaleTimeString('en-GB', options);
    document.getElementById("tokyo-time").textContent = tokyoTime.toLocaleTimeString('en-JP', options);
}

// Actualizar los relojes cada segundo
setInterval(Actualiza, 1000);

// Actualizar los relojes cuando la página se carga por primera vez
Actualiza();
