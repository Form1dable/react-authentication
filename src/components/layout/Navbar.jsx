import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";

export default function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { accessToken } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        dispatch(reset());
    };

    if (accessToken) {
        return (
            <ul>
                <li>
                    <NavLink to="/">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li style={{ cursor: "pointer" }} onClick={handleLogout}>
                    Logout
                </li>
            </ul>
        );
    } else {
        return (
            <ul>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/register">Register</NavLink>
                </li>
            </ul>
        );
    }
}
