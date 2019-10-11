  // jigglypuff
  var _condition = "pokemon"
  var _pocketmonster = "jigglypuff"
  
  fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
  .then( res => res.json())
  .then(data => {
      console.log(data.sprites)
      const {...img} = data.sprites;
      // console.log(img)
      selector = document.querySelector('#jigglypuff');
      pokeIMG = `<img src="${img.front_default}" id="jigglypuff">`;
      selector.innerHTML = pokeIMG;
  }
      );