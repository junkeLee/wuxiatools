export const transformListToGroup = (list) => {
  const lans = { id: 1, name: '蓝', children: [] };
  const zis = { id: 2, name: '紫', children: [] };
  const jins = { id: 3, name: '金', children: [] };

  for (const item of list) {
    if (item?.quality === 'lan') {
      lans.children.push(item);
      continue;
    }
    if (item?.quality === 'zi') {
      zis.children.push(item);
      continue;
    }
    jins.children.push(item);
  }
  return [lans, zis, jins];
};