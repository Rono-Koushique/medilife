import React from "react";
import Frame from "../containers/Frame";
import SearchPost from "../inputs/SearchPost";
import navLinks from "../navbars/navlinks";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface Props {
    open: boolean;
    setOpen: Function;
}

export default function SideBar({ open, setOpen }: Props) {
    return (
        <Frame
            className={`fixed top-0 right-0 z-50 min-h-screen w-full bg-cyan-700 px-12
                    flex flex-col items-center justify-center delay-300 origin-right ${
                        open ? "" : "translate-x-[100%]"
                    }
                    sm:w-96
                    md:hidden
                    transition-all duration-300 ease-in-out`}
        >
            <div
                className="absolute top-0 right-0 h-24 w-8 flex items-center justify-center mr-4 
                            sm:h-28"
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <Icon className="text-white" icon="akar-icons:cross" />
            </div>
            <div className="flex flex-col gap-y-16 w-full max-w-[248px]">
                <SearchPost className="py-2 shadow-2xl" />
                <div className="flex flex-col gap-y-8">
                    {navLinks.map((navlink) => (
                        <Link href={navlink.link} key={navlink.id}>
                            <p
                                className={`uppercase text-center leading-none font-libre text-slate-100
                                        py-4 bg-cyan-600 rounded-sm shadow-md`}
                            >
                                {navlink.name}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </Frame>
    );
}
