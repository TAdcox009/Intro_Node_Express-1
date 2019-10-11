// incineroar
var _condition = "pokemon"
var _pocketmonster = "incineroar"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    // console.log(img)
    selector = document.querySelector('#incineroar');
    pokeIMG = `<img src="${img.front_default}" id="incineroar">`;
    selector.innerHTML = pokeIMG;
}
    );