import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/core/rtk/store';
import { MainRoute } from './src/core/navigation/MainRoute';

export default function App() {
  return (
    <Provider store={store}>
      <MainRoute />
    </Provider >
  );
}
