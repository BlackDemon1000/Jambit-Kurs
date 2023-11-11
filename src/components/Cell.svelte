<!-- Cell.svelte -->

<script>
    import { createEventDispatcher } from 'svelte';
  
    const dispatch = createEventDispatcher();
  </script>
  
  <div on:click={() => dispatch('click')}>
    <!-- Hier könntest du den Inhalt der Zelle definieren, z.B., ob sie ein Schiff zeigt. -->
  </div>
  
  <style>
    div {
      width: 40px;
      height: 40px;
      background-color: lightblue;
      border: 1px solid #ccc;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  </style>
  