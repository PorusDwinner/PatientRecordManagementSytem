import { configureStore } from "@reduxjs/toolkit";
import reducer from '../Slicer/slicer';

const store = configureStore({
    reducer
});

export default store ;