import Taro from '@tarojs/taro';
import { appName } from './constants';

export const setNavigatorTitle = (title = appName) => {
  Taro.setNavigationBarTitle({
    title
  });
};