<script>
    import { fade, fly } from 'svelte/transition';
    
    // Define parallax layers
    const layers = [1, 2, 4];
  
    // Define messages for scrollytelling
    const messages = [
      'Keep scrolling...',
      'More scrolling...',
      'Almost there...',
      'You did it!',
      'You are done!'
    ];
  
    // Initialize scroll position, message index, and fader
    let y = 0;
    let currentMessageIndex = 0;
    let fader = true;
    $: currentMessage = messages[currentMessageIndex];
    // Calculate the step size for message changes
    const step = Math.floor(5000 / messages.length);

    // Function to handle scroll events
    function handleScroll() {
      const tempIndex = currentMessageIndex;
  
      // Update the message index based on scroll position
      currentMessageIndex = Math.max(0,Math.floor(y / step));
  
      // Update the fader state based on message change
      fader = currentMessageIndex === tempIndex;
    }
  </script>
  
  <svelte:window bind:scrollY={y} on:scroll={handleScroll} />
  <svelte:head>
  
  <style>
    nav {
      position:fixed;
      z-index:10;
    }
  </style>
</svelte:head>
  <main>
    <!-- Parallax container for layers -->
    <div class="container">
      {#each layers as layer}
        <img
          style="transform: translate(0, {y < 2 ? y * layer : -y * layer / (layers.length - 1)}px)"
          src={`/BackgroundPixil${layer}.png`}
          alt={`parallax layer ${layer}`}
        >
      {/each}
    </div>
  
    <!-- Scrollytelling text section -->
    <div class="text">
        {#if fader && currentMessageIndex > 0}
          <!-- Animate text with fly-in and fade-out transitions -->
            <div class="story" in:fly={{ y: 200, duration: 5000 }} out:fade>
                <p>In battle there are no equals  {Math.round(y)} pixels</p>
                <p>{currentMessage}</p>
                <img src="https://cdn.shopify.com/s/files/1/0558/2081/files/Unmatched_Collection_TT_tall.png?v=1607988994" alt="heart"> 
            </div>
          {:else if currentMessageIndex === 0 }
          <p>In battle there are no equals {Math.round(y)} pixels</p>
          <p>{currentMessage}</p>
        {/if}
    </div>
     <div class="topp">

  </div>
  </main>


 
  
  <style>
    :global(body) {
      margin: 0;
      padding: 0;
      z-index: 0;
    }

    .topp{
      height: 100%;
      width: 100%;
      z-index: 2;
      position: sticky;
      top:0;
      left:0;
      background-image: url("/BackgroundPixil3.png");
      opacity: 0.9;
    }
  
    main {
      height: 2000px;
      position: relative;
      margin: -20px;
      padding: 0;
      background-color: black;
    }
 
    .story img{
        width:300px;
        bottom:0;
        z-index: 5;
    }
    
    .container {
      z-index: 0;
      position: fixed;
      height: 100vh;
      width: 100%;
      overflow: hidden; /* Clip overflow for parallax effect */
      
    }
  
  
    .container img {
      position: absolute;
      top: 0;
      left: 0;
      width: 30vw;
      height: 60%;
      z-index: 0;

    }
  
    .text {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      z-index: 1;
      width: 100%;
      color: white;

    }
  

  </style>
  