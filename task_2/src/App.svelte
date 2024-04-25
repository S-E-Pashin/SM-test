<script lang="ts">
  import {currencyValue} from './currency-value/currency-value';
  import AreaCurrencies from './components/area-currencies/AreaCurrencies.svelte';

  let valueArea = {
    active: '',
    area1: {
      input: '',
      currency: 'EUR',
    },
    area2: {
      input: '',
      currency: 'EUR',
    },
  }

  function buyCurrencies1(quantity, currencyArea1, currencyArea2) {
    const value1unit = currencyValue[currencyArea1][currencyArea2];
    return (
      quantity * value1unit
    )
  }

  function buyCurrencies2(quantity, currencyArea1, currencyArea2) {
    const value1unit = currencyValue[currencyArea2][currencyArea1];
    return (
      quantity * value1unit
    )
  }

  function getNewValue() {
    if (valueArea.active === 'area1') {
      valueArea.area2.input = buyCurrencies1(valueArea.area1.input, valueArea.area1.currency, valueArea.area2.currency);
    } else if (valueArea.active === 'area2') {
      valueArea.area1.input = buyCurrencies2(valueArea.area2.input, valueArea.area1.currency, valueArea.area2.currency);
    }

  }
  $:valueArea && getNewValue();
</script>

<main>
  <p><b>Выберите валюты для конвертации</b></p>

  <div class="main-wrapper">
    <AreaCurrencies bindingZone="area1" bind:valueArea/>
    <AreaCurrencies bindingZone="area2" bind:valueArea/>
  </div>
</main>
<p>Курсы валют обновляются один раз в сутки</p>
<a class="link-api" href="https://www.exchangerate-api.com">API обменного курса</a>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    min-width: 480px;
  }

  .main-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    min-width: 360px;
  }

  @media (max-width: 580px) {
    .main-wrapper {
      flex-direction: column;
    }
  }
</style>
