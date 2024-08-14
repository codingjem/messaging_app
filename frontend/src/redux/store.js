import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/user/userSlice";

export default configureStore({
    reducer: { [userSlice.reducerPath]: userSlice.reducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userSlice.middleware),
});
