import Taro from '@tarojs/taro';
import { PageContainer, ProDetailList, ProTable } from '@/components';
// import { detailList } from '../data';

import './index.scss';

const Detail = () => {

  const detail = {};

  Taro.setNavigationBarTitle({
    title: detail.name
  });

  const list = [
    { label: '品质', value: detail.quality },
    { label: '每种材质数量', value: detail.materialTotalCount },
    { label: '总碎银', value: detail.totalAmount },
    { label: '缘材初', value: detail.totalYuanCaiChu },
    { label: '缘材进', value: detail.totalYuanCaiJin },
    { label: '缘材深', value: detail.totalYuanCaiShen || '-' },
    { label: '满重属性', value: detail.totalProps },
    { label: '技能加成', value: detail.totalSkills },
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
