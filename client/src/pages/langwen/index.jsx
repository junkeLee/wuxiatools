import Taro from '@tarojs/taro';
import { Cell } from '@nutui/nutui-react-taro';
import { Right } from '@nutui/icons-react-taro';
import PageContainer from '@/components/PageContainer';
import { list } from './data';

import './index.scss';

const Langwen = () => {

  return (
    <PageContainer noPadding>
      {list.map(group => (
        <Cell.Group key={group.id} title={group.title}>
          {group.children.map(item => (
            <Cell
              key={item.id}
              align='center'
              title={item.title}
              description={item.desc}
              extra={<Right />}
              onClick={() => Taro.navigateTo({ url: `/pages/langwen/detail/index?id=${item.id}` })}
            />
          ))}
        </Cell.Group>
      ))}
    </PageContainer>
  );
};

export default Langwen;
