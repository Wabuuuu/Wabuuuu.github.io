
<script>
    let notCompletedTasks = [{info:"Brick    ",img:"/tegel2.png"}, {info:"Gold brick",img:"/tegel3.png"}, {info:"Dark brick",img:"/tegel4.png"}, {info:"Uranium brick",img:"/Uranium brick.png.png"}, {info:"Water brick",img:"/Water brick.png.png"}, {info:"Plutonium Brick",img:"/Plutonium brick.png.png"}, {info:"Silver brick",img:"/Silver brick.png.png"}, {info:"Lego brick   ",img:"/Lego brick.png.png"}, {info:"Dirt brick",img:"/Dirt brick.png.png"}, {info:"Bloody brick",img:"/Bloody brick.png.png"}, {info:"Alien brick  ",img:"/Alien Tegel.png.png"}, {info:"Stone brick",img:"/Stone brick.png"}, {info:"Amethys brick",img:"/Amethyst brick.png"}, {info:"Human brick",img:"/Human brick.png"}, {info:"Gift brick",img:"/Gift brick.png"},  {info:"Inverted brick",img:"/Inverted brick.png"},  {info:"Moldy brick",img:"/Moldy brick.png"},  {info:"Dirty brick",img:"/Dirty brick.png"} ]; 
    let completedTasks = [];
    
    function completeTask(index) {
      const task = notCompletedTasks[index];
      completedTasks = [...completedTasks, task];
    }
  
    function removeTask(index) {
      completedTasks = completedTasks.filter((_, i) => i !== index);
    }
    if (completeTask.length > 4) {completeTask.length == 4}
    completeTask = completeTask;
  </script>


<link href="https://fonts.cdnfonts.com/css/public-pixel" rel="stylesheet">
<div class = "background">
  <div class="container">
    <h1>MEGA SUPER TEGEL AFFÄR</h1>
    <div class="layout">
      <div class="not-completed">
        
       
        
          {#each notCompletedTasks as task, index}
            
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="produkt" on:click={() => completeTask(index)}>
              
                {task.info} <img src={task.img} alt="product">
              
              
            </div>
          {/each}
        
      </div>
  
      <div class="Varukorg">
        <h2>Varukorg</h2>
        
          {#each completedTasks as task, index}
            <div class="produkt">
              {task.info} <img src={task.img} alt="product">
              <button on:click={() => removeTask(index)}>Remove</button>
            </div>
          {/each}
        
      </div>
    </div>
  </div>
</div>


  
  <style>
    
   

    @import url('https://fonts.cdnfonts.com/css/public-pixel');

    .background{
        display: flex;
        background-color: #fffdfd;
        z-index: 0;
        background-image: url("https://img.freepik.com/premium-vector/seamless-red-brick-wall-pixel-art-patttern_6070-239.jpg")
        
        
    }
    
  

    .produkt img{
        height: 190px;
        width: 190px;
        background-color: rgb(79, 67, 52);
        border-width: 10px;
        border-style: solid;
        border-color: rgb(43, 40, 37);
        border-radius: 0%;
    }

    .produkt {
      height: 190px;
      width:190px;
      color:aliceblue;
      font-family: 'Public Pixel', sans-serif;
      font-size:x-small;
      margin-top: 50px;
      margin-left: 34px;
      margin-bottom: 60px;
      background-color: rgb(61, 61, 61);
      
      
      
      
    }
  
    .container {
      font-family: 'Public Pixel', sans-serif;
      font-size: small;
      color: #ffffff;
      font-size:large;
      height: 42vw;
      width: 200vh;
     
      
      padding-top: 10px;
      padding: 20px;
      margin: 40px auto;
     
    }
  
    .layout {
      display: grid;
      width: 80%;
      grid-template-columns: repeat(2, 1fr); 
      gap: 20px;
      margin-left: 200px;
      
    }
  
    .not-completed {
      display: flexbox;
      background-color: #785d35;
      padding: 20px;
      border-radius: 5px;
      cursor: pointer; 
      width: 800px;
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      overflow-y: scroll;
      height: 550px;
      border-width: 10px;
      border-style: solid;
      border-color: rgb(52, 27, 9);
      border-radius: 0%;

    
    }

 
  
    .Varukorg {
      background-color: #785d35;
      padding: 20px;
      border-radius: 5px;
      cursor: pointer; 
      height: 550px;
      margin-left: 50px;
      width: 300px;
      overflow-y: scroll;
      border-width: 10px;
      border-style: solid;
      border-color: rgb(52, 27, 9);
      border-radius: 0%;
    }
  
    button {
      cursor: pointer;
    }
  </style>

  