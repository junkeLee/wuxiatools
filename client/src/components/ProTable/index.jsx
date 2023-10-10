import { Table } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { formatColumns } from './helper';
import { TextAlign } from '@/utils/constants';

import './index.scss';

const ProTable = ({ tables }) => {
  return (
    <View className='pro-table-container'>
      {tables.map((table, index) => {
        const { title, columns, align = TextAlign.Center, data } = table || {};
        return (
          <View key={index} className='pro-table'>
            <View className='title'>{title}</View>
            <Table
              columns={formatColumns(columns, align)}
              data={data}
            />
          </View>
        );
      })}
    </View>
  );
};

export default ProTable;
