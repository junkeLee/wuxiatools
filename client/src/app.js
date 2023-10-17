import Taro, { useLaunch } from '@tarojs/taro';

import { Provider } from 'react-redux';
import dva from './utils/dva';
import models from './models';

import './app.scss';

let store;

const dvaApp = dva.createApp({
  initialState: {},
  models,
  onReducer: r => (state, action) => {
    const newState = r(state, action);
    if (action?.type === 'user/logout') {
      const initial = r({}, action);
      console.log('退出登录成功，清空store', initial);
      return initial;
    }
    return newState;
  }
});

store = dvaApp.getStore();
Taro.dva = dva;
Taro.globalData = {};

const App = props => {
  useLaunch(() => {
    Taro.cloud.init({
      env: 'wuxiatools-prod-1gsq3lya4c3c861d'
    });
  });

  return <Provider store={store}>{props.children}</Provider>
};

export default App;
