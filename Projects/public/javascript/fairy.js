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

        // mr-mime
  var _condition = "pokemon"
  var _pocketmonster = "mr-mime"
  
  fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
  .then( res => res.json())
  .then(data => {
      console.log(data.sprites)
      const {...img} = data.sprites;
      // console.log(img)
      selector = document.querySelector('#mr-mime');
      pokeIMG = `<img src="${img.front_default}" id="mr-mime">`;
      selector.innerHTML = pokeIMG;
  }
      );

      // wigglytuff
  var _condition = "pokemon"
  var _pocketmonster = "wigglytuff"
  
  fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
  .then( res => res.json())
  .then(data => {
      console.log(data.sprites)
      const {...img} = data.sprites;
      // console.log(img)
      selector = document.querySelector('#wigglytuff');
      pokeIMG = `<img src="${img.front_default}" id="wigglytuff">`;
      selector.innerHTML = pokeIMG;
  }
      );

            // clefairy
  var _condition = "pokemon"
  var _pocketmonster = "clefairy"
  
  fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
  .then( res => res.json())
  .then(data => {
      console.log(data.sprites)
      const {...img} = data.sprites;
      // console.log(img)
      selector = document.querySelector('#clefairy');
      pokeIMG = `<img src="${img.front_default}" id="clefairy">`;
      selector.innerHTML = pokeIMG;
  }
      );

            // clefable
  var _condition = "pokemon"
  var _pocketmonster = "clefable"
  
  fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
  .then( res => res.json())
  .then(data => {
      console.log(data.sprites)
      const {...img} = data.sprites;
      // console.log(img)
      selector = document.querySelector('#clefable');
      pokeIMG = `<img src="${img.front_default}" id="clefable">`;
      selector.innerHTML = pokeIMG;
  }
      );