import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { Icon } from "@iconify/react";

export default function LoginFeed() {
    const { data: session } = useSession();

    return (
        <div
            className="fixed top-[11.8rem] group text-white z-10 cursor-pointer opacity-70
                    hover:opacity-100 transition-all duration-500 ease-in-out group"
        >
            <div className="absolute z-10 bottom-[100%] w-full h-8 bg-transparent rounded-bl-xl shadow-[-0.7rem_0.7rem_0_0_#4B5563]" />
            <div className="relative z-20 flex items-center justify-center bg-gray-600 rounded-tr-xl rounded-br-xl">
                <div className="py-2 px-1.5">
                    {session ? (
                        <div
                            className="flex flex-col items-center space-y-1 
                                    group-hover:flex-row group-hover:items-start group-hover:space-x-4"
                        >
                            <div>
                                {session.user?.image && (
                                    <Image
                                        className="rounded-xl h-10 w-10 object-cover border border-white
                                            group-hover:h-20 group-hover:w-20"
                                        src={session.user.image}
                                        width={100}
                                        height={100}
                                        alt="User"
                                    />
                                )}
                            </div>
                            <div className="flex flex-col">
                                <div className="text-sm group-hover:hidden">
                                    {session.user?.name
                                        ?.split(" ")
                                        .map((word) => {
                                            return <span>{word[0]}</span>;
                                        })}
                                </div>
                                <div className="hidden group-hover:block">
                                    <p>{session.user?.name}</p>
                                </div>
                                <div className="hidden group-hover:block">
                                    <p>{session.user?.email}</p>
                                </div>
                                <div className="hidden group-hover:block">
                                    <button onClick={() => signOut()}>
                                        Log Out
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-row items-center group-hover:space-x-2">
                            <p className="hidden group-hover:block">Sign In</p>
                            <button onClick={() => signIn()}>
                                <Icon
                                    className="text-white hover:text-gray-200"
                                    icon="material-symbols:login"
                                />
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="absolute z-10 top-[100%] w-full h-8 bg-transparent rounded-tl-xl shadow-[-0.7rem_-0.7rem_0_0_#4B5563]" />
        </div>
    );
}
