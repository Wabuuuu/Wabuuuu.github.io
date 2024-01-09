<script>
  
let resetPoints = 0;
  
let blueTurn = true;

let redPoints = 0;

let bluePoints = 0;

let cards = [];

let pairs = 6;

  for (let index = 0; index < pairs*2; index++) {
    cards.push({
      id: index, // TODO: unique ids per card card
      img: "https://picsum.photos/id/"+(20+index%pairs)+"/200/300", // TODO: unique images per card card
      flipped: false,  // TODO: think
      completed: false, 
    });
 
    cards.sort(() => Math.random() - 0.5);

    

  }
  let flipcount = 0;
  function flip(card){ 
    if (flipcount < 2 && !card.flipped){
      card.flipped = true;
      flipcount ++
    
    // flip card over if two cards are not already flipped
    // TODO: and card is already not flipped
    
      if (flipcount == 2) {
        let nextTurn = !blueTurn
        cards.forEach((firstcard) => {
            if(firstcard.flipped && firstcard.id != card.id && card.img == firstcard.img){
              firstcard.completed=true;
              card.completed=true;
              console.log("matching!")
              resetPoints++
              if(resetPoints == 6){
                setTimeout(() => {
                  // flip over cards that have not been marked as "completed"
                  cards.forEach((card) => {
                    card.completed = false;
                    card.flipped = card.completed;
                    bluePoints = 0
                    redPoints = 0
                  });
                  cards = cards;
                }, 2000);
              }
              if(blueTurn){
               bluePoints ++ 
               nextTurn = !nextTurn
              }
              else {
                redPoints++
                nextTurn = !nextTurn                
              }
            }
          });
        setTimeout(() => {
          blueTurn=nextTurn
          // flip over cards that have not been marked as "completed"
          cards.forEach((card) => {
            card.flipped = card.completed;
          });
          flipcount = 0;
          cards = cards;
        }, 2000);
        
        
      }
      cards = cards;
    } else {
      alert("🏴‍☠️️🏴‍☠️️🏴‍☠️️🏴‍☠️️🏴‍☠️️🏴‍☠️️");
    }
  }



</script>

<main>

  <div class="row">
    {#each cards as card, i}
      <div
        on:click={() => {
          flip(card);
        }}
        on:keypress={() => {
          flip(card);
        }}
        class:flipped={card.flipped}
        class="card"
      >
        <img class="front" src={card.img} alt="" />
        <img class="back" src="https://static.vecteezy.com/system/resources/previews/019/786/974/non_2x/bold-colorful-outlined-background-with-simple-and-flat-color-art-style-isolated-on-square-template-for-social-media-template-paper-and-textile-scarf-print-wrapping-paper-poster-free-vector.jpg" alt="" />
      </div>
    {/each}
  </div>

  <div class="box redBox"> <p>{redPoints}</p> 
  
  </div>


  <div class="box blueBox"><p>{bluePoints}</p>
  
  </div>
  </main>
<button  on:click={()=>{blueTurn=!blueTurn}}> knapp</button>
  <div class = "box" id = "redBox">...</div>
  <div class = "box" id = "blueBox">...</div>
  <div style={blueTurn?"right: 10px;":"left:10px"} class = "box" id = "turn-box">...</div>

  <style>
  
  .box {
  width: 100px;
  height: 100px;
  position: absolute;
  bottom : 0;
  text-align: center; font-size: 30px;
  
  
  }
  .redBox {
  background-color: rgb(166, 2, 2);
  z-index:1;
  left: 0px;
  position: fixed;
  }
  .blueBox {
  background-color: rgb(0, 0, 172);
  right: 0px;
  position: fixed;
  }

  .redBox, .blueBox{
  bottom: 0px;
  z-index: 2;
}

  #turn-box{
  bottom: 10px;
  z-index: 1;
  background-color: greenyellow;
  box-shadow: 0 0 20px 20px greenyellow;
  }

  main {
    margin-top: 50px;
    display: flex;
    place-content: center;
    place-items: center;
  }

  .row {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(6, 100px);
    grid-template-rows: repeat(3, 100px);
  }

  @media (max-width:800px){
    .row{
      grid-template-columns: repeat(4, 100px);
    }
  }

  @media (max-width:600px){
    .row{
      grid-template-columns: repeat(2, 100px);
      grid-template-rows: repeat(6, 100px);

    }
  }

  .card {
    border: 5px solid black;
    cursor: pointer;
    transition: transform 1s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card .back {
    transform: rotateY(0deg);
    
  }

  .card .front {
    transform: rotateY(180deg);
  }

  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    position:absolute;
  }

  
</style>
