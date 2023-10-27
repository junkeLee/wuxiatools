const list = [
  {
    _id: 1,
    name: '优昙花',
    quality: '蓝',
    materialTotalCount: 81,
    totalAmount: 680,
    totalYuanCaiChu: 1530,
    totalYuanCaiJin: 44,
    totalYuanCaiShen: null,
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
      title: '消耗表',
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
      title: '技能表',
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
      title: '属性表',
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
]