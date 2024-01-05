import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    articles: []
}

const articlesSlice = createSlice({
    name: 'articles',
    initialState: initialState,
    reducers: {
        setLoadingStatus(state, action) {
            state.loading = action.payload
        },
        getArticles(state, action) {    
            state.articles = action.payload
        }
    }
})

export const articlesActions = articlesSlice.actions
export default articlesSlice