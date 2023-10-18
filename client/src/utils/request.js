import Taro from '@tarojs/taro';

export default async(name, data) => {
  const { result } = await Taro.cloud.callFunction({
    name,
    data
  });

  return result;
};
