import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginState : false,
    memberName : '',
};

const slicer = createSlice({
    name : 'Member',
    initialState ,
    reducers : {

        setLoginState(state , action) {
            state.loginState = !state.loginState ;
        } ,

        setMembername(state , action){
            state.memberName = action.payload;
        }
    }
});

export const { setLoginState , setMembername } = slicer.actions ;
export default slicer.reducer ;