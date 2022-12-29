import Link from "next/link";
import Frame from "../containers/Frame";
import Wall from "../containers/Wall";
import { useRouter } from "next/router";

const navLinks = [
    {
        id: 1,
        name: "home",
        link: "/",
    },
    {
        id: 2,
        name: "medicine",
        link: "/medicine",
    },
    {
        id: 3,
        name: "health condition",
        link: "/health-condition",
    },
    {
        id: 4,
        name: "explore",
        link: "/explore",
    },
    {
        id: 5,
        name: "contact",
        link: "/contact",
    },
];

export default function Navbar1() {
    const router = useRouter();
    return (
        <Wall>
            <Frame className="max-w-6xl mx-auto">
                {/* brand logo */}
                <div className="mx-auto my-5 flex justify-center">
                    <Link href="/">
                        <img
                            className="h-32"
                            src="/images/logo/brand-dark.png"
                            alt="brand"
                        />
                    </Link>
                </div>

                {/* nav links */}
                <div
                    className="mx-auto flex flex-nowrap justify-between 
                        border-t border-b border-gray-300 mt-10 px-24"
                >
                    {navLinks.map((navlink) => (
                        <Link href={navlink.link} key={navlink.id}>
                            <p
                                className={`text-md uppercase text-center leading-none py-3 transition-all duration-200 font-libre
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
