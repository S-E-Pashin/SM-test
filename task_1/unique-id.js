import {encoded} from './data.js';

export const getUniqueId = (data) => {
  const idMap = [];
  for (const item of data) {
    const id = item.groupId;
    if (!idMap.includes(id)) {
      idMap.push(id);
    }
  }
  return idMap;
};

export const uniqueId = getUniqueId(encoded);
