import React from "react";
import { Post } from "../../typings";
import ShowMore from "../button/ShowMore";
import SinglePost from "../cards/SinglePost";

interface Props {
    posts: Post[];
}

export default function PostFeed({ posts }: Props) {
    const [allPosts, setAllPosts] = React.useState<Post[]>(posts && [...posts]);
    
    return (
        <div>
            <div className="w-100 flex flex-col space-y-12">
                {allPosts?.map((post) => {
                    return <SinglePost post={post} key={post._id} />;
                })}
            </div>
            <ShowMore />
        </div>
    );
}
