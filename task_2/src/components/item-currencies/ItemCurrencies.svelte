<script lang="ts">
  import {CURRENCY} from '../list-currencies/currencyToConvert.js';
  export let valueArea;
  export let valueCurrency;
  export let radioGroup:string;
  export let bindingZone;

  let updateCurrency = (value) => {
    valueArea[bindingZone].currency = value;
  }
</script>

<div class="item-wrapper">
  <label for={`id-${radioGroup}--${CURRENCY[valueCurrency]}`}>{valueCurrency}</label>
  <input name={`radio-${radioGroup}`}
         type="radio"
         value="{CURRENCY[valueCurrency]}"
         id={`id-${radioGroup}--${CURRENCY[valueCurrency]}`}
         on:input={() => updateCurrency(CURRENCY[valueCurrency])}
         checked="true"
  >
</div>

<style>
  .item-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
