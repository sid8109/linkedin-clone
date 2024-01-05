import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
import articlesSlice from "./articles";

const store = configureStore({
    reducer: { user: userSlice.reducer, articles: articlesSlice.reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export default store