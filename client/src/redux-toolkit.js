import { configureStore, createSlice} from "@reduxjs/toolkit";

const loggedInitial =
    {
        user: "",
        token: "",
    }


const logSlice = createSlice({
    name: 'logged',
    initialState: loggedInitial,
    reducers: {
        create: {
            reducer: (
                state, {payload}
            ) => {
                state.user = payload.user;
                state.token = payload.token;
            },
        },
        remove: {
            reducer: (
                state
            ) => {
                state.user = "";
                state.token = "";
            }
        }
    }
})

export const {
    create: createUser,
    remove: deleteUser,
} = logSlice.actions

const reducer = {
    logged: logSlice.reducer,
}

export default configureStore({
    reducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})