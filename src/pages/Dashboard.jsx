import React from "react";
import {useSelector} from "react-redux";

export default function Dashboard() {
    const {accessToken} = useSelector(state => state.auth)


    console.log(typeof accessToken)
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
}
