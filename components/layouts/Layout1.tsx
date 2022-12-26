import React from "react";
import Footer1 from "../footers/Footer1";
import Navbar1 from "../navbars/Navbar1";

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

export default function Layout1({ children }: Props) {
    return (
        <div className="w-full max-w-6xl mx-auto flex flex-col">
            <Navbar1 />
            <div className="min-h-fit flex-grow">{children}</div>
            <Footer1 />
        </div>
    );
}
