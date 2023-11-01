import { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { PageContainer, ProDetailList, ProTable } from '@/components';

import './index.scss';
import { getDetail } from '@/services';
import { DB } from '@/utils/constants';

const Detail = () => {
  const [detail, setDetail] = useState({});
  const { id } = Taro.getCurrentInstance().router.params || {};

  useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
    const res = await getDetail({ database: DB.ShenbingDetailList, id });
    if (res?.code !== 200) return;

    setDetail(res?.data);

    Taro.setNavigationBarTitle({
      title: res?.data?.name
    });
  };

  const list = [
    { label: '品质', value: detail.quality },
    { label: '每种材质数量', value: detail.materialCount },
    { label: '总碎银', value: detail.amount },
    { label: '缘材初', value: detail.yuanCaiChu },
    { label: '缘材进', value: detail.yuanCaiJin },
    { label: '缘材深', value: detail.yuanCaiShen || '-' },
    { label: '满重属性', value: detail.summary },
    { label: '章节解锁', value: detail.chapters }
  ];

  return (
    <PageContainer>
      <ProDetailList
        list={list}
      />
      <ProTable
        tables={[detail.spends, detail.props, detail.skills]}
      />
    </PageContainer>
  );
};

export default Detail;
