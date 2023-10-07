import { Cell } from '@nutui/nutui-react-taro';

import './index.scss';

const ProDetailList = ({ list }) => {
  return (
    <Cell.Group className='pro-detail-list'>
      {list.map((item, index) => (
        <Cell key={index} title={item.label} extra={item.value} />
      ))}
    </Cell.Group>
  );
};

export default ProDetailList;
