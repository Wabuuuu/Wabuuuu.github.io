<script>

    let lettersString = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ".split("")
    let letters = [];
    let username =""


    for (let letter of lettersString){
        letters.push({letter:letter, top:10+Math.random()*60, left:10+Math.random()*60})
    }

    setInterval(()=>{
        letters = [];
        for (let letter of lettersString){
        letters.push({letter:letter, top:10+Math.random()*60, left:10+Math.random()*60})
        }
    },2000)

    function addletter(letter,i){
        username += letter;
        letters[i].top = Math.random()*100
        letters[i].left = Math.random()*100
        letters = letters;
    }


</script>


<h1> Logga in som {username}</h1>
<div class = "container">
{#each letters as {letter,top,left},i}
    <button on:click={()=>addletter(letter,i)} style = "position:sticky;top:{top}%; left:{left}%;">{letter}</button>
{/each}
</div>



<style>
   
   .container{
    width: 500px;
    height: 500px;
    margin: auto;
    background-color: black;
   }


    button{
        color:green;
    }
</style>