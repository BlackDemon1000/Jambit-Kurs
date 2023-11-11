<!-- Game.svelte -->

<script>
    import Board from './Board.svelte';
  
    let shipsSunk = 0;
  
    function handleShipSunk() {
      shipsSunk += 1;
      // Hier könntest du weitere Aktionen ausführen, wenn ein Schiff versenkt wurde.
    }
  </script>
  
  <section>
    <Board on:shipSunk={handleShipSunk} />
    {shipsSunk > 0 && <p>{shipsSunk} Schiffe versenkt!</p>}
  </section>
  
  <style>
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  </style>
  