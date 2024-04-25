<script>
  import ListCurrencies from '../list-currencies/ListCurrencies.svelte';
  import InputCurrencies from '../input-currencies/InputCurrencies.svelte';
  export let bindingZone;
  export let valueArea;
</script>

<div class="area-wrapper {bindingZone}">
  <ListCurrencies bindingList={`list-${bindingZone}`} bindingZone={bindingZone} bind:valueArea/>
  <InputCurrencies bindingInput={`input-${bindingZone}`} bindingZone={bindingZone} bind:valueArea/>
</div>

<style>
.area-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  width: 250px;
}
</style>
