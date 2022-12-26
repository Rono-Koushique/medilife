import React from "react";
import { Post } from "../../typings";
import ShowMore from "../button/ShowMore";
import SinglePost from "../cards/SinglePost";

interface Props {
    posts: Post[];
}

export default function PostFeed({ posts }: Props) {
    const [allPosts, setAllPosts] = React.useState<Post[]>([...posts]);
    const [page, setPage] = React.useState<number>(1);

    function loadMore() {
        setPage((prev) => prev + 1);
    }

    async function addPosts() {
        if (page > 1) {
            const res = await (
                await fetch(`http://localhost:3000/api/posts/${page}`)
            ).json();
            const newPosts = res.posts;
            const pageCount = Math.ceil(res.pageCount);

            if (page <= pageCount) {
                setAllPosts((prev) => [...prev, ...newPosts]);
            }
        }
    }

    React.useEffect(() => {
        addPosts();
    }, [page]);

    return (
        <div>
            <div className="w-100 flex flex-col space-y-12">
                {allPosts.map((post) => {
                    return <SinglePost post={post} key={post._id} />;
                })}
            </div>
            <ShowMore loadMore={loadMore} />
        </div>
    );
}
