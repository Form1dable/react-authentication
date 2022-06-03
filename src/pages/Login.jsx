import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { login } from "../features/auth/authSlice";

export default function Login() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        handle: "",
        password: "",
    });

    const handleFormChange = (e) => {
        setFormData({
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            handle: formData.handle,
            password: formData.password,
        };
        dispatch(login(userData));
    };

    return (
        <div>
            <h1>Login</h1>
            <form>
                <input
                    type="text"
                    name="handle"
                    placeholder="Handle"
                    value={formData.handle}
                    onChange={handleFormChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleFormChange}
                />
                <button onSubmit={handleSubmit}>Login</button>
            </form>
        </div>
    );
}
