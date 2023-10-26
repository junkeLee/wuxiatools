export const transformListToGroup = (list) => {
  const tians = { id: 1, name: '天', children: [] };
  const dis = { id: 2, name: '地', children: [] };
  const hunduns = { id: 3, name: '混沌', children: [] };

  for (const item of list) {
    if (item?.category === 'tian') {
      tians.children.push(item);
      continue;
    }
    if (item?.category === 'di') {
      dis.children.push(item);
      continue;
    }
    hunduns.children.push(item);
  }
  return [tians, dis, hunduns];
};