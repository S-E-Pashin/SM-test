<script>
  export let bindingInput;
  export let bindingZone;
  export let valueArea;

  let updateActiveInput = (active) => {
    valueArea.active = active;
  }
</script>

<input class={bindingInput}
       bind:value={valueArea[bindingZone].input}
       on:input={() => updateActiveInput(bindingZone)}
       type="number"
>

<style>
  input {
    width: 90%;
    max-width: 360px;
    margin-top: 20px;
    height: 30px;
  }
</style>
