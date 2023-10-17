import request from '@/utils/request';

export const getList = async() => {
  return await request('list', {
    database: 'langwenList'
  });
};

export const getDetail = async(id) => {
  return await request('detail', {
    database: 'langwenDetail',
    id
  });
};
