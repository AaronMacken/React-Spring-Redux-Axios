import React from "react";
import MainRouter from "./MainRouter";
import { Provider } from "react-redux";
import store from "./reduxFiles/store";

function App() {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
}

export default App;
