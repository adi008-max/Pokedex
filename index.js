const url = `https://pokeapi.co/api/v2/pokemon/${pokemonname}`;

 const factpara = document.querySelector("#fact");
 const img = document.getElementById("pokemonimg");
 const btn = document.getElementById("btn")


const getpoke = async () => {
    console.log("getting data...");
     const pokemonname = document.getElementById("pokemonname").value.toLowerCase();
     const url = `https://pokeapi.co/api/v2/pokemon/${pokemonname}`;

    let response = await fetch(url);
    let data = await response.json();

    factpara.innerText = `
    Name: ${data.name}
    ID: ${data.id}
    Height: ${data.height}
    Weight: ${data.weight}
    Base Experience: ${data.base_experience}`;

    img.src = data.sprites.front_default;
    img.style.display = "block";
};

btn.addEventListener("click", getpoke);
