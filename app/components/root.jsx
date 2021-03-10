import React from "react";
import { NativeRouter } from 'react-router-native';
import App from "./app";
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';


const Root = ({store}) => {
  return(
    <Provider store={store}>
      <PaperProvider>
        <NativeRouter>
          <App></App>
        </NativeRouter>
        </PaperProvider>
      </Provider>
  )
};

export default Root;
