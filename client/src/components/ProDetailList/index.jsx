import { View } from '@tarojs/components';
import { Cell } from '@nutui/nutui-react-taro';

import './index.scss';

const ProDetailList = ({ list }) => {

  const renderValueList = list => {
    return (
      <View className='flex-column'>
        {list.map((item, index) => (
          <View key={index}>{item.name}: {item.value}</View>
        ))}
      </View>
    );
  };

  return (
    <Cell.Group className='pro-detail-list'>
      {list.map(({ label, value }, index) => (
        <Cell
          key={index}
          title={label}
          extra={Array.isArray(value) ? renderValueList(value) : value}
        />
      ))}
    </Cell.Group>
  );
};

export default ProDetailList;
