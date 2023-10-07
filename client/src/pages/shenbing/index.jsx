import { Cell } from '@nutui/nutui-react-taro';
import { Right } from '@nutui/icons-react-taro';
import PageContainer from '@/components/PageContainer';
import { list } from './data';

import './index.scss';

const Shenbing = () => {
  return (
    <PageContainer noPadding>
      {list.map(group => (
        <Cell.Group key={group.id} title={group.name}>
          {group.children.map(item => (
            <Cell key={item.id} title={item.name} extra={<Right />} />
          ))}
        </Cell.Group>
      ))}
    </PageContainer>
  );
};

export default Shenbing;
