import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/core/rtk/store';
import { MainRoute } from './src/core/navigation/MainRoute';
import { GoogleSigningConfigure } from './src/core/utils/OAuth';

export default function App() {

  useEffect(() => {
    GoogleSigningConfigure();
  }, []);

  return (
    <Provider store={store}>
      <MainRoute />
    </Provider >
  );
}
