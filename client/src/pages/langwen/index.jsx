import Taro from '@tarojs/taro';
import { PageContainer, ProGroupList } from '@/components';
import { list } from './data';

import './index.scss';

const Langwen = () => {
  return (
    <PageContainer noPadding>
      <ProGroupList
        list={list}
        onItemChange={item => {
          Taro.navigateTo({ url: `/pages/langwen/detail/index?id=${item.id}` });
        }}
      />
    </PageContainer>
  );
};

export default Langwen;
