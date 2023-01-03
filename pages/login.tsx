import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { urlFor } from "../sanity";

export default function login() { 
    const { data: session } = useSession();
    return (
        <div>
            {session ? (
                <div>
                    <p>Welcome {session.user?.name}</p>
                    <button onClick={() => signOut()}>SignOut</button>
                </div>
            ) : (
                <div>
                    <p>You are not logged in</p>
                    <button onClick={() => signIn()}>SignIn</button>
                </div>
            )}
        </div>
    );
}
