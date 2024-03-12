
<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>


<style>

.users {
    background: url('https://wallpapers.com/images/hd/pixelated-hacker-poison-skull-gg733qbdv3fhhumk.jpg') center/cover; 
    border: 1px solid #333;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 100px;
    transition: box-shadow 0.6s ease;
    color: #ffffff;
    position: relative;
    overflow: hidden;
  }

  .users:hover {
    box-shadow:  5px 5px rgb(0, 0, 0);
  }

  .users p {
    margin: 0;
    z-index: 1; 
  }

  .id {

    color: blue;
  }

</style>


<main>
  <h2>{"Showing results for: " + data.params.category}</h2>
  <hr />
  
  <div>
    {#each data.response as item}
      <article class = {data.params.category}>
        {#each Object.entries(item) as [key, value]}
          <p class={key}>{key + ": " + value}</p>
        {/each}
      </article>
    {/each}
  </div>
</main>



		
