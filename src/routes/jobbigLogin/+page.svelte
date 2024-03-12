
<script>
    let generatedLetters = [];
    let bokstaver = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ".split("");

    function generateRandomLetter() {
        let nr = 1 + Math.round(Math.random() * 25); 
        let letter = bokstaver[nr - 1]; 
        generatedLetters = [...generatedLetters, letter]; 
    }

    function removeLastLetter() {
        generatedLetters.pop();
        generatedLetters = [...generatedLetters];
    }

    function logIn() {
        alert("Wrong username");
    }
</script>

<div class = "container2">



    <div class="container3">
    <h1>Logga in som: {generatedLetters.join("")}</h1>
    </div>

    <div class="container">
    <button on:click={generateRandomLetter}>Generate Random Letter</button>
    <button on:click={removeLastLetter}>Backspace</button>
    <button on:click={logIn}>Log In</button>
    </div>

</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }



    button {
        margin: 0 10px;
        padding: 10px 20px;
        border-radius: 5px;
        border: none;
        background-color: rgb(94, 94, 94);
        color: white;
        cursor: pointer;
        outline: none;
    }

    button:hover {
        background-color: rgb(94, 94, 94);
    }

    .container3 {
        text-align: center;
        margin-top: 50px;
    }

    .container2
    {
        margin: 0 10px;
        padding: 10px 20px;
        border-radius: 5px;
        border: none;
        background-color: rgb(94, 94, 94);
        color: white;
        cursor: pointer;
        outline: none;
    }

    h1 {
        font-weight: bold;
        font-family: inherit;
        color: #001f3f;
    }

  
    
</style>