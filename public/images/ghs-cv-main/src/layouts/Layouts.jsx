import Header from "./Header";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "../assets/css/index.css";

const Layouts = () => {
    const location = useLocation();
    const [path, setPath] = useState("");
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layouts;
