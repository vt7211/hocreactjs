import localStorage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import counter from './counter';
import common from './common';

const counterConfig = {
  key: 'counter',
  storage: localStorage,
  whitelist: ['number'],
};

const commonConfig = {
  key: 'common',
  storage: localStorage,
  whitelist: ['theme'],
};

export default {
  counter: persistReducer(counterConfig, counter),
  common: persistReducer(commonConfig, common),
};
