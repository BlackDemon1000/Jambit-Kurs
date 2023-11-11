<!-- Board.svelte -->

<script>
    import Cell from './Cell.svelte';
  
    let rows = 5;
    let cols = 5;
  
    function handleCellClick() {
      // Hier könntest du die Logik für den Klick auf eine Zelle implementieren.
      // Du könntest den Status des Spielfelds aktualisieren und überprüfen, ob ein Schiff getroffen wurde.
    }
  </script>
  
  <div class="board">
    {#each Array(rows) as _, rowIndex}
      {#each Array(cols) as _, colIndex}
        <Cell on:click={handleCellClick} />
      {/each}
    {/each}
  </div>
  
  <style>
    .board {
      display: grid;
      grid-template-columns: repeat(${cols}, 40px);
      gap: 4px;
    }
  </style>
  