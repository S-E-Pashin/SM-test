import {CURRENCY} from '../components/list-currencies/currencyToConvert';
export const currencyValue = {};
for (let key in CURRENCY) {
    currencyValue[key] = fetch(`https://open.er-api.com/v6/latest/${CURRENCY[key]}`).then(
        (answer => answer.json())).then(answer => currencyValue[key] = answer.rates)
}
