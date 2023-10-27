import Taro from '@tarojs/taro';
import _ from 'lodash';
import { appName } from './constants';

export const setNavigatorTitle = (title = appName) => {
  Taro.setNavigationBarTitle({
    title
  });
};

export const setGlobalData = (name, data) => {
  _.set(Taro, `globalData.${name}`, data);
};