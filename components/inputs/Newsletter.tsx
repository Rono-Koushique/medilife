import React from "react";

export default function Newsletter() {
    return (
        <div className="w-full flex flex-col space-y-4 
                    sm:h-10 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
            <input
                className="font-opens text-sm h-12 w-full px-4 rounded outline-none text-slate-700
                        sm:h-full"
                placeholder="Enter your email"
            />
            <button
                className="bg-transparent font-opens text-slate-100 font-light h-10 px-6 w-fit 
                            border border-slate-100 leading-none rounded hover:bg-white 
                            hover:text-black transition duration-200 sm:h-full sm:min-w-fit sm:text-sm"
            >
                Sign Up
            </button>
        </div>
    );
}
