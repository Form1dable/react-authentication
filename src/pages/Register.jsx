import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { register } from "../features/auth/authSlice";

export default function Register() {
    const dispatch = useDispatch;
    const [formData, setFormData] = useState({
        handle: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirm_password) return;
        const userData = {
            handle: formData.handle,
            email: formData.email,
            password: formData.password,
            confirm_password: formData.confirm_password,
        };
        dispatch(register(userData));
    };

    return (
        <div>
            <h1>Register</h1>
            <form>
                <input
                    type="text"
                    name="handle"
                    placeholder="Handle"
                    value={formData.handle}
                    onChange={handleFormChange}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleFormChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleFormChange}
                />
                <input
                    type="password"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    value={formData.confirm_password}
                    onChange={handleFormChange}
                />
                <button onSubmit={handleSubmit}>Register</button>
            </form>
        </div>
    );
}
