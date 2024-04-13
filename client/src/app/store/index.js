import {configureStore} from '@reduxjs/toolkit';
import campaignReducer from '../feature/campaignSlice'
import categoryReduser from '../feature/categorySlice'
import userSlice from '../feature/userSlice';

const store = configureStore({
    reducer: {
        campaign : campaignReducer,
        category : categoryReduser,
        user: userSlice
    }
});

export default store