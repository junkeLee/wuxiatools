import Taro, { useShareAppMessage } from '@tarojs/taro';
import { PageContainer } from '@/components';
import { Grid } from '@nutui/nutui-react-taro';
import toast from '@/utils/toast';
import { menus } from './helper';

import './index.scss';

function Index() {
  
  useShareAppMessage(() => ({
    title: '天刀资料站',
    path: '/pages/index/index'
  }));

  return (
    <PageContainer>
      <Grid>
        {menus.map(item => (
          <Grid.Item
            key={item.code}
            text={item.name}
            onClick={() => {
              if (!item.path) {
                toast.message('功能开发中，敬请期待');
                return;
              }
              Taro.navigateTo({ url: item.path });
            }}
          ></Grid.Item>
        ))}
      </Grid>
    </PageContainer>
  );
};

export default Index
