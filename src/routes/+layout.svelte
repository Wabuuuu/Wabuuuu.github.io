<script>

import "../app.pcss";
 let links = ["/","/memory", "/telltale", "/fotoapp", "/register", "/todo", "/chat", "/search", "/blog","/clickerlogin", "/jobbigLogin", "/TangentbordsSpel","/KeyboardGame","/Startkod","/Webbshop"]

</script>

<nav class="bg-gray-800">
  {#each links as link}
     <a class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md
  px-3 py-2 text-sm font-medium" href={link}>{link.length<2?"Hem":link.charAt(1).toUpperCase()
    + link.slice(2)}</a>
  {/each}
 
  
</nav>

<hr>

<slot></slot>

<style>



</style>