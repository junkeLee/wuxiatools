import { useEffect, useState } from 'react';
import Taro, { useShareAppMessage } from '@tarojs/taro';
import { PageContainer, ProGroupList } from '@/components';
import { getList } from '@/services';
import { DB, qualityGroups } from '@/utils/constants';

import './index.scss';
import { buildGroup } from '@/utils/util';

const Shenbing = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
    const res = await getList(DB.ShenbingList);
    if (res?.code !== 200) return;

    const groups = buildGroup(res?.data, qualityGroups);
    setList(groups);
  };

  useShareAppMessage(() => ({
    title: '神兵列表',
    path: '/pages/shenbing/index'
  }));

  return (
    <PageContainer noPadding>
      <ProGroupList
        list={list}
        onItemChange={item => {
          Taro.navigateTo({ url: `/pages/shenbing/detail/index?id=${item?.id}`});
        }}
      />
    </PageContainer>
  );
};

export default Shenbing;
