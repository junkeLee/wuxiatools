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

/**
 * 生成group
 * @param {*} list 
 * @param {*} groups 
 * @returns 
 */
export const buildGroup = (list, groups) => {
  for (const item of list) {
    const group = groups.find(g => g.category === item?.category);
    group.children.push(item);
  }
  return groups;
};