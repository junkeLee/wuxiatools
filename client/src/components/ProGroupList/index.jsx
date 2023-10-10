import { View } from '@tarojs/components';
import { Cell } from '@nutui/nutui-react-taro';
import { Right } from '@nutui/icons-react-taro';
import './index.scss';

const ProGroupList = ({ list, onItemChange }) => {
  return (
    <View className='pro-group-list'>
      {list.map(group => (
        <Cell.Group key={group.id} title={group.name}>
          {group.children.map(item => (
            <Cell
              key={item.id}
              title={item.name}
              description={item.desc}
              align='center'
              extra={<Right />}
              onClick={() => onItemChange?.(item)}
            />
          ))}
        </Cell.Group>
      ))}
    </View>
  );
};

export default ProGroupList;
