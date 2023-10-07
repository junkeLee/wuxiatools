import Taro from '@tarojs/taro';
import { Cell, Table } from '@nutui/nutui-react-taro';
import PageContainer from '@/components/PageContainer';
import { detailList } from '../data';
import { columns, buildDetailList } from './helper';

import './index.scss';

const Detail = () => {
  const detail = detailList.find(i => i.id === 1);

  Taro.setNavigationBarTitle({
    title: detail.name
  });

  return (
    <PageContainer>
      <Cell.Group>
        {buildDetailList(detail).map((item, index) => (
          <Cell key={index} title={item.label} extra={item.value} />
        ))}
      </Cell.Group>
      <Table
        columns={columns}
        data={detail.levels}
      />
    </PageContainer>
  );
};

export default Detail;
