document.getElementById('searchButton').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput) {
        alert('Buscando: ' + searchInput);
    } else {
        alert('Por favor ingresa un término de búsqueda.');
    }
});

// Evento para la lupa, al hacer clic se enfoca el input
document.getElementById('lupa').addEventListener('click', function() {
    document.getElementById('searchInput').focus();
});
