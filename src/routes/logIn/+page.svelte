<script>
    function handleSubmit() {
    // Perform form submission logic here
    console.log (info);
    }

  
    let email = ""
    let password =""
     
  $:info ={email,password,}


  
</script>




<form on:submit|preventDefault={handleSubmit}>
    

<h1>Registration Form</h1>


   
    <label for=Email>Email:</label>
    <input bind:value={email} id="Email"type=email/>

    
   
    <label for=Password>Password:</label>
    <input bind:value = {password} id= "Password"type=password/>


    
    <button type="submit">
        
        Click here if you want me to steal your information
    </button>

    <p>Dont have an account? <a

    href="/register">Skapa konto</a>
</p>
</form>

<style>
h1{
    font-family:fantasy;
    
}    

form{
    
display: grid; 
font-family:fantasy;
	width: 800px;
	padding: 50px;
	background: rgba(255, 94, 0, 0.993);
	margin: 50px auto;
	box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.22);
	-moz-box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.22);
	-webkit-box-shadow:  0px 0px 15px rgba(255, 255, 255, 0.22);
    border-radius: 3%;
    color:#372d2b;
    font-size: 150%;
    

grid-template-columns: repeat(1, minmax(200px, 1fr));

}
label{
    margin: 2% 0% 0%;
}

button{
    margin: 5% 0% 0%;
    border: 10px solid transparent;
    border-radius: 8px;
}

button[type="submit"]:hover, 
input:hover{
	background:linear-gradient(to bottom, #cacaca 5%, #cacaca 100%);
	
}
button[type="submit"], input{
    background-color: rgb(255, 255, 255);
    font-family: fantasy;
    color: #372d2b;
}


input{
    color:#000000;
    font-size:large;
    border: #111414;
    border: 20px solid transparent;
    border-radius: 25px;

}
</style>






