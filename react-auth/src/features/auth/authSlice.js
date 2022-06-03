import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const accessToken = JSON.parse(localStorage.getItem("accessToken"));

const initialState = {
    accessToken: accessToken ? accessToken : null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
};

// Create action creator for register

// 1. createAsyncThunk receives a action type as a string and a async callback function that will return a promise with arguements (user data and thunkAPI)
// 2. This function will return a promise that will be handled by the extraReducers builder
export const register = createAsyncThunk(
    "auth/register",
    async (userData, thunkAPI) => {
        try {
        } catch (error) {}
    }
);

// Create action creator for login
// Create action creator for logout

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.accessToken = null;
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        // addCase for register.pending
        // addCase for register.fulfilled
        // addCase for register.rejected
        // addCase for login.pending
        // addCase for login.fulfilled
        // addCase for login.rejected
        // addCase for logout.fulfilled
    },
});
