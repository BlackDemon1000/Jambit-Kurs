<script>
  import Name from "./name.svelte";
  import Nummer from "./Nummer.svelte";
  import Adresse from "./Adresse.svelte";
  import Email from "./Email.svelte";
  import Schule from "./Schule.svelte";
  import Hallo from "./begüßung.svelte";
</script>

<Name />
<Nummer />
<Adresse />
<Email />
<Schule name="ich" />

<br />
<Hallo />
<br />
<strong>Alter 15</strong>
<em>test</em>
<div>wow</div>
<a href="google.com">Link</a>
<br />

<q>Morgen</q>
<br />
<hr />
<img
  src="https://www.americanexpress.com/de-de/amexcited/media/cache/default/cms/2022/07/landschaft-slowenien-nationalpark.jpg"
/>
<button>Klick hier</button>
<br />
<del>Gelöscht halt</del>
<ins>Gehört auch dazu</ins>
<br />
<mark>Hier muss ein Satz rein</mark>
<input type="text" />
<br />
<p id="test">Test</p>
<a href="amazon.com">
  <button>Amazon</button>
</a>
<br />
<input type="radio" id="radioid" value="radiowert" name="auswahl" />
<div>Checkbox</div>
<input type="checkbox" id="checkboxid" name="checkbox" />
<br />

<select id="selectid" name="dropdown">
  <option value="1">True</option>
  <option value="2">False</option>
</select>

<iframe
  src="https://scratch.mit.edu/projects/244698177/embed"
  allowtransparency="true"
  width="485"
  height="402"
  frameborder="0"
  scrolling="no"
  allowfullscreen
/>
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
  #test {
    color: blue;
  }
</style>
