<script>
    import { tick } from "svelte";

    export let ref;
    export let state;
    export let hasOverlap;
    export let numOfShipsPlaced;

    const messages = {
        welcome: {id: 'welcome', msg: "Welcome to <strong>Battleship!</strong> To get started select a ship and place it on the grid..."},
        placement1: {id: 'placement1', msg: "Great. You can also <strong>change the orientation</strong> of a ship by <strong>clicking on the arrow</strong> to the right or by <strong>pressing Space</strong>. Now go ahead and place the rest of your ships."},
        placement2: {id: 'placement2', msg: "If you like, you can quickly <strong>place all you ships</strong> randomly by <strong>clicking on the dice icon</strong>."},
        overlap: {id: 'overlap', msg: "You won't be able to place a ship if it is overlaping with another!"},
        overlap2: {id: 'overlap2', msg: "Try placing the ship on a grid square not already occupied by a ship."},
        clear: {id: 'clear', msg: "You can quickly <strong>clear the grid</strong> by <strong>clicking on the dashed square</strong> next to the dice icon."},
        play: {id: "play", msg: "If you're happy with the arbitrary placement of your ships, you can now choose to play a game!"},
        prematureStart: {id: "prematureStart", msg: "You will need to place all of your ships before being able to start a game."},
        start: {id: "start", msg: "It's now up you to guess where on the grid your opponents ships are... <strong>Start by clicking anywhere on the grid</strong>. Good luck!"}
    }
    let msgHistory = [messages.welcome];
    let newMessageEl;

    $: {
        if (state == "placement") {
            if (hasOverlap && msgHistory.includes(messages.overlap))
                addMsg(messages.overlap2)
            else if (hasOverlap) addMsg(messages.overlap)

            if (numOfShipsPlaced == 1 && !msgHistory.includes(messages.placement1)) addMsg(messages.placement1)

            if (numOfShipsPlaced == 3 &&
                !msgHistory.includes(messages.placement2)) addMsg(messages.placement2)

            if (numOfShipsPlaced > 4 && !msgHistory.includes(messages.clear)) addMsg(messages.clear)

            if (numOfShipsPlaced == 5 && !msgHistory.includes(messages.play))
                addMsg(messages.play)
        }
    }

    export function startGameMsg(canStartGame) {
        if (!canStartGame && numOfShipsPlaced == 0 &&
            !msgHistory.includes(messages.prematureStart)) addMsg(messages.prematureStart,
            " <strong>Start by selecting a ship and placing it on the grid</strong>.")
        else if (!canStartGame && numOfShipsPlaced > 0) addMsg(messages.prematureStart,
        " <strong>Continue adding the rest of your ships</strong>.")
        else if (canStartGame) {
            msgHistory = [messages.start];
        }
    }

    async function addMsg( newMsg, etc ) {
        let msg = etc ? {... newMsg, msg: newMsg.msg + etc} : newMsg;
        msgHistory = [... msgHistory, msg ];
        await tick();
        newMessageEl.scrollIntoView();
    }
</script>

<style>
    .message-container {
        max-height: 100%;
        border-top: 2px solid #333;
        border-bottom: 2px solid #333;
        overflow: scroll;
    }

    p {
        padding-left: 30px;
    }

    .identifier {
        float: left;
    }

</style>

<div {ref} class="message-container">
    {#each msgHistory as msg, index}
        <div id={index} class="message">
            <div class="identifier" >--> </div>
            <p id={index} bind:this={newMessageEl}>{@html msg.msg}</p>
        </div>
    {/each}
</div>