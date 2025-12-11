import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './features/Admin/adminSlices';     
import typesReducer from './features/Pokemon/typeSlice';     
import uiReducer from './features/Ui/uiSlice';           

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    types: typesReducer, 
    ui: uiReducer,      
  },
  devTools: true,
});