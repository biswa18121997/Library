import {createSlice} from '@reduxjs/toolkit'

let LibrarySlice=createSlice({
    name:"AddedBooks",
    initialState:{

        Books:[]
    },
    reducers:{
        addBook:(state,action)=>{
            state.Books.push(action.payload);

        },
        removeBook:(state,action)=>{
            state.Books=state.Books.filter((book)=>book.id!==action.payload);
        },
        clear:(state,action)=>{
            state.Books.length=0;
        }
    }
})
export const {addBook,removeBook,clear}=LibrarySlice.actions;
export default LibrarySlice.reducer;