import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice';

import rootReducer from './root-reducer';

export const store = configureStore({
  reducer: rootReducer,
  auth: authReducer,
});
