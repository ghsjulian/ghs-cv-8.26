import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
    document.title = "Error 404 - Page Not Found | The URL Doesn't Exist | Path Doesn't Exist"
    return (
        <section
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                width: "100%",
                height: "100vh",
                margin: "0 auto",
                padding: "0"
            }}
            className="404"
        >
            <div className="404-img">
                <img
                    style={{
                        width: "300px",
                        height: "300px",
                        objectFit: "cover",
                        margin: "0.3rem auto"
                    }}
                    src="/icons/404.png"
                    alt="404 - Page Not Found!"
                />
                <h2
                    style={{
                        margin: "0.7rem auto",
                        color: "#6e6e6e",
                        fontWeight: "900"
                    }}
                >
                    Page Not Found !
                </h2>
                <NavLink
                    style={{
                        textDecoration: "none",
                        outline: "none",
                        color: "#00b9e9",
                        fontWeight: "600",
                        fontSize: "22px",
                        margin: "0.7rem auto"
                    }}
                    to="/"
                >
                    Go To Home Page
                </NavLink>
            </div>
        </section>
    );
};

export default NotFound;
