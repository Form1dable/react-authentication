import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Auth Service
import authService from "./authService";

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
    // This userData will come as payload when it is being dispatched in the component
    async (userData, thunkAPI) => {
        try {
            return await authService.register(userData);
        } catch (error) {
            // Checking for all types of errors to send as rejected value
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Create action creator for login

export const login = createAsyncThunk(
    "auth/login",
    async (userData, thunkAPI) => {
        try {
            return await authService.login(userData);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Create action creator for logout

export const logout = createAsyncThunk("auth/logout", () => {
    authService.logout();
});

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
        builder
            // addCase for register.pending
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            // addCase for register.fulfilled
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.accessToken = action.payload;
                state.isSuccess = true;
            })
            // addCase for register.rejected
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.accessToken = null;
                state.message = action.payload;
            })
            // addCase for login.pending
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })

            // addCase for login.fulfilled
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.accessToken = action.payload;
                state.isSuccess = true;
            })
            // addCase for login.rejected
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.accessToken = null;
                state.message = action.payload;
            })
            // addCase for logout.fulfilled
            .addCase(logout.fulfilled, (state) => {
                state.accessToken = null;
            });
    },
});

// These exports are reducers in the slice actions
export const { reset } = authSlice.actions;
export default authSlice.reducer;
