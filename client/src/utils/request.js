import Taro from '@tarojs/taro';
import toast from './toast';

export default async(name, data) => {
  toast.loading();
  const { result } = await Taro.cloud.callFunction({
    name,
    data
  });
  toast.hideLoading();
  return result;
};
