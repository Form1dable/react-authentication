import axios from "axios";

const AUTH_REGISTER = "http://localhost:5000/api/register";
const AUTH_LOGIN = "http://localhost:5000/api/login";

// Register auth service
const register = async (userData) => {
    const response = await axios.post(AUTH_REGISTER, userData);

    // Setting the the token to the local storage
    if (response.data) {
        localStorage.setItem("accessToken", JSON.stringify(response.data));
    }

    // Then sending back the promise to be handled by createAsyncThunk
    return response.data;
};

// Login auth service
const login = async (userData) => {
    const response = await axios.post(AUTH_LOGIN, userData);

    if (response.data) {
        localStorage.setItem("accessToken", JSON.stringify(response.data));
    }

    return response.data;
};

// Logout auth service
const logout = () => {
    localStorage.removeItem("accessToken");
};

const authService = {
    register,
    login,
    logout,
};

export default authService;
