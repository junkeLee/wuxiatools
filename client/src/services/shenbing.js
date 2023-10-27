import request from '@/utils/request';
import { setGlobalData } from '@/utils/util';
import Taro from '@tarojs/taro';

export const getList = async() => {
  const localData = Taro?.globalData?.shenbingList;
  if (localData?.length > 0) {
    return localData;
  }

  const res = await request('list', {
    database: 'shenbingList'
  });

  setGlobalData('shenbingList', res?.data);
  return res;
};

export const getDetail = async(id) => {
  const res = await request('detail', {
    database: 'shenbingDetailList',
    id
  });
};