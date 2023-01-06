import React from "react";
import Link from "next/link";
import { Post } from "../../typings";
import TopPostFe from "../cards/TopPostFe";

interface Props {
    posts?: Post[];
}

export default function TopReadFeed({ posts }: Props) {
    return (
        <div className="flex flex-col">
            {/* header */}
            <div className="flex items-end justify-between">
                <p className="font-libre text-lg text-slate-700">Top Read</p>
                <Link href={"/"}>
                    <p className="font-opens text-sm text-slate-500 hover:underline hover:underline-offset-2">
                        View All
                    </p>
                </Link>
            </div>
            <hr className="mt-1" />

            {/* category tiles */}
            <div className="flex flex-col gap-y-6 mt-4">
                {posts &&
                    posts.map((post) => {
                        return <TopPostFe post={post} key={post._id} />;
                    })}
            </div>
        </div>
    );
}
