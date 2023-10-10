import Taro from '@tarojs/taro';
import { PageContainer, ProGroupList } from '@/components';
import { list } from './data';

import './index.scss';

const Shenbing = () => {
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
