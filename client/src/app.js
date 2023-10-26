import Taro, { useLaunch } from '@tarojs/taro';

import './app.scss';

const App = props => {
  useLaunch(() => {
    Taro.cloud.init({
      env: 'wuxiatools-prod-1gsq3lya4c3c861d'
    });
    Taro.globalData = {};
  });

  return props.children;
};

export default App;
