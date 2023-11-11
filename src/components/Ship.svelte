<script>
    export let ship;
  </script>
  
  <div class="ship">
    {#each Array(ship.size) as _, index}
      <div key={index} class="ship-segment" />
    {/each}
  </div>
  
  <style>
    .ship {
      display: flex;
      flex-direction: ${ship.size > 1 ? 'row' : 'column'};
    }
  
    .ship-segment {
      width: 20px;
      height: 20px;
      background-color: #333;
      margin: 2px;
    }
  </style>
  