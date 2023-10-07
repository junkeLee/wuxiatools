import { View } from '@tarojs/components';
import { PageContainer, ProDetailList, ProTable } from '@/components';
import { detailList } from '../data';

import './index.scss';

const Detail = () => {

  const detail = detailList.find(i => i.id === 1);

  const renderValueList = list => {
    return (
      <View className='flex-column'>
        {list.map((item, index) => (
          <View key={index}>{item.name}: {item.value}</View>
        ))}
      </View>
    );
  };

  const list = [
    { label: '品质', value: detail.quality },
    { label: '每种材质数量', value: detail.materialTotalCount },
    { label: '总碎银', value: detail.totalAmount },
    { label: '缘材初', value: detail.totalYuanCaiChu },
    { label: '缘材进', value: detail.totalYuanCaiJin },
    { label: '缘材深', value: detail.totalYuanCaiShen || '-' },
    { label: '满重属性', value: renderValueList(detail.totalProps) },
    { label: '技能加成', value: renderValueList(detail.totalSkills) },
  ];

  const tables = [
    {
      title: '消耗表',
      props: detail.spends
    },
    
    {
      title: '属性表',
      props: detail.props
    },
    {
      title: '技能表',
      props: detail.skills
    },
  ];

  return (
    <PageContainer>
      <ProDetailList
        list={list}
      />
      {tables.map((table, index) => (
        <ProTable
          key={index}
          title={table.title}
          {...table.props}
        />
      ))}
    </PageContainer>
  );
};

export default Detail;
