import Wall from "../containers/Wall";
import Frame from "../containers/Frame";
import Link from "next/link";
import Newsletter from "../inputs/Newsletter";

export default function Footer1() {
    return (
        <Wall className="bg-black">
            <Frame className="mx-4 my-11 text-slate-100 flex flex-col 
                            lg:max-w-6xl lg:mx-auto lg:px-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    {/* left side */}
                    <div className="flex flex-col space-y-4 sm:max-w-md">
                        <p className="font-libre text-2xl">
                            Get our wellness newsletter
                        </p>
                        <p className="text-sm text-slate-300">
                            Filter out the noise and nurture your inbox with
                            health and wellness advice that’s inclusive and
                            rooted in medical expertise.
                        </p>
                        <Newsletter />
                        <p className="text-sm">
                            Your <span className="text-cyan-500">privacy</span>{" "}
                            is important to us
                        </p>
                    </div>

                    {/* right side */}
                    <Link href="/">
                        <img
                            className="hidden md:block md:h-24"
                            src="/images/logo/brand-light.png"
                            alt="brand"
                        />
                    </Link>
                </div>
            </Frame>

            <Frame className="text-slate-100 w-full">
                {/* bottom section */}
                <div
                    className="border-t border-gray-500 w-full flex flex-col items-center py-3
                            sm:flex-row sm:px-4 sm:justify-between sm:py-1 
                            lg:max-w-6xl lg:mx-auto"
                >
                    <p className="text-sm">
                        © 2022 ByteStack. All Rights Reserved
                    </p>
                    <div className="hidden sm:flex sm:space-x-4 sm:items-center">
                        <p>Terms of use</p>
                        <span className="w-px h-4 bg-gray-200"></span>
                        <p>Privacy</p>
                        <span className="w-px h-4 bg-gray-200"></span>
                        <p>Cookies</p>
                    </div>
                </div>
            </Frame>
        </Wall>
    );
}
