<script>
    let page = "default";
    let loginsucces = 0;
    let Usernamecor = 0;
    export let tempUsername = "default";
    export let tempPassword = "default";
    let Usercount = 0;
    export let currentUser = "Login in to see your Username";
    const User =[];
    const Password = [];
    User[0] = "default";
    Password[0] = "default";
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
    function waitforRegisterData() {
        setTimeout(register, 10);
    }
    function waitforLoginData() {
        setTimeout(login, 10);
    }
    function register() {
        Usercount = Usercount+1;
        User[Usercount] = tempUsername;
        Password[Usercount] = tempPassword;
    }
    function login() {
        Usernamecor = 0;
        for(let i = 0; i < User.length; i++) {
            if ((User[i]) == tempUsername){
                Usernamecor = 1;
            }
        }
        for(let i = 0; i < Password.length; i++) {
            if ((Password[i]) == tempPassword && Usernamecor == 1) {
                page = "loggedIn";
        }
    }
 
    User[0] = "default"
<script/>
    /*Kommentar*/
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
    <button on:click={saveUsername && waitforRegisterData}>Register</button>
    <hr/>
{/if}

{#if page === "LoggedIn"}
    <h1>Loged In succesfully with Username {currentUser}</h1>
{/if}







<br />

<style>
  .changedButton {
    margin-left: 300px;
  }
</style>

