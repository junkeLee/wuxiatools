import { Table } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { formatColumns } from './helper';
import { TextAlign } from '@/utils/constants';

import './index.scss';

const ProTable = ({ title, align = TextAlign.Center, columns, data }) => {
  return (
    <View className='pro-table'>
      <View className='title'>{title}</View>
      <Table
        columns={formatColumns(columns, align)}
        data={data}
      />
    </View>
  );
};

export default ProTable;
