import {configureStore} from '@reduxjs/toolkit'
import LibrarySlice from './LibrarySlice.js'

const LibraryStore=configureStore({
    reducer:{
        library: LibrarySlice,
    },
});

export default LibraryStore;
