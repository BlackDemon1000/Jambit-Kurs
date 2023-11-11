<script>
    import Name from "./name.svelte";
    import Nummer from "./Nummer.svelte";
    import Adresse from "./Adresse.svelte";
    import Email from "./Email.svelte";
    import Schule from "./Schule.svelte";
    import Hallo from "./begüßung.svelte";
    let counter = 0;
    let page ="luka";
    function hallo() {
        counter =counter+1
    }
    function showEmanuel() {page = "Emanuel"}
    function showChristoph() {page = "Christoph"}
    function showFelix() {page = "Felix"}
    /*Kommentar*/
    
</script>

<!--Kommentar-->

<Name/>
<Nummer/>
<Email/>
<Schule/>
<hr/>
<button on:click={showEmanuel}>Emanuel</button>
<button on:click={showChristoph}>Christoph</button>
<button on:click={showFelix}>Felix</button>

{#if page === "Emanuel"}
    <div>Hallo ich bin der Emanuel</div>
{/if}

{#if page === "Christoph"}
    <div>Hallo ich bin der Christoph</div>
{/if}

{#if page === "Felix"}
    <div>Hallo ich bin der Felix</div>
{/if}




<br />

<style>
  h1 {
    color: "red";
  }

  del {
    background-color: green;
  }

  ins {
    color: blue;
    font-size: 50px;
  }
  /*Hier auch ein Kommentar*/
  #test {
    color: blue;
  }
</style>

