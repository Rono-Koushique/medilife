import Wall from "../containers/Wall";
import Frame from "../containers/Frame";
import Link from "next/link";
import Newsletter from "../inputs/Newsletter";

export default function Footer1() {
    return (
        <Wall className="bg-black">
            <Frame className="max-w-6xl mx-auto">
                <div className="flex w-full py-14 items-center">
                    {/* left side */}
                    <div className="flex flex-col flex-grow space-y-4">
                        <p className="font-libre text-2xl text-slate-50">
                            Get our wellness newsletter
                        </p>
                        <p className="font-opens text-sm text-slate-100 max-w-md font-extralight tracking-wide">
                            Filter out the noise and nurture your inbox with
                            health and wellness advice that’s inclusive and
                            rooted in medical expertise.
                        </p>
                        <Newsletter />
                        <p className="font-opens text-sm text-slate-100 max-w-md font-extralight tracking-wide">
                            Your <span className="text-cyan-300">privacy</span>{" "}
                            is important to us
                        </p>
                    </div>

                    {/* right side */}
                    <Link href="/">
                        <img
                            className="h-24"
                            src="/images/logo/brand-light.png"
                            alt="brand"
                        />
                    </Link>
                </div>

                {/* bottom section */}
                <div className="flex justify-between border-t border-gray-400 py-1 text-sm text-gray-200">
                    <p>© 2022 ByteStack. All Rights Reserved</p>
                    <div className="flex space-x-2">
                        <p>Terms of use</p>
                        <span className="h-full w-px bg-gray-200"></span>
                        <p>Privacy</p>
                        <span className="h-full w-px bg-gray-200"></span>
                        <p>Cookies</p>
                    </div>
                </div>
            </Frame>
        </Wall>
    );
}
