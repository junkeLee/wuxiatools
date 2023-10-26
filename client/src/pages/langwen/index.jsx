import { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { PageContainer, ProGroupList } from '@/components';
import { getList } from '@/services/langwen';

import './index.scss';
import { transformListToGroup } from './helper';

const Langwen = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
    const res = await getList();
    if (res?.code !== 200) return;

    setList(transformListToGroup(res?.data));
  };

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
