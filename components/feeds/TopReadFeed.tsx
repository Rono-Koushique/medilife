import React from "react";
import Link from "next/link";
import { Post } from "../../typings";
import SingleTopPost from "../cards/SingleTopPost";

interface Props {
    posts?: Post[];
}

export default function TopReadFeed({ posts }: Props) {
    // const [hydrated, setHydrated] = React.useState<boolean>(false)
    // React.useEffect(()=>{
    //     setHydrated(true)
    // }, [])
    
    // const sortedPosts = hydrated ? ( posts && posts.sort((a, b) => b.readCount - a.readCount).slice(1, 9)) : undefined;
    return (
        <div className="flex flex-col">
            {/* header */}
            <div className="flex items-end justify-between">
                <p className="font-libre text-lg text-gray-600">Top Read</p>
                <Link href={"/"}>
                    <p className="font-opens text-sm text-gray-600 hover:underline hover:underline-offset-2">
                        View All
                    </p>
                </Link>
            </div>
            <hr className="mt-2" />

            {/* category tiles */}
            <div className="flex flex-col space-y-8 mt-4">
                {posts && posts.map((post) => {
                    return <SingleTopPost post={post} key={post._id}/>;
                })}
            </div>
        </div>
    );
}
