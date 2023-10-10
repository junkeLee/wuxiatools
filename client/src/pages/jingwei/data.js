export const list = [
  {
    id: 1,
    name: '白',
    children: [
      {
        id: 1,
        name: '角·应劫',
        quality: 'jin',
        desc: '外攻、内攻、命中'
      }
    ]
  },
  {
    id: 2,
    name: '黑',
    children: [
      {
        id: 2,
        name: '角·净活',
        quality: 'jin',
        desc: '外防、内防、格挡'
      }
    ]
  },
  {
    id: 3,
    name: '橙',
    children: [
      {
        id: 3,
        name: '星元',
        quality: 'cheng',
        desc: '破伤、灼魂'
      }
    ]
  }
];

export const detailList = [
  {
    id: 1,
    name: '角·应劫',
    type: '白',
    quality: '金',
    count: 3,
    spend: 200,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '外攻', key: 'waigong' },
        { title: '外防', key: 'waifang' },
        { title: '命中', key: 'mingzhong' }
      ],
      data: [
        {
          level: 1,
          waigong: 4,
          waifang: 2,
          mingzhong: 2
        }
      ]
    }
  }
];