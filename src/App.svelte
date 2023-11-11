<script>
    let page = "default";
    let tempUsername = "default";
    let tempPassword = "default";
    function saveUsername() {
        const textInput = document.getElementById('UsernameInput');
        tempUsername = UsernameInput.value;
        savePassword();
    }
    function savePassword() {
        const textInput =document.getElementById('PasswordInput');
        tempPassword = PasswordInput.value;
    }
    /*Kommentar*/
    
</script>

<!--Kommentar-->
{#if page === "default"}
    <div>Username:</div>
    <input type="text" id="UsernameInput">
    <div>Password:</div>
    <input type="text" id="PasswordInput">
    <br/>
    <button on:click={saveUsername}>Speichern</button>
    <hr/>
    <div>Du hast {tempUsername} gespeichert</div>
    <div>Du hast {tempPassword} gespeichert</div>
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

