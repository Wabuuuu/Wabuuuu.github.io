



<script>
  let notCompletedTasks = [];
  let doingTasks = [];
  let completedTasks = [];
  let newTask = '';
  let showRemoveConfirmation = false;
  let taskToRemove = null;

  function completeTask(index) {
    const task = doingTasks[index];
    completedTasks = [...completedTasks, task];
    doingTasks = doingTasks.filter((_, i) => i !== index);
  }

  function uncompleteTask(index) {
    const task = completedTasks[index];
    doingTasks = [...doingTasks, task];
    completedTasks = completedTasks.filter((_, i) => i !== index);
  }

  function moveToDoing(index) {
    const task = notCompletedTasks[index];
    doingTasks = [...doingTasks, task];
    notCompletedTasks = notCompletedTasks.filter((_, i) => i !== index);
  }

  function moveToNotCompleted(index) {
    const task = doingTasks[index];
    notCompletedTasks = [...notCompletedTasks, task];
    doingTasks = doingTasks.filter((_, i) => i !== index);
  }

  function addTask() {
    if (newTask.trim() !== '') {
      notCompletedTasks = [...notCompletedTasks, newTask.trim()];
      newTask = '';
    }
  }

  function openRemoveConfirmation(task) {
    taskToRemove = task;
    showRemoveConfirmation = true;
  }

  function closeRemoveConfirmation() {
    showRemoveConfirmation = false;
    taskToRemove = null;
  }

  function confirmRemove() {
    if (taskToRemove) {
      completedTasks = completedTasks.filter(task => task !== taskToRemove);
      closeRemoveConfirmation();
    }
  }
</script>

<div class="container">
  <h1>Work list</h1>
  <div class="layout">
    <div class="not-completed">
      <h2>To do</h2>
      <ul>
        {#each notCompletedTasks as task, index}
          <li>
            {task} 
            <button on:click={() => moveToDoing(index)}>Move to Doing</button>
          </li>
        {/each}
      </ul>
      <input bind:value={newTask} placeholder="New Task" />
      <button on:click={addTask}>Add Task</button>
    </div>

    <div class="doing">
      <h2>Doing</h2>
      <ul>
        {#each doingTasks as task, index}
          <li>{task} <button on:click={() => completeTask(index)}>Complete</button></li>
        {/each}
      </ul>
    </div>

    <div class="completed">
      <h2>Completed</h2>
      <ul>
        {#each completedTasks as task, index}
          <li>
            {task} 
            <button on:click={() => openRemoveConfirmation(task)}>Remove</button>
          </li>
        {/each}
      </ul>
    </div>
  </div>

  {#if showRemoveConfirmation}
    <div class="confirmation-popup">
      <div class="popup-content">
        <p>Are you sure you want to remove this task?</p>
        <button on:click={confirmRemove}>Yes</button>
        <button on:click={closeRemoveConfirmation}>No</button>
      </div>
    </div>
  {/if}
</div>

<style>
  .container {
    font-family: 'Times New Roman', Times, serif;
    color: #748B75;
    height: 35vw;
    width: 180vh;
    background-color: #F5FBEF;
    border-width: 10px;
    border-style: solid;
    border-color: #92AD94;
    border-radius: 0%;
    padding-top: 10px;
    padding: 20px;
    margin: 50px auto;
  }

  .layout {
    display: grid;
    width: 80%;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .not-completed, .doing, .completed {
    background-color: #DCE8D4;
    padding: 10px;
    border-radius: 5px;
  }

  .confirmation-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .popup-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
</style>

