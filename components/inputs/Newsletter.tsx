import React from "react";

export default function Newsletter() {
    return (
        <div className="flex space-x-2">
            <input
                className="font-opens text-sm h-9 w-56 px-4 rounded outline-none text-gray-700"
                placeholder="Enter your email"
            />
            <button
                className="bg-transparent font-opens text-sm text-slate-100 font-light px-6 h-100 
                            border border-slate-100 leading-none rounded hover:bg-white 
                            hover:text-black transition duration-200"
            >
                Sign Up
            </button>
        </div>
    );
}
