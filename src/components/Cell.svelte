<script>
  export let ship;

  function handleClick() {
    // Hier kannst du die Logik für den Klick auf eine Zelle implementieren
    console.log(`Cell clicked! Ship: ${JSON.stringify(ship)}`);
  }
</script>

<div on:click={handleClick} class="cell">
  {#if ship}
    <span>{ship.type.charAt(0)}</span>
  {/if}
</div>

<style>
  .cell {
    width: 40px;
    height: 40px;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
</style>
