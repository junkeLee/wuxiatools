import { getList } from '@/services/langwen';

export default {
  namespace: 'langwen',
  state: {
    list: [
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
    ],
    detailList: [
      {
        id: 1,
        name: '皇天',
        type: '天',
        quality: '金',
        count: 3,
        spend: 200,
        props: {
          title: '属性表',
          columns: [
            { title: '等级', key: 'level' },
            { title: '洞察', key: 'dongcha' },
            { title: '力道', key: 'lidao' },
            { title: '根骨', key: 'gengu' }
          ],
          data: [
            {
              level: 1,
              dongcha: 4,
              lidao: 4,
              gengu: 4
            }
          ]
        }
      }
    ]
  },
  effects: {
    *getList(_, { call, put, select }) {
      const list = yield select(({ langwen }) => langwen?.list);
      if (list?.length > 0) return list;

      const res = yield call(getList);
      yield put({
        type: 'save',
        payload: {
          list: res?.data
        }
      });
      return list;
    },
    *getDetail(_, { call, put }) {

    }
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  }
};
