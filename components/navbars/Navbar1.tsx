import { useState } from "react";
import Link from "next/link";
import Frame from "../containers/Frame";
import Wall from "../containers/Wall";
import { useRouter } from "next/router";
import Image from "next/image";
import Hamburger from "../buttons/Hamburger";
import navLinks from "./navlinks"

export default function Navbar1() {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Wall className="bg-black md:bg-white">
            <Frame className="flex items-center justify-between mx-4 my-4
                            md:flex-col md:justify-start md:mb-0">
                {/* brand logo */}
                <div className="">
                    <Link href="/" className="">
                        {/* small screen logo */}
                        <Image
                            src="/images/logo/brand-light.png"
                            className="h-16 sm:h-20 w-fit md:hidden"
                            width={100}
                            height={100}
                            alt="brand"
                        />
                        {/* large screen logo */}
                        <Image
                            src="/images/logo/brand-dark.png"
                            className="hidden md:block md:w-fit md:h-24 lg:h-28"
                            width={100}
                            height={100}
                            alt="brand"
                        />
                    </Link>
                </div>

                {/* hamburger icon for sidebar in small view */}
                <div className="h-5 w-8 md:hidden">
                    <Hamburger open={open} setOpen={setOpen} />
                </div>

                {/* nav links */}
                <div className="hidden border-y border-gray-300 
                                md:w-full md:flex md:justify-between md:px-16 md:mt-4
                                lg:max-w-6xl lg:px-24 lg:mt-8">
                    {navLinks.map((navlink) => (
                        <Link href={navlink.link} key={navlink.id}>
                            <p
                                className={`text-sm lg:text-base uppercase text-center leading-none py-3 lg:py-2 transition-all duration-200 font-libre
                                    ${
                                        router.pathname == navlink.link
                                            ? "text-gray-600 font-semibold"
                                            : "text-gray-500 hover:text-gray-800"
                                    }`}
                            >
                                {navlink.name}
                            </p>
                        </Link>
                    ))}
                </div>
            </Frame>
        </Wall>
    );
}
