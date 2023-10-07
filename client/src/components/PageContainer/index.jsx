import { useEffect } from 'react';
import Taro from '@tarojs/taro';
import cx from 'classnames';
import { View } from '@tarojs/components';

import './index.scss';

const PageContainer = ({ title, noPadding, children }) => {

  useEffect(() => {
    if (!title) return;
    Taro.setNavigationBarTitle({ title });
  }, [title]);

  return (
    <View className={cx('page-container', { 'no-padding': noPadding })}>
      {children}
    </View>
  );
};

export default PageContainer;