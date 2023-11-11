<script>
    import Cell from './Cell.svelte';
    import Ship from './Ship.svelte';
  
    let ships = [
      { type: 'carrier', size: 5 },
      { type: 'battleship', size: 4 },
      // ... weitere Schiffstypen
    ];
  </script>
  
  <div class="board">
    {#each ships as ship (ship.type)}
      <Ship {ship} />
    {/each}
  </div>
  
  <style>
    .board {
      display: flex;
      flex-wrap: wrap;
      width: 400px;
      height: 400px;
    }
  </style>
  