import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import axios from "axios";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { authToken } from './redux/reducers/login'

let persistor = persistStore(store);



axios.interceptors.request.use((req) => {


  req.headers.Authorization = `Bearer ${authToken}`;

  return req;
},
  (err) => {
    return Promise.reject(err)
  }
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
