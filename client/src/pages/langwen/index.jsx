import { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import _ from 'lodash';
import { PageContainer, ProGroupList } from '@/components';
import { getList } from '@/services/langwen';
import { transformListToGroup } from './helper';

import './index.scss';

const Langwen = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
    if (Taro.globalData?.langwenList?.length > 0) {
      setList(transformListToGroup(Taro.globalData?.langwenList));
      return;
    }
    const res = await getList();
    if (res?.code !== 200) return;
    _.set(Taro, 'globalData.langwenList', res?.data);
    console.log('taro', Taro);
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
