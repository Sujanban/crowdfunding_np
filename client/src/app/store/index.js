import {configureStore} from '@reduxjs/toolkit';
import campaignReducer from '../feature/campaignSlice'
import categoryReduser from '../feature/categorySlice'

const store = configureStore({
    reducer: {
        campaign : campaignReducer,
        category : categoryReduser
    }
});

export default store