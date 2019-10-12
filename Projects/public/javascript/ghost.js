  // gastly
  var _condition = "pokemon"
  var _pocketmonster = "gastly"
  
  fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
  .then( res => res.json())
  .then(data => {
      console.log(data.sprites)
      const {...img} = data.sprites;
      // console.log(img)
      selector = document.querySelector('#gastly');
      pokeIMG = `<img src="${img.front_default}" id="gastly">`;
      selector.innerHTML = pokeIMG;
  }
      );

       // haunter
  var _condition = "pokemon"
  var _pocketmonster = "haunter"
  
  fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
  .then( res => res.json())
  .then(data => {
      console.log(data.sprites)
      const {...img} = data.sprites;
      // console.log(img)
      selector = document.querySelector('#haunter');
      pokeIMG = `<img src="${img.front_default}" id="haunter">`;
      selector.innerHTML = pokeIMG;
  }
      );

       // gengar
  var _condition = "pokemon"
  var _pocketmonster = "gengar"
  
  fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
  .then( res => res.json())
  .then(data => {
      console.log(data.sprites)
      const {...img} = data.sprites;
      // console.log(img)
      selector = document.querySelector('#gengar');
      pokeIMG = `<img src="${img.front_default}" id="gengar">`;
      selector.innerHTML = pokeIMG;
  }
      );