import { useEffect, useState } from 'react';
import Taro, { useShareAppMessage } from '@tarojs/taro';
import { PageContainer, ProGroupList } from '@/components';
import { getList } from '@/services';
import { DB } from '@/utils/constants';
import { transformListToGroup } from './helper';

import './index.scss';

const Langwen = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
    const res = await getList(DB.LangwenList);
    if (res?.code !== 200) return;

    setList(transformListToGroup(res?.data));
  };

  useShareAppMessage(() => ({
    title: '琅纹列表',
    path: '/pages/langwen/index'
  }));

  return (
    <PageContainer noPadding>
      <ProGroupList
        list={list}
        onItemChange={item => {
          Taro.navigateTo({ url: `/pages/langwen/detail/index?id=${item._id}` });
        }}
      />
    </PageContainer>
  );
};

export default Langwen;
