import React from "react";
import Wall from "../containers/Wall";
import Frame from "../containers/Frame";
import Footer1 from "../footers/Footer1";
import Navbar1 from "../navbars/Navbar1";

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

export default function Layout1({ children }: Props) {
    return (
        <Wall className="min-h-screen flex flex-col">
            <Navbar1 />
            {children}
            <Footer1 />
        </Wall>
    );
}
