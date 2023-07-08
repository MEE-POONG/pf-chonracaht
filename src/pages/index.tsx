import React, { useState } from "react";
import RootLayout from "./layout";

export default function Homepage() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };



    return (

        <RootLayout>
        <div >
            <div style={{ textAlign: "center" }} className="mt-[20%]">
                <h1
                    id="click-here"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}

                    style={{
                        transition: "transform 0.3s",
                        display: "inline-block",
                        cursor: "pointer",
                        transform: isHovered ? "scale(1.1)" : "scale(1)",

                    }}
                >
                    <a href="profile">Click here</a>
                </h1>
            </div>
            <div style={{ textAlign: "center" }}>
            <h2
                    id="click-here"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}

                    style={{
                        transition: "transform 0.3s",
                        display: "inline-block",
                        cursor: "pointer",
                        transform: isHovered ? "scale(1.1)" : "scale(1)",

                    }}
                    >
                    <a href="profile">MyProfile</a>
                </h2>
            </div>
        </div>
        </RootLayout>
    );
}
