import Taro from '@tarojs/taro';

export default async(name, data) => {
  return await Taro.cloud.callFunction({
    name,
    data
  });
};
