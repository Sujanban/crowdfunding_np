import {configureStore} from '@reduxjs/toolkit';
import campaignReducer from '../feature/campaignSlice'
import storyReducer from '../feature/storySlice'
import categoryReduser from '../feature/categorySlice'
import userSlice from '../feature/userSlice';

const store = configureStore({
    reducer: {
        campaign : campaignReducer,
        story : storyReducer,
        category : categoryReduser,
        user: userSlice
    }
});

export default store