<script>
    let top = 50;
    let left = 50;
    
	function onKeyDown(e) {
		 switch(e.keyCode) {
			 case 81:
				 top -= 50;
				 break;
			 case 40:
				 top += 50;
				 break;
			 case 37:
				 left -= 50;
				 break;
			 case 39:
				 left += 50;
				 break;
		 }
	}

</script>

<div class="container">
    <div style="left: {left}px; top: {top}px"></div>
    <div class="keyboard">
        <div class="row">
            <div class="key">q</div>
            <div class="key">w</div>
            <div class="key">e</div>
            <div class="key">r</div>
            <div class="key">t</div>
            <div class="key">y</div>
            <div class="key">u</div>
            <div class="key">i</div>
            <div class="key">o</div>
            <div class="key">p</div>
        </div>
        <div class="row">
            <div class="key">a</div>
            <div class="key">s</div>
            <div class="key">d</div>
            <div class="key">f</div>
            <div class="key">g</div>
            <div class="key">h</div>
            <div class="key">j</div>
            <div class="key">k</div>
            <div class="key">l</div>
        </div>
        <div class="row">
            <div class="key">z</div>
            <div class="key">x</div>
            <div class="key">c</div>
            <div class="key">v</div>
            <div class="key">b</div>
            <div class="key">n</div>
            <div class="key">m</div>
            <div class="key spacebar">space</div>
        </div>
    </div>
</div>


<style>


.container{
    width: 100vw;
    height: 100vh;
    margin: 0px;
    background-color: black;
    position: fixed;
    top:0px;
    z-index: -1;
}

.keyboard {
    z-index: 1;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 500px;
    left: 400px;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
}

.row {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    z-index: 1;
}

.key {
    width: 50px;
    height: 50px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
    margin: 0 5px;
    transition: background-color 0.3s ease;
    z-index: 1;
}

.key:hover {
    background-color: #e0e0e0;
}

.spacebar {
    width: 250px; /* Adjust width of spacebar */
}
</style>


<svelte:window on:keydown|preventDefault={onKeyDown} />

