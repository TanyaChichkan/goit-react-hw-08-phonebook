import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducer/rootReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {persistStore,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from 'redux-persist';
// import logger from 'redux-logger';

// const store = createStore(phoneBookReducer, composeWithDevTools());



const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
});

export let persistor = persistStore(store); 

export default store;
