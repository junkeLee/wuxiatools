const list = [
  {
    _id: 1,
    name: '天·日',
    category: '天',
    quality: '蓝',
    count: 55,
    spend: 310,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '力道', key: 'lidao' }
      ],
      data: [
        { level: 1, lidao: 4 },
        { level: 2, lidao: 8 },
        { level: 3, lidao: 12 },
        { level: 4, lidao: 16 },
        { level: 5, lidao: 20 },
        { level: 6, lidao: 24 },
        { level: 7, lidao: 28 },
        { level: 8, lidao: 32 },
        { level: 9, lidao: 36 },
        { level: 10, lidao: 40 }
      ]
    }
  },
  {
    _id: 2,
    name: '天·月',
    category: '天',
    quality: '蓝',
    count: 55,
    spend: 310,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '洞察', key: 'dongcha' }
      ],
      data: [
        { level: 1, dongcha: 4 },
        { level: 2, dongcha: 8 },
        { level: 3, dongcha: 12 },
        { level: 4, dongcha: 16 },
        { level: 5, dongcha: 20 },
        { level: 6, dongcha: 24 },
        { level: 7, dongcha: 28 },
        { level: 8, dongcha: 32 },
        { level: 9, dongcha: 36 },
        { level: 10, dongcha: 40 }
      ]
    }
  },
  {
    _id: 3,
    name: '天·云',
    category: '天',
    quality: '紫',
    count: 82,
    spend: 1830,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '力道', key: 'lidao' },
        { title: '洞察', key: 'dongcha' }
      ],
      data: [
        { level: 1, lidao: 4, dongcha: 4 },
        { level: 2, lidao: 8, dongcha: 8 },
        { level: 3, lidao: 12, dongcha: 12 },
        { level: 4, lidao: 16, dongcha: 16 },
        { level: 5, lidao: 20, dongcha: 20 },
        { level: 6, lidao: 24, dongcha: 24 },
        { level: 7, lidao: 28, dongcha: 28 },
        { level: 8, lidao: 32, dongcha: 32 },
        { level: 9, lidao: 36, dongcha: 36 },
        { level: 10, lidao: 40, dongcha: 40 }
      ]
    }
  },
  {
    _id: 4,
    name: '天·雨',
    category: '天',
    quality: '紫',
    count: 82,
    spend: 1830,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '气劲', key: 'qijin' },
        { title: '根骨', key: 'gengu' }
      ],
      data: [
        { level: 1, qijin: 4, gengu: 4 },
        { level: 2, qijin: 8, gengu: 8 },
        { level: 3, qijin: 12, gengu: 12 },
        { level: 4, qijin: 16, gengu: 16 },
        { level: 5, qijin: 20, gengu: 20 },
        { level: 6, qijin: 24, gengu: 24 },
        { level: 7, qijin: 28, gengu: 28 },
        { level: 8, qijin: 32, gengu: 32 },
        { level: 9, qijin: 36, gengu: 36 },
        { level: 10, qijin: 40, gengu: 40 }
      ]
    }
  },
  {
    _id: 5,
    name: '天·风',
    category: '天',
    quality: '紫',
    count: 82,
    spend: 1830,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '洞察', key: 'dongcha' },
        { title: '根骨', key: 'gengu' }
      ],
      data: [
        { level: 1, dongcha: 4, gengu: 4 },
        { level: 2, dongcha: 8, gengu: 8 },
        { level: 3, dongcha: 12, gengu: 12 },
        { level: 4, dongcha: 16, gengu: 16 },
        { level: 5, dongcha: 20, gengu: 20 },
        { level: 6, dongcha: 24, gengu: 24 },
        { level: 7, dongcha: 28, gengu: 28 },
        { level: 8, dongcha: 32, gengu: 32 },
        { level: 9, dongcha: 36, gengu: 36 },
        { level: 10, dongcha: 40, gengu: 40 }
      ]
    }
  },
  {
    _id: 6,
    name: '天·虹',
    category: '天',
    quality: '紫',
    count: 92,
    spend: 3306,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '力道', key: 'lidao' },
        { title: '外攻', key: 'waigong' }
      ],
      data: [
        { level: 1, lidao: 4, waigong: 4 },
        { level: 2, lidao: 8, waigong: 8 },
        { level: 3, lidao: 12, waigong: 12 },
        { level: 4, lidao: 16, waigong: 16 },
        { level: 5, lidao: 20, waigong: 20 },
        { level: 6, lidao: 24, waigong: 24 },
        { level: 7, lidao: 28, waigong: 28 },
        { level: 8, lidao: 32, waigong: 32 },
        { level: 9, lidao: 36, waigong: 36 },
        { level: 10, lidao: 40, waigong: 40 }
      ]
    }
  },
  {
    _id: 7,
    name: '天·雷',
    category: '天',
    quality: '紫',
    count: 92,
    spend: 3306,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '气劲', key: 'qijin' },
        { title: '内攻', key: 'neigong' }
      ],
      data: [
        { level: 1, qijin: 4, neigong: 2 },
        { level: 2, qijin: 8, neigong: 5 },
        { level: 3, qijin: 12, neigong: 7 },
        { level: 4, qijin: 16, neigong: 10 },
        { level: 5, qijin: 20, neigong: 12 },
        { level: 6, qijin: 24, neigong: 15 },
        { level: 7, qijin: 28, neigong: 17 },
        { level: 8, qijin: 32, neigong: 20 },
        { level: 9, qijin: 36, neigong: 22 },
        { level: 10, qijin: 40, neigong: 25 }
      ]
    }
  },
  {
    _id: 8,
    name: '天·皇天',
    category: '天',
    quality: '金',
    count: 93,
    spend: 9093,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '力道', key: 'lidao' },
        { title: '洞察', key: 'dongcha' },
        { title: '根骨', key: 'gengu' }
      ],
      data: [
        { level: 1, lidao: 4, dongcha: 4, gengu: 4 },
        { level: 2, lidao: 8, dongcha: 8, gengu: 8 },
        { level: 3, lidao: 12, dongcha: 12, gengu: 12 },
        { level: 4, lidao: 16, dongcha: 16, gengu: 16 },
        { level: 5, lidao: 20, dongcha: 20, gengu: 20 },
        { level: 6, lidao: 24, dongcha: 24, gengu: 24 },
        { level: 7, lidao: 28, dongcha: 28, gengu: 28 },
        { level: 8, lidao: 32, dongcha: 32, gengu: 32 },
        { level: 9, lidao: 36, dongcha: 36, gengu: 36 },
        { level: 10, lidao: 40, dongcha: 40, gengu: 40 }
      ]
    }
  },
  {
    _id: 9,
    name: '天·玄宙',
    category: '天',
    quality: '金',
    count: 157,
    spend: 16440,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '洞察', key: 'dongcha' },
        { title: '命中', key: 'mingzhong' },
        { title: '外攻', key: 'waigong' }
      ],
      data: [
        { level: 1, dongcha: 4, mingzhong: '0.6%', waigong: 9 },
        { level: 2, dongcha: 8, mingzhong: '1.2%', waigong: 18 },
        { level: 3, dongcha: 12, mingzhong: '1.8%', waigong: 26 },
        { level: 4, dongcha: 16, mingzhong: '2.4%', waigong: 35 },
        { level: 5, dongcha: 20, mingzhong: '3%', waigong: 44 },
        { level: 6, dongcha: 24, mingzhong: '3.6%', waigong: 53 },
        { level: 7, dongcha: 28, mingzhong: '4.2%', waigong: 62 },
        { level: 8, dongcha: 32, mingzhong: '4.8%', waigong: 70 },
        { level: 9, dongcha: 36, mingzhong: '5.4%', waigong: 79 },
        { level: 10, dongcha: 40, mingzhong: '6%', waigong: 88 }
      ]
    }
  },
  {
    _id: 10,
    name: '天·银河',
    category: '天',
    quality: '金',
    count: 157,
    spend: 16440,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '根骨', key: 'gengu' },
        { title: '外攻', key: 'waigong' },
        { title: '内攻', key: 'neigong' }
      ],
      data: [
        { level: 1, gengu: 4, waigong: 6, neigong: 4 },
        { level: 2, gengu: 8, waigong: 12, neigong: 7 },
        { level: 3, gengu: 12, waigong: 18, neigong: 11 },
        { level: 4, gengu: 16, waigong: 24, neigong: 15 },
        { level: 5, gengu: 20, waigong: 30, neigong: 18 },
        { level: 6, gengu: 24, waigong: 36, neigong: 22 },
        { level: 7, gengu: 28, waigong: 42, neigong: 26 },
        { level: 8, gengu: 32, waigong: 48, neigong: 30 },
        { level: 9, gengu: 36, waigong: 54, neigong: 33 },
        { level: 10, gengu: 40, waigong: 60, neigong: 37 }
      ]
    }
  },
  {
    _id: 11,
    name: '地·山',
    category: '地',
    quality: '蓝',
    count: 55,
    spend: 310,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '气劲', key: 'qijin' }
      ],
      data: [
        { level: 1, qijin: 4 },
        { level: 2, qijin: 8 },
        { level: 3, qijin: 12 },
        { level: 4, qijin: 16 },
        { level: 5, qijin: 20 },
        { level: 6, qijin: 24 },
        { level: 7, qijin: 28 },
        { level: 8, qijin: 32 },
        { level: 9, qijin: 36 },
        { level: 10, qijin: 40 }
      ]
    }
  },
  {
    _id: 12,
    name: '地·水',
    category: '地',
    quality: '蓝',
    count: 55,
    spend: 310,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '身法', key: 'shenfa' }
      ],
      data: [
        { level: 1, shenfa: 4 },
        { level: 2, shenfa: 8 },
        { level: 3, shenfa: 12 },
        { level: 4, shenfa: 16 },
        { level: 5, shenfa: 20 },
        { level: 6, shenfa: 24 },
        { level: 7, shenfa: 28 },
        { level: 8, shenfa: 32 },
        { level: 9, shenfa: 36 },
        { level: 10, shenfa: 40 }
      ]
    }
  },
  {
    _id: 13,
    name: '地·木',
    category: '地',
    quality: '紫',
    count: 82,
    spend: 1830,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '气劲', key: 'qijin' },
        { title: '身法', key: 'shenfa' }
      ],
      data: [
        { level: 1, qijin: 4, shenfa: 4 },
        { level: 2, qijin: 8, shenfa: 8 },
        { level: 3, qijin: 12, shenfa: 12 },
        { level: 4, qijin: 16, shenfa: 16 },
        { level: 5, qijin: 20, shenfa: 20 },
        { level: 6, qijin: 24, shenfa: 24 },
        { level: 7, qijin: 28, shenfa: 28 },
        { level: 8, qijin: 32, shenfa: 32 },
        { level: 9, qijin: 36, shenfa: 36 },
        { level: 10, qijin: 40, shenfa: 40 }
      ]
    }
  },
  {
    _id: 14,
    name: '地·土',
    category: '地',
    quality: '紫',
    count: 82,
    spend: 1830,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '力道', key: 'lidao' },
        { title: '根骨', key: 'gengu' }
      ],
      data: [
        { level: 1, lidao: 4, gengu: 4 },
        { level: 2, lidao: 8, gengu: 8 },
        { level: 3, lidao: 12, gengu: 12 },
        { level: 4, lidao: 16, gengu: 16 },
        { level: 5, lidao: 20, gengu: 20 },
        { level: 6, lidao: 24, gengu: 24 },
        { level: 7, lidao: 28, gengu: 28 },
        { level: 8, lidao: 32, gengu: 32 },
        { level: 9, lidao: 36, gengu: 36 },
        { level: 10, lidao: 40, gengu: 40 }
      ]
    }
  },
  {
    _id: 15,
    name: '地·金',
    category: '地',
    quality: '紫',
    count: 82,
    spend: 1830,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '身法', key: 'shenfa' },
        { title: '根骨', key: 'gengu' }
      ],
      data: [
        { level: 1, shenfa: 4, gengu: 4 },
        { level: 2, shenfa: 8, gengu: 8 },
        { level: 3, shenfa: 12, gengu: 12 },
        { level: 4, shenfa: 16, gengu: 16 },
        { level: 5, shenfa: 20, gengu: 20 },
        { level: 6, shenfa: 24, gengu: 24 },
        { level: 7, shenfa: 28, gengu: 28 },
        { level: 8, shenfa: 32, gengu: 32 },
        { level: 9, shenfa: 36, gengu: 36 },
        { level: 10, shenfa: 40, gengu: 40 }
      ]
    }
  },
  {
    _id: 16,
    name: '地·泽',
    category: '地',
    quality: '紫',
    count: 92,
    spend: 3306,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '身法', key: 'shenfa' },
        { title: '气血', key: 'qixue' }
      ],
      data: [
        { level: 1, shenfa: 4, qixue: 40 },
        { level: 2, shenfa: 8, qixue: 80 },
        { level: 3, shenfa: 12, qixue: 120 },
        { level: 4, shenfa: 16, qixue: 160 },
        { level: 5, shenfa: 20, qixue: 200 },
        { level: 6, shenfa: 24, qixue: 240 },
        { level: 7, shenfa: 28, qixue: 280 },
        { level: 8, shenfa: 32, qixue: 320 },
        { level: 9, shenfa: 36, qixue: 360 },
        { level: 10, shenfa: 40, qixue: 400 }
      ]
    }
  },
  {
    _id: 17,
    name: '地·沙',
    category: '地',
    quality: '紫',
    count: 92,
    spend: 3306,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '洞察', key: 'dongcha' },
        { title: '气血', key: 'qixue' }
      ],
      data: [
        { level: 1, dongcha: 4, qixue: 40 },
        { level: 2, dongcha: 8, qixue: 80 },
        { level: 3, dongcha: 12, qixue: 120 },
        { level: 4, dongcha: 16, qixue: 160 },
        { level: 5, dongcha: 20, qixue: 200 },
        { level: 6, dongcha: 24, qixue: 240 },
        { level: 7, dongcha: 28, qixue: 280 },
        { level: 8, dongcha: 32, qixue: 320 },
        { level: 9, dongcha: 36, qixue: 360 },
        { level: 10, dongcha: 40, qixue: 400 }
      ]
    }
  },
  {
    _id: 18,
    name: '地·厚土',
    category: '地',
    quality: '金',
    count: 93,
    spend: 9093,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '气劲', key: 'qijin' },
        { title: '身法', key: 'shenfa' },
        { title: '根骨', key: 'gengu' }
      ],
      data: [
        { level: 1, qijin: 4, shenfa: 4, gengu: 4 },
        { level: 2, qijin: 8, shenfa: 8, gengu: 8 },
        { level: 3, qijin: 12, shenfa: 12, gengu: 12 },
        { level: 4, qijin: 16, shenfa: 16, gengu: 16 },
        { level: 5, qijin: 20, shenfa: 20, gengu: 20 },
        { level: 6, qijin: 24, shenfa: 24, gengu: 24 },
        { level: 7, qijin: 28, shenfa: 28, gengu: 28 },
        { level: 8, qijin: 32, shenfa: 32, gengu: 32 },
        { level: 9, qijin: 36, shenfa: 36, gengu: 36 },
        { level: 10, qijin: 40, shenfa: 40, gengu: 40 }
      ]
    }
  },
  {
    _id: 19,
    name: '地·竹川',
    category: '地',
    quality: '金',
    count: 157,
    spend: 16440,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '身法', key: 'shenfa' },
        { title: '格挡', key: 'gedang' },
        { title: '内防', key: 'neifang' }
      ],
      data: [
        { level: 1, shenfa: 4, gedang: '0.6%', neifang: 18 },
        { level: 2, shenfa: 8, gedang: '1.2%', neifang: 35 },
        { level: 3, shenfa: 12, gedang: '1.8%', neifang: 53 },
        { level: 4, shenfa: 16, gedang: '2.4%', neifang: 70 },
        { level: 5, shenfa: 20, gedang: '3%', neifang: 88 },
        { level: 6, shenfa: 24, gedang: '3.6%', neifang: 106 },
        { level: 7, shenfa: 28, gedang: '4.2%', neifang: 123 },
        { level: 8, shenfa: 32, gedang: '4.8%', neifang: 141 },
        { level: 9, shenfa: 36, gedang: '5.4%', neifang: 159 },
        { level: 10, shenfa: 40, gedang: '6%', neifang: 176 }
      ]
    }
  },
  {
    _id: 20,
    name: '地·梅林',
    category: '地',
    quality: '金',
    count: 157,
    spend: 16440,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '根骨', key: 'gengu' },
        { title: '气血', key: 'qixue' },
        { title: '外防', key: 'waifang' }
      ],
      data: [
        { level: 1, gengu: 4, qixue: 59, waifang: 12 },
        { level: 2, gengu: 8, qixue: 118, waifang: 24 },
        { level: 3, gengu: 12, qixue: 177, waifang: 35 },
        { level: 4, gengu: 16, qixue: 236, waifang: 47 },
        { level: 5, gengu: 20, qixue: 295, waifang: 59 },
        { level: 6, gengu: 24, qixue: 354, waifang: 71 },
        { level: 7, gengu: 28, qixue: 413, waifang: 83 },
        { level: 8, gengu: 32, qixue: 472, waifang: 94 },
        { level: 9, gengu: 36, qixue: 531, waifang: 106 },
        { level: 10, gengu: 40, qixue: 590, waifang: 118 }
      ]
    }
  },
  {
    _id: 21,
    name: '混沌·上清',
    category: '混沌',
    quality: '紫',
    count: 102,
    spend: 5955,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '外攻', key: 'waigong' },
        { title: '内攻', key: 'neigong' },
        { title: '命中', key: 'mingzhong' }
      ],
      data: [
        { level: 1, waigong: 3, neigong: 2, mingzhong: '0.5%' },
        { level: 2, waigong: 6, neigong: 3, mingzhong: '1%' },
        { level: 3, waigong: 8, neigong: 5, mingzhong: '1.5%' },
        { level: 4, waigong: 11, neigong: 7, mingzhong: '2%' },
        { level: 5, waigong: 14, neigong: 9, mingzhong: '2.5%' },
        { level: 6, waigong: 17, neigong: 10, mingzhong: '3%' },
        { level: 7, waigong: 19, neigong: 12, mingzhong: '3.5%' },
        { level: 8, waigong: 22, neigong: 14, mingzhong: '4%' },
        { level: 9, waigong: 25, neigong: 15, mingzhong: '4.5%' },
        { level: 10, waigong: 28, neigong: 17, mingzhong: '5%' }
      ]
    }
  },
  {
    _id: 22,
    name: '混沌·太清',
    category: '混沌',
    quality: '金',
    count: 102,
    spend: 5955,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '外防', key: 'waifang' },
        { title: '内防', key: 'neifang' },
        { title: '格挡', key: 'gedang' }
      ],
      data: [
        { level: 1, waifang: 6, neifang: 6, mingzhong: '0.5%' },
        { level: 2, waifang: 11, neifang: 11, mingzhong: '1%' },
        { level: 3, waifang: 17, neifang: 17, mingzhong: '1.5%' },
        { level: 4, waifang: 22, neifang: 22, mingzhong: '2%' },
        { level: 5, waifang: 28, neifang: 28, mingzhong: '2.5%' },
        { level: 6, waifang: 33, neifang: 33, mingzhong: '3%' },
        { level: 7, waifang: 39, neifang: 39, mingzhong: '3.5%' },
        { level: 8, waifang: 44, neifang: 44, mingzhong: '4%' },
        { level: 9, waifang: 50, neifang: 50, mingzhong: '4.5%' },
        { level: 10, waifang: 55, neifang: 55, mingzhong: '5%' }
      ]
    }
  },
  {
    _id: 23,
    name: '混沌·道心',
    category: '混沌',
    quality: '金',
    count: 230,
    spend: 32880,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '会心', key: 'huixin' },
        { title: '外攻', key: 'waigong' },
        { title: '内攻', key: 'neigong' }
      ],
      data: [
        { level: 1, huixin: 4, waigong: 59, neigong: 12 },
        { level: 2, huixin: 8, waigong: 118, neigong: 24 },
        { level: 3, huixin: 12, waigong: 177, neigong: 35 },
        { level: 4, huixin: 16, waigong: 236, neigong: 47 },
        { level: 5, huixin: 20, waigong: 295, neigong: 59 },
        { level: 6, huixin: 24, waigong: 354, neigong: 71 },
        { level: 7, huixin: 28, waigong: 413, neigong: 83 },
        { level: 8, huixin: 32, waigong: 472, neigong: 94 },
        { level: 9, huixin: 36, waigong: 531, neigong: 106 },
        { level: 10, huixin: 40, waigong: 590, neigong: 118 }
      ]
    }
  },
  {
    _id: 24,
    name: '混沌·神人',
    category: '混沌',
    quality: '金',
    count: 230,
    spend: 32880,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '韧劲', key: 'renjin' },
        { title: '外防', key: 'waifang' },
        { title: '内防', key: 'neifang' }
      ],
      data: [
        { level: 1, renjin: 4, waifang: 59, neifang: 12 },
        { level: 2, renjin: 8, waifang: 118, neifang: 24 },
        { level: 3, renjin: 12, waifang: 177, neifang: 35 },
        { level: 4, renjin: 16, waifang: 236, neifang: 47 },
        { level: 5, renjin: 20, waifang: 295, neifang: 59 },
        { level: 6, renjin: 24, waifang: 354, neifang: 71 },
        { level: 7, renjin: 28, waifang: 413, neifang: 83 },
        { level: 8, renjin: 32, waifang: 472, neifang: 94 },
        { level: 9, renjin: 36, waifang: 531, neifang: 106 },
        { level: 10, renjin: 40, waifang: 590, neifang: 118 }
      ]
    }
  },
  {
    _id: 23,
    name: '混沌·道心',
    category: '混沌',
    quality: '金',
    count: 230,
    spend: 32880,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '会心', key: 'huixin' },
        { title: '外攻', key: 'waigong' },
        { title: '内攻', key: 'neigong' }
      ],
      data: [
        { level: 1, huixin: 4, waigong: 59, neigong: 12 },
        { level: 2, huixin: 8, waigong: 118, neigong: 24 },
        { level: 3, huixin: 12, waigong: 177, neigong: 35 },
        { level: 4, huixin: 16, waigong: 236, neigong: 47 },
        { level: 5, huixin: 20, waigong: 295, neigong: 59 },
        { level: 6, huixin: 24, waigong: 354, neigong: 71 },
        { level: 7, huixin: 28, waigong: 413, neigong: 83 },
        { level: 8, huixin: 32, waigong: 472, neigong: 94 },
        { level: 9, huixin: 36, waigong: 531, neigong: 106 },
        { level: 10, huixin: 40, waigong: 590, neigong: 118 }
      ]
    }
  },
  {
    _id: 24,
    name: '混沌·神人',
    category: '混沌',
    quality: '金',
    count: 230,
    spend: 32880,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '韧劲', key: 'renjin' },
        { title: '外防', key: 'waifang' },
        { title: '内防', key: 'neifang' }
      ],
      data: [
        { level: 1, renjin: '1.11%', waifang: 10, neifang: 10 },
        { level: 2, renjin: '2.22%', waifang: 20, neifang: 20 },
        { level: 3, renjin: '3.33%', waifang: 30, neifang: 30 },
        { level: 4, renjin: '4.44%', waifang: 40, neifang: 40 },
        { level: 5, renjin: '5.56%', waifang: 50, neifang: 50 },
        { level: 6, renjin: '6.67%', waifang: 60, neifang: 60 },
        { level: 7, renjin: '7.78%', waifang: 70, neifang: 70 },
        { level: 8, renjin: '8.89%', waifang: 80, neifang: 80 },
        { level: 9, renjin: '10%', waifang: 90, neifang: 90 },
        { level: 10, renjin: '11.11%', waifang: 100, neifang: 100 }
      ]
    }
  },
  {
    _id: 25,
    name: '混沌·凌霄',
    category: '混沌',
    quality: '金',
    count: 230,
    spend: 32880,
    props: {
      title: '属性表',
      columns: [
        { title: '等级', key: 'level' },
        { title: '命中', key: 'mingzhong' },
        { title: '格挡', key: 'gedang' },
        { title: '会伤', key: 'huishang' },
        { title: '气血', key: 'qixue' }
      ],
      data: [
        { level: 1, mingzhong: '0.6%', gedang: '0.6%', huishang: '0.6%', qixue: 146 },
        { level: 2, mingzhong: '1.2%', gedang: '1.2%', huishang: '1.2%', qixue: 292 },
        { level: 3, mingzhong: '1.8%', gedang: '1.8%', huishang: '1.8%', qixue: 438 },
        { level: 4, mingzhong: '2.4%', gedang: '2.4%', huishang: '2.4%', qixue: 584 },
        { level: 5, mingzhong: '3%', gedang: '3%', huishang: '3%', qixue: 730 },
        { level: 6, mingzhong: '3.6%', gedang: '3.6%', huishang: '3.6%', qixue: 876 },
        { level: 7, mingzhong: '4.2%', gedang: '4.2%', huishang: '4.2%', qixue: 1022 },
        { level: 8, mingzhong: '4.8%', gedang: '4.8%', huishang: '4.8%', qixue: 1168 },
        { level: 9, mingzhong: '5.4%', gedang: '5.4%', huishang: '5.4%', qixue: 1314 },
        { level: 10, mingzhong: '6%', gedang: '6%', huishang: '6%', qixue: 1460 }
      ]
    }
  }
];
