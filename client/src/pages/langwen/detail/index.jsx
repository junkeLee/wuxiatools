import { useEffect, useState } from 'react';
import Taro, { useShareAppMessage } from '@tarojs/taro';
import { PageContainer, ProDetailList, ProTable } from '@/components';
import { getDetail } from '@/services/langwen';
import { setNavigatorTitle } from '@/utils/util';

import './index.scss';

const Detail = () => {
  const [detail, setDetail] = useState({});
  const { id } = Taro.getCurrentInstance().router.params;

  useEffect(() => {
    getData(id);
  }, []);

  const getData = async(id) => {
    const res = await getDetail(id);
    if (res?.code !== 200) return;

    setDetail(res?.data);
    setNavigatorTitle(res?.data?.name);
  };

  const list = [
    { label: '类型', value: detail?.type },
    { label: '品质', value: detail?.quality },
    { label: '满级总消耗个数', value: detail?.count },
    { label: '满级总消耗碎银', value: detail?.spend }
  ];

  useShareAppMessage(() => ({
    title: detail?.name,
    path: `/pages/langwen/detail/index?id=${id}`
  }));

  return (
    <PageContainer>
      <ProDetailList
        list={list}
      />
      <ProTable
        tables={[detail.props]}
      />
    </PageContainer>
  );
};

export default Detail;
