const contenedor = document.getElementById("lista-pokemon");

async function cargarPokemon() {

    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025");
    const datos = await respuesta.json();

    for (let i = 0; i < 1025; i++) {

        const tarjeta = document.createElement("div");

        const imagen = document.createElement("img");
        imagen.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`;

        const nombre = document.createElement("h2");
        nombre.textContent = datos.results[i].name;

        const numero = document.createElement("p");
        numero.textContent = "No. " + (i + 1);

        const tipo = document.createElement("p");
        tipo.textContent = "Tipo: " + datos.results[i].type;

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(numero);
        tarjeta.appendChild(tipo);

        tarjeta.className = "tarjeta";
        contenedor.appendChild(tarjeta);
    }
}
cargarPokemon();