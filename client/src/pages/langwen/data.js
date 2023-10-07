export const list = [
  {
    id: 1,
    name: '天',
    children: [
      {
        id: 1,
        name: '皇天',
        quality: 'jin',
        desc: '力道、洞察、根骨'
      }
    ]
  },
  {
    id: 2,
    name: '地',
    children: [
      {
        id: 2,
        name: '厚土',
        quality: 'jin',
        desc: '身法、气劲、根骨'
      }
    ]
  },
  {
    id: 3,
    name: '混沌',
    children: [
      {
        id: 3,
        name: '道心',
        quality: 'jin',
        desc: '命中、会心、外攻、内攻'
      }
    ]
  }
];

export const detailList = [
  {
    id: 1,
    name: '皇天',
    type: '天',
    quality: '金',
    count: 3,
    spend: 200,
    levels: [
      {
        level: 1,
        props: [
          { id: 1, name: '洞察', value: '4' },
          { id: 2, name: '力道', value: '4' },
          { id: 3, name: '根骨', value: '4' }
        ]
      },
      {
        level: 2,
        props: [
          { id: 4, name: '洞察', value: '8' },
          { id: 5, name: '力道', value: '8' },
          { id: 6, name: '根骨', value: '8' }
        ]
      }
    ]
  }
];