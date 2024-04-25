<script lang="ts">
  import ItemCurrencies from '../item-currencies/ItemCurrencies.svelte';
  import {currencyValue} from '../../currency-value/currency-value';
  export let bindingZone;
  export let bindingList:string;
  export let valueArea;
</script>

  <section class={`list-currencies ${bindingList}`}>
  {#each Object.keys(currencyValue) as itemCurrency}
    <ItemCurrencies valueCurrency={itemCurrency} radioGroup={bindingList} bindingZone={bindingZone} bind:valueArea />
  {/each}
  </section>

<style>
  .list-currencies {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
    width: 90%;
    max-width: 360px;
  }
</style>
