import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './slices/adminSlices';     
import typesReducer from './slices/typeSlice';     
import uiReducer from './slices/uiSlice';           

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    types: typesReducer, 
    ui: uiReducer,      
  },
  devTools: true,
});