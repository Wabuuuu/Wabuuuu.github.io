<script>
    function handleSubmit() {

        if (email === repeatEmail) {
           // Perform form submission logic here
            console.log (info); 
        }
        else{
            repeatEmail=""
            const alertElements = document.getElementById("alert");
            alertElements.style.display='block';
 
        }
    }

    let name = ""
    let LastName = ""
    let email = ""
    let password =""
    let birthDate = 2023 
    let repeatEmail = ""
  $:info ={name,LastName,email,repeatEmail,password,birthDate}


  
</script>


<div id="alert">
    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
    <strong>Danger!</strong> Kindly consider entering your email address twice during the registration or login process. This humble request holds immense value, serving as a thoughtful strategy with numerous benefits for both you and the platform.

    Your cooperation in confirming your email address by entering it twice contributes significantly to ensuring the accuracy of the provided information. By doing so, we can collectively minimize the potential for typos and small errors that may occur during the input process, creating a more seamless and reliable experience.
    
    We sincerely encourage you to view this double-checking mechanism as a preventive measure against any unintended errors, offering you a friendly opportunity to correct and confirm your details. Your active participation in this process not only enhances the quality of the data but also streamlines the overall interaction.
    
    Moreover, we believe that your engagement in this mild double-checking process will contribute to a positive user experience. By reducing the risk of frustration or inconvenience caused by potential inaccuracies, we aim to provide you with a smooth and satisfying interaction with our platform.
    
    In essence, we kindly appeal to you to consider this request as a collaborative effort to ensure accurate and reliable user data. Your participation not only benefits you but also plays a pivotal role in creating a positive and trustworthy environment for all users. We appreciate your understanding and cooperation in making this experience as smooth and enjoyable as possible.
  </div>


<form on:submit|preventDefault={handleSubmit}>
    

<h1>Registration Form</h1>

    <label for=FirstName>First Name:</label>
    <input bind:value={name} id="FirstName"type=text/>
    
    <label for=LastName>Last Name:</label>
    <input bind:value={LastName} id="LastName"type=text/>
   
    <label for=Email>Email:</label>
    <input bind:value={email} id="Email"type=email/>

    <label for=repeatEmail>Repeat email:</label>
    <input bind:value={repeatEmail} id="repeatEmail"type=email/>
   
    <label for=Password>Password:</label>
    <input bind:value = {password} id= "Password"type=password/>

    <label for=Birth date >Birth date:</label>
    <input bind:value={birthDate} type="number"/>
    
    
    <button type="submit">
        
        Click here if you want me to steal your information
    </button>

    <p>Already have an account? <a

    href="/logIn">Logga in</a>
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

#alert {
    position: fixed;
    display: none;
    top: 40%;
    left: 1%;
    z-index: 1;
  padding: 20px;
  background-color: #f44336;
  color: white;
}

.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}
</style>






