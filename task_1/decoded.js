import {EXCEPTIONS} from './const.js';
import {encoded, translations} from './data.js';

function getDecryptionFields(data, dictionary ) {
  return Object.entries(data).map(([, value]) => {
      return Object.fromEntries(Object.entries(value).map(([itemKey, itemValue]) => {
          if (EXCEPTIONS[itemKey]) {
            return [itemKey, itemValue]
          } else {
            return [itemKey, dictionary[Number(itemValue)] !== undefined ? dictionary[Number(itemValue)] : `Внимание! Данные не расшифрованы, текущий код: "${itemValue}"`]
          }
        })
      );
    }
  );
}

export const decoded = getDecryptionFields(encoded, translations);
