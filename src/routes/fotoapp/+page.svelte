<title>Pontiff sulyvahn</title> /*"Greetings, welcome to lordran, where ageless grace and wonder unite.*/
<h1>Boss images</h1>

<script> 
let pontiff ="https://pbs.twimg.com/media/DsZoQchWkAACpcf?format=jpg&name=large"
let artorias = "https://64.media.tumblr.com/17ad0d7a641de4a718156c5d60966047/tumblr_ofzbbspdgw1rggnpno9_640.jpg"
let yhorm = "https://i.pinimg.com/236x/d4/e9/c4/d4e9c4193f808e01d5c7a50f2a3bc2fe.jpg"
let images = [pontiff,artorias,yhorm];
   
</script>

<div class = "fotoapp">
    <img src= {images[0]} alt="flexbox rules">
    <img src= {images[1]} alt="flexbox rules">
    <img src= {images[2]} alt="flexbox rules">
    
   


</div>




<style>
    .fotoapp{
    display: flex;
    direction: colum;
    max-width: 100vw; overflow: hidden;
    align-items: center;
    justify-content: space-around;
}
.fotoapp img {
    max-width: 50%;
   
}
    
</style>