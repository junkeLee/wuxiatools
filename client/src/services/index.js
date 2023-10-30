import request from '@/utils/request';
import { setGlobalData } from '@/utils/util';
import Taro from '@tarojs/taro';

export const getList = async(database) => {
  const localData = Taro?.globalData?.[database];
  if (localData?.length > 0) {
    return {
      code: 200,
      data: localData
    };
  }

  const res = await request('list', {
    database
  });

  setGlobalData(database, res?.data);
  return res;
};

export const getDetail = data => request('detail', data);