import Taro from '@tarojs/taro';
import { PageContainer } from '@/components';
import { Grid } from '@nutui/nutui-react-taro';
import { Dongdong } from '@nutui/icons-react-taro';
import { menus } from './helper';

import './index.scss';

function Index() {
  return (
    <PageContainer>
      <Grid>
        {menus.map(item => (
          <Grid.Item
            key={item.code}
            text={item.name}
            onClick={() => Taro.navigateTo({ url: item.path })}
          ><Dongdong /></Grid.Item>
        ))}
      </Grid>
    </PageContainer>
  );
};

export default Index
