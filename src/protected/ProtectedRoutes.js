import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoutes () {
    return (
        localStorage.getItem('login-token') ? <Outlet /> : <Navigate to={'/'} />
    )
}