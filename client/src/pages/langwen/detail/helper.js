export const columns = [
  {
    title: '等级',
    key: 'level'
  },
  {
    title: '属性',
    key: 'props',
    render: ({ props }) => props?.map(i => `${i.name} +${i.value}`).join('、')
  },
];

export const buildDetailList = ({ type, quality, count, spend }) => {
  return [
    { label: '类型', value: type },
    { label: '品质', value: quality },
    { label: '满级总消耗个数', value: count },
    { label: '满级总消耗碎银', value: spend }
  ];
};
