import { useEffect } from 'react';
import Taro from '@tarojs/taro';
import { connect } from 'react-redux';
import { PageContainer, ProGroupList } from '@/components';

import './index.scss';

const Langwen = ({ dispatch, list }) => {

  useEffect(() => {
    getList();
  }, []);

  const getList = async() => {
    await dispatch({
      type: 'langwen/getList'
    });
  };

  return (
    <PageContainer noPadding>
      <ProGroupList
        list={list}
        onItemChange={item => {
          Taro.navigateTo({ url: `/pages/langwen/detail/index?id=${item.id}` });
        }}
      />
    </PageContainer>
  );
};

export default connect(({ langwen }) => ({
  ...langwen
}))(Langwen);
