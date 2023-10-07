export const list = [
  {
    id: 1,
    name: '蓝',
    children: [
      {
        id: 1,
        name: '佳人笔',
        quality: 'lan',
      }
    ]
  },
  {
    id: 2,
    name: '紫',
    children: [
      {
        id: 2,
        name: '红叶',
        quality: 'zi'
      }
    ]
  }
];

export const detailList = [
  {
    id: 1,
    name: '优昙花',
    quality: '蓝',
    materialTotalCount: 81,
    totalAmount: 1000,
    totalYuanCaiChu: 100,
    totalYuanCaiJin: 100,
    totalYuanCaiShen: 100,
    totalProps: [
      { name: '力道', value: 30 },
      { name: '洞察', value: 30 }
    ],
    totalSkills: [
      { name: '第一章', value: '力道增加1%' },
      { name: '第二章', value: '力道增加1%' },
      { name: '第三章', value: '力道增加1%' },
      { name: '第四章', value: '力道增加1%' }
    ],
    spends: {
      columns: [
        { title: '章-节', key: 'chapter' },
        { title: '材质', key: 'material' },
        { title: '碎银', key: 'amount' },
        { title: '缘材初', key: 'yuancai' }
      ],
      data: [
        {
          chapter: '1-1',
          material: 2,
          amount: 5,
          yuancai: 10
        }
      ]
    },
    skills: {
      columns: [
        { title: '技能重数', key: 'level' },
        { title: '缘材进', key: 'yuancai' }
      ],
      data: [
        {
          level: '1-1',
          yuancai: 1
        }
      ]
    },
    props: {
      columns: [
        { title: '章-节', key: 'chapter' },
        { title: '花期之谱', key: 'huaqizhipu' },
        { title: '花期之谱', key: 'huaqizhipu' },
        { title: '花期之谱', key: 'huaqizhipu' },
      ],
      data: [
        {
          chapter: '1-1',
          huaqizhipu: ['力道+4', '洞察+4']
        }
      ]
    }
  }
];
