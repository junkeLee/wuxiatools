import { create } from 'dva-core';
import createLoading from 'dva-loading';

let app;
let store;
let dispatch;

function createApp(opt) {
  // redux日志
  // opt.onAction = [createLogger()];
  app = create(opt);
  app.use(createLoading({}));
  app.use({
    onError(err) {
      console.log(err);
    }
  });

  if (!global.registered) opt.models.forEach((model) => app.model(model));
  global.registered = true;
  app.start();

  store = app._store;
  app.getStore = () => store;

  dispatch = store.dispatch;

  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return new Promise((resolve) => {
      if (app?.dispatch) {
        resolve(app.dispatch);
      }
    });
  },
  getStore() {
    // 这个是在非组件的文件中获取Store的方法, 不需要可以不暴露
    return new Promise(resolve => {
      if (app?._store) {
        resolve(app?._store);
      }
    })
  }
};
