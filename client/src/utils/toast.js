import Taro from '@tarojs/taro';

export default {
  message(title = '', callback) {
    Taro.showToast({
      title,
      icon: 'none'
    });

    setTimeout(() => callback?.(), 2000);
  },
  loading(title = '数据加载中...') {
    Taro.showLoading({
      title
    });
  },
  hideLoading: Taro.hideLoading
};
