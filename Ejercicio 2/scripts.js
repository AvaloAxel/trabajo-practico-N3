const palabras = [
    "manzana", "banana", "pera", "durazno", "frutilla", "mango", "naranja", "sandía",
    "melón", "uva", "kiwi", "piña", "cereza", "ciruela", "granada", "limón", "lima",
    "mandarina", "guayaba", "papaya", "maracuyá", "tamarindo", "higo", "arándano",
    "mora", "coco", "carambola", "lichi", "chirimoya", "níspero", "frambuesa", "ananá"
];

function filtrarPalabras() {
    const texto = document.getElementById("busqueda").value.trim().toLowerCase();
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (texto === "") {
        resultado.innerHTML = "<p class='error'>Por favor, ingrese un texto para filtrar.</p>";
        return;
    }

    const filtradas = palabras.filter(palabra => palabra.toLowerCase().includes(texto));

    if (filtradas.length === 0) {
        resultado.innerHTML = "<p>No se encontraron coincidencias.</p>";
    } else {
        const lista = document.createElement("ul");
        filtradas.forEach(p => {
            const item = document.createElement("li");
            item.textContent = p;
            lista.appendChild(item);
        });
        resultado.appendChild(lista);
    }
}
