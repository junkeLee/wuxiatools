import Taro from '@tarojs/taro';
import { PageContainer, ProDetailList, ProTable } from '@/components';
import { detailList } from '../data';

import './index.scss';

const Detail = () => {
  const detail = detailList.find(item => item?.id === 1);

  Taro.setNavigationBarTitle({
    title: detail.name
  });

  const list = [
    { label: '类型', value: detail.type },
    { label: '品质', value: detail.quality },
    { label: '满级总消耗个数', value: detail.count },
    { label: '满级总消耗碎银', value: detail.spend }
  ];

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
