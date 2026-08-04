import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, createBrowserRouter ,RouterProvider, Routes, Route } from "react-router-dom";
import MyRoutes from "./Router";

const router = createBrowserRouter(MyRoutes);
const App = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return <RouterProvider router={router} />;
};

export default App;