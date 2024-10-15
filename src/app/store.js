import {configureStore } from '@reduxjs/toolkit'
import  userReducer  from '../slices/userSlice'
import fruitReducer from '../slices/fruitsSlice'
import counterReducer from '../slices/counterSlice';

export const store = configureStore({
    reducer: {
      //store
        usersInfo: userReducer,
        fruitsInfo: fruitReducer,
        counter: counterReducer,
      },
});


