<script>
  import { enhance } from "$app/forms";
  import "elizabot";
  import ElizaBot from "elizabot";
  import { story_id_store} from "$lib/stores"
  import { onMount } from 'svelte';

  let eliza = new ElizaBot();

 

  let id;
  story_id_store.subscribe((value) => {
		id = value;
	});
  let chat = [];
  
  onMount(()=>{
    if (id != "1"){
            console.log(id)

            let jsonObj = JSON.parse(id);
            chat = jsonObj;
      }
      else{
        chat = [{ user: "eliza", text: eliza.getInitial() }];
      }
  })
  
  function savechat(message){
    
    let myJSON = JSON.stringify(chat);
    console.log(myJSON)
        story_id_store.set(myJSON) 
  }

  async function write(message) {
    chat.push({ user: "User", text: message});
    chat = chat;
  
  
  var element = document.getElementById("visible");
  element.style.display = "flex"; 
  
  await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
  element.style.display = "none";

  var reply = eliza.transform(message);
  chat.push({ user: "eliza", text:reply });
  chat = chat;

  savechat(message)
  }

  

 let eye = "https://www.freeiconspng.com/thumbs/eye-icon/eyeball-icon-png-eye-icon-1.png"
 let eyeball = "https://www.pets-n-friends.com/image.edit/imagelibrary/petsnfriends/shapes/dot_06_white.png"
 let images = [eye, eyeball];
  
 function clearChat() {
    chat = [];
    savechat("");
 }

</script>


<div class="container">
<button on:click={clearChat} class= "knap" >Clear Chat</button>
</div>

<svelte:head>
  <link rel="stylesheet" href="/pico.min.css" />

  <style>
    nav {
      margin-left: 10%;
      margin-right: 10%;
    }
  </style>
</svelte:head>


<div class = "foto">
  <img src= {images[0]} alt="flexbox rules">
 
</div>

<div class = "fotoeye" id ="eyeanimation" >
  <img src= {images[1]} alt="flexbox rules">

</div>

<div class="container">
  <h1>ElizaBot</h1>
  <div class="scrollable">
    <!-- TODO: loop over the messages and display them -->
    {#each chat as message, i}
      <article>
        <div class="min-animation">
          <span>
          {message.text}
        </span>
      </div>
    </article>
    {/each}
    <article id ="visible">
    

      <span class="circle">

      </span>


      <span class="circle">

      </span>


      <span class="circle">

      </span>
    </article>
  </div>
  <form
    method="post"
    use:enhance={({ form, data, action, cancel }) => {
      /* https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
      cancel(); //don't post anything to server
      const text = data.get("text");
      write(text);

      // TODO: reset the form using form.reset()
      form.reset()
    }}
  >
    <input type="text" name="text" />
  </form>
</div>

<style>

@keyframes ramnyckel {
0% {background-color: rgb(255, 255, 255);}
25% {background-color: rgb(185, 182, 182);}
50% {background-color: rgb(168, 168, 168);}
75% {background-color: rgb(207, 207, 207);}
100%{background-color: rgb(255, 255, 255);}
}

@keyframes typing {
0% {transform:scale(1);}
50% {transform:scale(1.4);}
100% {transform:scale(1);}
}

@keyframes movingeye {
from{ transform: rotate(0deg);}
to{ transform: rotate(360deg);} 
 


}

.knap{
background-color: black;
  margin-left: 311px;
  border-radius: 10px;
  width: 500px;
  height: 100px;
}

#eyeanimation {
animation-name: movingeye;
animation-duration: 1000ms;
animation-timing-function: linear; 
animation-iteration-count: infinite;
}

.min-animation {
animation-name: ramnyckel;
animation-duration: 2000ms;
animation-timing-function: ease-in-out; 
animation-iteration-count: infinite;
}

#visible{
  width: 100px;
  height: 60px;
  display:none;
  justify-content: center; 
  align-items: center; 
}

.fotoeye{
  width: 30px;
  height: 114px;
  margin-left: 745px;
}



.foto{
  width: 1000px;
  height: 100px;
  margin-left: 600px;
}

.circle {
  margin: 4px;;
  padding: 7px;
  width: 2px;
  height: 2px;
  border-radius: 50% ;
  background-color: rgb(0, 0, 0);
  animation-name: typing;
  animation-duration: 1000ms;
  animation-timing-function: ease-in-out; 
  animation-iteration-count: infinite;

}

/* CSS-stilar för .circle med index 1 (den första cirkeln) */
.circle:nth-child(1) {
animation-delay: 0ms; /* Ingen fördröjning */
}
/* CSS-stilar för .circle med index 2 (den andra cirkeln) */
.circle:nth-child(2) {
animation-delay: 333ms; /* Starta animationen efter 333 millisekunder
(ms) */
}
/* CSS-stilar för .circle med index 3 (den tredje cirkeln) */
.circle:nth-child(3) {
animation-delay: 666ms; /* Starta animationen efter 666 ms */
}


</style>
