import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        isbn: "ISBN",
        author: "Author",
        title: "Title",
        page_length: "Page Length",
        cover: "Cover",
    },
    reducers: {
        chooseISBN: (state, action) => { state.isbn = action.payload },
        chooseAuthor: (state, action) => { state.author = action.payload },
        chooseTitle: (state, action) => { state.title = action.payload },
        choosePage_Length: (state, action) => { state.page_length = action.payload },
        chooseCover: (state, action) => { state.cover = action.payload }
    }
})

export const reducer = rootSlice.reducer;
export const { chooseISBN, chooseAuthor, chooseTitle, choosePage_Length, chooseCover } = rootSlice.actions