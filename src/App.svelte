<script>
    let page = "default";
    let tempUsername = "default";
    let tempPassword = "default";
    let currentUser = "Login in to see your Username";
    function saveUsername() {
        const textInput = document.getElementById('UsernameInput');
        tempUsername = UsernameInput.value;
        savePassword();
    }
    function savePassword() {
        const textInput =document.getElementById('PasswordInput');
        tempPassword = PasswordInput.value;
    }
    function loginButtonclickt() {
        page = "default";
    }
    function registerButtonclickt() {
        page = "register";
    }
    /*Kommentar*/
    
</script>

<!--default header page-->
    <button on:click={loginButtonclickt}>Login</button>
    <button on:click={registerButtonclickt}>Register</button>
    <button class ="changedButton">{currentUser}</button>

<!--custom pages-->
{#if page === "default"}
    <div>Username:</div>
    <input type="text" id="UsernameInput">
    <div>Password:</div>
    <input type="text" id="PasswordInput">
    <br/>
    <button on:click={saveUsername}>Login</button>
    <hr/>
    <div>Du hast {tempUsername} gespeichert</div>
    <div>Du hast {tempPassword} gespeichert</div>
{/if}

{#if page === "register"}
    <div>Username:</div>
    <input type="text" id="UsernameInput">
    <div>Password:</div>
    <input type="text" id="PasswordInput">
    <br/>
    <button on:click={saveUsername}>Register</button>
    <hr/>
{/if}

{#if page === "LogedIn"}
    <h1>Loged In succesfully with Username {currentUser}</h1>
{/if}







<br />

<style>
  .changedButton {
    margin-left: 300px;
  }
</style>

