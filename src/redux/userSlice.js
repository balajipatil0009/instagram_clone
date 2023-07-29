import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:"admin",
    initialState:{email:""},
    reducers:{
        addUser(state, action){
            console.log(action.payload)
            state.email = action.payload.email
        },
        deleteUser(){
            return []
        }
    }
})

export default userSlice.reducer;

export const {addUser, deleteUser} = userSlice.actions;