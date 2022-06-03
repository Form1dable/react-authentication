import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
    const navigate = useNavigate();
    const { accessToken } = useSelector((state) => state.auth);

    console.log(accessToken);
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                    <NavLink to="/">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>Logout</li>
            </ul>
        </div>
    );
}
