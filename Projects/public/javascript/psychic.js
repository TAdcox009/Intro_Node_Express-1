var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// slowpoke
var _condition = "pokemon"
var _pocketmonster = "slowpoke"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#slowpoke');
    pokeIMG = `<img src="${img.front_default}" id="slowpoke">`;
    selector.innerHTML = pokeIMG;
}
    );

    // slowbro
var _condition = "pokemon"
var _pocketmonster = "slowbro"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#slowbro');
    pokeIMG = `<img src="${img.front_default}" id="slowbro">`;
    selector.innerHTML = pokeIMG;
}
    );

    // starmie
var _condition = "pokemon"
var _pocketmonster = "starmie"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#starmie');
    pokeIMG = `<img src="${img.front_default}" id="starmie">`;
    selector.innerHTML = pokeIMG;
}
    );

    // exeggcute
var _condition = "pokemon"
var _pocketmonster = "exeggcute"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#exeggcute');
    pokeIMG = `<img src="${img.front_default}" id="exeggcute">`;
    selector.innerHTML = pokeIMG;
}
    );

     // exeggutor
var _condition = "pokemon"
var _pocketmonster = "exeggutor"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#exeggutor');
    pokeIMG = `<img src="${img.front_default}" id="exeggutor">`;
    selector.innerHTML = pokeIMG;
}
    );

     // jynx
var _condition = "pokemon"
var _pocketmonster = "jynx"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#jynx');
    pokeIMG = `<img src="${img.front_default}" id="jynx">`;
    selector.innerHTML = pokeIMG;
}
    );

     // abra
var _condition = "pokemon"
var _pocketmonster = "abra"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#abra');
    pokeIMG = `<img src="${img.front_default}" id="abra">`;
    selector.innerHTML = pokeIMG;
}
    );

     // kadabra
var _condition = "pokemon"
var _pocketmonster = "kadabra"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#kadabra');
    pokeIMG = `<img src="${img.front_default}" id="kadabra">`;
    selector.innerHTML = pokeIMG;
}
    );

     // alakazam
var _condition = "pokemon"
var _pocketmonster = "alakazam"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#alakazam');
    pokeIMG = `<img src="${img.front_default}" id="alakazam">`;
    selector.innerHTML = pokeIMG;
}
    );

     // drowzee
var _condition = "pokemon"
var _pocketmonster = "drowzee"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#drowzee');
    pokeIMG = `<img src="${img.front_default}" id="drowzee">`;
    selector.innerHTML = pokeIMG;
}
    );

     // hypno
var _condition = "pokemon"
var _pocketmonster = "hypno"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#hypno');
    pokeIMG = `<img src="${img.front_default}" id="hypno">`;
    selector.innerHTML = pokeIMG;
}
    );

     // mewtwo
var _condition = "pokemon"
var _pocketmonster = "mewtwo"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#mewtwo');
    pokeIMG = `<img src="${img.front_default}" id="mewtwo">`;
    selector.innerHTML = pokeIMG;
}
    );

    // mew
var _condition = "pokemon"
var _pocketmonster = "mew"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#mew');
    pokeIMG = `<img src="${img.front_default}" id="mew">`;
    selector.innerHTML = pokeIMG;
}
    );

      // uxie
var _condition = "pokemon"
var _pocketmonster = "uxie"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#uxie');
    pokeIMG = `<img src="${img.front_default}" id="uxie">`;
    selector.innerHTML = pokeIMG;
}
    );

      // unown
var _condition = "pokemon"
var _pocketmonster = "unown"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#unown');
    pokeIMG = `<img src="${img.front_default}" id="unown">`;
    selector.innerHTML = pokeIMG;
}
    );

      // azelf
var _condition = "pokemon"
var _pocketmonster = "azelf"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#azelf');
    pokeIMG = `<img src="${img.front_default}" id="azelf">`;
    selector.innerHTML = pokeIMG;
}
    );

    // lunala2
var _condition = "pokemon"
var _pocketmonster = "lunala"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#lunala2');
    pokeIMG = `<img src="${img.front_default}" id="lunala2">`;
    selector.innerHTML = pokeIMG;
}
    );

     // marshadow
var _condition = "pokemon"
var _pocketmonster = "marshadow"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#marshadow');
    pokeIMG = `<img src="${img.front_default}" id="marshadow">`;
    selector.innerHTML = pokeIMG;
}
    );

     // natu
var _condition = "pokemon"
var _pocketmonster = "natu"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#natu');
    pokeIMG = `<img src="${img.front_default}" id="natu">`;
    selector.innerHTML = pokeIMG;
}
    );

     // mr-mime2
var _condition = "pokemon"
var _pocketmonster = "mr-mime"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#mr-mime2');
    pokeIMG = `<img src="${img.front_default}" id="mr-mime2">`;
    selector.innerHTML = pokeIMG;
}
    );

     // xatu
var _condition = "pokemon"
var _pocketmonster = "xatu"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#xatu');
    pokeIMG = `<img src="${img.front_default}" id="xatu">`;
    selector.innerHTML = pokeIMG;
}
    );

     // espeon
var _condition = "pokemon"
var _pocketmonster = "espeon"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#espeon');
    pokeIMG = `<img src="${img.front_default}" id="espeon">`;
    selector.innerHTML = pokeIMG;
}
    );

     // slowking
var _condition = "pokemon"
var _pocketmonster = "slowking"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#slowking');
    pokeIMG = `<img src="${img.front_default}" id="slowking">`;
    selector.innerHTML = pokeIMG;
}
    );

     // wobbuffet
var _condition = "pokemon"
var _pocketmonster = "wobbuffet"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#wobbuffet');
    pokeIMG = `<img src="${img.front_default}" id="wobbuffet">`;
    selector.innerHTML = pokeIMG;
}
    );

     // girafarig
var _condition = "pokemon"
var _pocketmonster = "girafarig"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#girafarig');
    pokeIMG = `<img src="${img.front_default}" id="girafarig">`;
    selector.innerHTML = pokeIMG;
}
    );

     // smoochum
var _condition = "pokemon"
var _pocketmonster = "smoochum"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#smoochum');
    pokeIMG = `<img src="${img.front_default}" id="smoochum">`;
    selector.innerHTML = pokeIMG;
}
    );

     // lugia
var _condition = "pokemon"
var _pocketmonster = "lugia"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#lugia');
    pokeIMG = `<img src="${img.front_default}" id="lugia">`;
    selector.innerHTML = pokeIMG;
}
    );

     // celebi
var _condition = "pokemon"
var _pocketmonster = "celebi"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#celebi');
    pokeIMG = `<img src="${img.front_default}" id="celebi">`;
    selector.innerHTML = pokeIMG;
}
    );

     // meditite
var _condition = "pokemon"
var _pocketmonster = "meditite"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#meditite');
    pokeIMG = `<img src="${img.front_default}" id="meditite">`;
    selector.innerHTML = pokeIMG;
}
    );

     // ralts2
var _condition = "pokemon"
var _pocketmonster = "ralts"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#ralts2');
    pokeIMG = `<img src="${img.front_default}" id="ralts2">`;
    selector.innerHTML = pokeIMG;
}
    );

     // kirlia2
var _condition = "pokemon"
var _pocketmonster = "kirlia"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#kirlia2');
    pokeIMG = `<img src="${img.front_default}" id="kirlia2">`;
    selector.innerHTML = pokeIMG;
}
    );

     // gardevoir2
var _condition = "pokemon"
var _pocketmonster = "gardevoir"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#gardevoir2');
    pokeIMG = `<img src="${img.front_default}" id="gardevoir2">`;
    selector.innerHTML = pokeIMG;
}
    );

     // medicham
var _condition = "pokemon"
var _pocketmonster = "medicham"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#medicham');
    pokeIMG = `<img src="${img.front_default}" id="medicham">`;
    selector.innerHTML = pokeIMG;
}
    );

     // spoink
var _condition = "pokemon"
var _pocketmonster = "spoink"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#spoink');
    pokeIMG = `<img src="${img.front_default}" id="spoink">`;
    selector.innerHTML = pokeIMG;
}
    );

     // grumpig
var _condition = "pokemon"
var _pocketmonster = "grumpig"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#grumpig');
    pokeIMG = `<img src="${img.front_default}" id="grumpig">`;
    selector.innerHTML = pokeIMG;
}
    );

     // lunatone
var _condition = "pokemon"
var _pocketmonster = "lunatone"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#lunatone');
    pokeIMG = `<img src="${img.front_default}" id="lunatone">`;
    selector.innerHTML = pokeIMG;
}
    );

     // solrock
var _condition = "pokemon"
var _pocketmonster = "solrock"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#solrock');
    pokeIMG = `<img src="${img.front_default}" id="solrock">`;
    selector.innerHTML = pokeIMG;
}
    );

     // baltoy
var _condition = "pokemon"
var _pocketmonster = "baltoy"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#baltoy');
    pokeIMG = `<img src="${img.front_default}" id="baltoy">`;
    selector.innerHTML = pokeIMG;
}
    );

     // claydol
var _condition = "pokemon"
var _pocketmonster = "claydol"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#claydol');
    pokeIMG = `<img src="${img.front_default}" id="claydol">`;
    selector.innerHTML = pokeIMG;
}
    );

     // chimecho
var _condition = "pokemon"
var _pocketmonster = "chimecho"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#chimecho');
    pokeIMG = `<img src="${img.front_default}" id="chimecho">`;
    selector.innerHTML = pokeIMG;
}
    );

     // wynaut
var _condition = "pokemon"
var _pocketmonster = "wynaut"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#wynaut');
    pokeIMG = `<img src="${img.front_default}" id="wynaut">`;
    selector.innerHTML = pokeIMG;
}
    );

     // beldum
var _condition = "pokemon"
var _pocketmonster = "beldum"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#beldum');
    pokeIMG = `<img src="${img.front_default}" id="beldum">`;
    selector.innerHTML = pokeIMG;
}
    );

     // metang
var _condition = "pokemon"
var _pocketmonster = "metang"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#metang');
    pokeIMG = `<img src="${img.front_default}" id="metang">`;
    selector.innerHTML = pokeIMG;
}
    );

     // metagross
var _condition = "pokemon"
var _pocketmonster = "metagross"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#metagross');
    pokeIMG = `<img src="${img.front_default}" id="metagross">`;
    selector.innerHTML = pokeIMG;
}
    );

     // latias
var _condition = "pokemon"
var _pocketmonster = "latias"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#latias');
    pokeIMG = `<img src="${img.front_default}" id="latias">`;
    selector.innerHTML = pokeIMG;
}
    );

     // latios
var _condition = "pokemon"
var _pocketmonster = "latios"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#latios');
    pokeIMG = `<img src="${img.front_default}" id="latios">`;
    selector.innerHTML = pokeIMG;
}
    );

     // jirachi
var _condition = "pokemon"
var _pocketmonster = "jirachi"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#jirachi');
    pokeIMG = `<img src="${img.front_default}" id="jirachi">`;
    selector.innerHTML = pokeIMG;
}
    );

     // chingling
var _condition = "pokemon"
var _pocketmonster = "chingling"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#chingling');
    pokeIMG = `<img src="${img.front_default}" id="chingling">`;
    selector.innerHTML = pokeIMG;
}
    );

     // bronzor
var _condition = "pokemon"
var _pocketmonster = "bronzor"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#bronzor');
    pokeIMG = `<img src="${img.front_default}" id="bronzor">`;
    selector.innerHTML = pokeIMG;
}
    );

     // bronzong
var _condition = "pokemon"
var _pocketmonster = "bronzong"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#bronzong');
    pokeIMG = `<img src="${img.front_default}" id="bronzong">`;
    selector.innerHTML = pokeIMG;
}
    );

     // gallade
var _condition = "pokemon"
var _pocketmonster = "gallade"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#gallade');
    pokeIMG = `<img src="${img.front_default}" id="gallade">`;
    selector.innerHTML = pokeIMG;
}
    );

     // mime-jr2
var _condition = "pokemon"
var _pocketmonster = "mime-jr"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#mime-jr2');
    pokeIMG = `<img src="${img.front_default}" id="mime-jr2">`;
    selector.innerHTML = pokeIMG;
}
    );

     // mesprit
var _condition = "pokemon"
var _pocketmonster = "mesprit"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#mesprit');
    pokeIMG = `<img src="${img.front_default}" id="mesprit">`;
    selector.innerHTML = pokeIMG;
}
    );

     // cresselia
var _condition = "pokemon"
var _pocketmonster = "cresselia"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#cresselia');
    pokeIMG = `<img src="${img.front_default}" id="cresselia">`;
    selector.innerHTML = pokeIMG;
}
    );

     // munna
var _condition = "pokemon"
var _pocketmonster = "munna"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#munna');
    pokeIMG = `<img src="${img.front_default}" id="munna">`;
    selector.innerHTML = pokeIMG;
}
    );

     // musharna
var _condition = "pokemon"
var _pocketmonster = "musharna"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#musharna');
    pokeIMG = `<img src="${img.front_default}" id="musharna">`;
    selector.innerHTML = pokeIMG;
}
    );

     // woobat
var _condition = "pokemon"
var _pocketmonster = "woobat"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#woobat');
    pokeIMG = `<img src="${img.front_default}" id="woobat">`;
    selector.innerHTML = pokeIMG;
}
    );

     // swoobat
var _condition = "pokemon"
var _pocketmonster = "swoobat"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#swoobat');
    pokeIMG = `<img src="${img.front_default}" id="swoobat">`;
    selector.innerHTML = pokeIMG;
}
    );

     // victini2
var _condition = "pokemon"
var _pocketmonster = "victini"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#victini2');
    pokeIMG = `<img src="${img.front_default}" id="victini2">`;
    selector.innerHTML = pokeIMG;
}
    );

     // sigilyph
var _condition = "pokemon"
var _pocketmonster = "sigilyph"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#sigilyph');
    pokeIMG = `<img src="${img.front_default}" id="sigilyph">`;
    selector.innerHTML = pokeIMG;
}
    );

     // gothita
var _condition = "pokemon"
var _pocketmonster = "gothita"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#gothita');
    pokeIMG = `<img src="${img.front_default}" id="gothita">`;
    selector.innerHTML = pokeIMG;
}
    );

     // gothorita
var _condition = "pokemon"
var _pocketmonster = "gothorita"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#gothorita');
    pokeIMG = `<img src="${img.front_default}" id="gothorita">`;
    selector.innerHTML = pokeIMG;
}
    );

     // gothitelle
var _condition = "pokemon"
var _pocketmonster = "gothitelle"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#gothitelle');
    pokeIMG = `<img src="${img.front_default}" id="gothitelle">`;
    selector.innerHTML = pokeIMG;
}
    );

     // solosis
var _condition = "pokemon"
var _pocketmonster = "solosis"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#solosis');
    pokeIMG = `<img src="${img.front_default}" id="solosis">`;
    selector.innerHTML = pokeIMG;
}
    );

     // duosion
var _condition = "pokemon"
var _pocketmonster = "duosion"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#duosion');
    pokeIMG = `<img src="${img.front_default}" id="duosion">`;
    selector.innerHTML = pokeIMG;
}
    );

     // reuniclus
var _condition = "pokemon"
var _pocketmonster = "reuniclus"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#reuniclus');
    pokeIMG = `<img src="${img.front_default}" id="reuniclus">`;
    selector.innerHTML = pokeIMG;
}
    );

     // elgyem
var _condition = "pokemon"
var _pocketmonster = "elgyem"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#elgyem');
    pokeIMG = `<img src="${img.front_default}" id="elgyem">`;
    selector.innerHTML = pokeIMG;
}
    );

     // beheeyem
var _condition = "pokemon"
var _pocketmonster = "beheeyem"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#beheeyem');
    pokeIMG = `<img src="${img.front_default}" id="beheeyem">`;
    selector.innerHTML = pokeIMG;
}
    );

     // espurr
var _condition = "pokemon"
var _pocketmonster = "espurr"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#espurr');
    pokeIMG = `<img src="${img.front_default}" id="espurr">`;
    selector.innerHTML = pokeIMG;
}
    );

     // inkay
var _condition = "pokemon"
var _pocketmonster = "inkay"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#inkay');
    pokeIMG = `<img src="${img.front_default}" id="inkay">`;
    selector.innerHTML = pokeIMG;
}
    );

     // delphox2
var _condition = "pokemon"
var _pocketmonster = "delphox"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#delphox2');
    pokeIMG = `<img src="${img.front_default}" id="delphox2">`;
    selector.innerHTML = pokeIMG;
}
    );

     // malamar
var _condition = "pokemon"
var _pocketmonster = "malamar"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#malamar');
    pokeIMG = `<img src="${img.front_default}" id="malamar">`;
    selector.innerHTML = pokeIMG;
}
    );

     // oranguru
var _condition = "pokemon"
var _pocketmonster = "oranguru"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#oranguru');
    pokeIMG = `<img src="${img.front_default}" id="oranguru">`;
    selector.innerHTML = pokeIMG;
}
    );

     // hoopa2
var _condition = "pokemon"
var _pocketmonster = "hoopa"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#hoopa2');
    pokeIMG = `<img src="${img.front_default}" id="hoopa2">`;
    selector.innerHTML = pokeIMG;
}
    );

     // bruxish
var _condition = "pokemon"
var _pocketmonster = "bruxish"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#bruxish');
    pokeIMG = `<img src="${img.front_default}" id="bruxish">`;
    selector.innerHTML = pokeIMG;
}
    );

     // cusmog
var _condition = "pokemon"
var _pocketmonster = "cusmog"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#cusmog');
    pokeIMG = `<img src="${img.front_default}" id="cusmog">`;
    selector.innerHTML = pokeIMG;
}
    );

     // cosmoem
var _condition = "pokemon"
var _pocketmonster = "cosmoem"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#cosmoem');
    pokeIMG = `<img src="${img.front_default}" id="cosmoem">`;
    selector.innerHTML = pokeIMG;
}
    );

     // solgaleo
var _condition = "pokemon"
var _pocketmonster = "solgaleo"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#solgaleo');
    pokeIMG = `<img src="${img.front_default}" id="solgaleo">`;
    selector.innerHTML = pokeIMG;
}
    );

     // necrozma
var _condition = "pokemon"
var _pocketmonster = "necrozma"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#necrozma');
    pokeIMG = `<img src="${img.front_default}" id="necrozma">`;
    selector.innerHTML = pokeIMG;
}
    );

     // cosmog
var _condition = "pokemon"
var _pocketmonster = "cosmog"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#cosmog');
    pokeIMG = `<img src="${img.front_default}" id="cosmog">`;
    selector.innerHTML = pokeIMG;
}
    );

     // tapu-lele2
var _condition = "pokemon"
var _pocketmonster = "tapu-lele"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#tapu-lele2');
    pokeIMG = `<img src="${img.front_default}" id="tapu-lele2">`;
    selector.innerHTML = pokeIMG;
}
    );