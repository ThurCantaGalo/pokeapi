document.addEventListener("DOMContentLoaded", function(){
  const input = document.getElementById("inputPokemon");
  const btn = document.getElementById("btnBuscar");

  btn.addEventListener("click", function(){
  const pokemon = input.value;
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    fetch(url)
      .then(response => {
           if(!response.ok){
               throw new Error("Erro ao realizar API: "+response.status);
           }
           return response.json()
      })
         .then(data =>{
            console.log(data);

            const visor = document.getElementById("visor");
            visor.innerHTML = "";

            const divNome = document.createElement("div");
            divNome.classList.add("container-nome");
            divNome.innerHTML = `<p>${data.name}</p>`;

            visor.appendChild(divNome);

            const divImg = document.createElement("div");
            
            divImg.classList.add("container-imagem");
            divImg.innerHTML = `
             <img src="${data.sprites.other.showdown.front_default}">
            <img src="${data.sprites.other.showdown.front_shiny}">`;
            visor.appendChild(divImg);

            const divAlt = document.createElement("div");
            divAlt.classList.add("container-altura");
            divAlt.innerHTML = `<p>Altura: ${data.height*10}cm</p>`;
            visor.appendChild(divAlt);

            const divPes = document.createElement("div");
            divPes.classList.add("container-peso");
            divPes.innerHTML = `<p>Peso: ${data.weight/10}kg</p>`;
            visor.appendChild(divPes);
         })

      .catch(error =>{
         console.log("Erro ao utilizar API: ",error)
      })
  })


})