import React from "react";
import { Post } from "../../typings";
import ShowMore from "../button/ShowMore";
import SinglePost from "../cards/SinglePost";
import { sanityClient } from "../../sanity";

interface Props {
    posts: Post[];
}

export default function PostFeed({ posts }: Props) {
    const [allPosts, setAllPosts] = React.useState<Post[]>(posts && [...posts]);
    const [loading, setLoading] = React.useState(false);
    const [pageRange, setPageRange] = React.useState([0, 9]);
    const postPerPage = 10;

    async function loadMore() {
        console.log("clicked");
        let res = await(await fetch('api/hello')).json()
        console.log(res);
        
    }
    

        // let { result } =
        //     await sanityClient.fetch(`(*[_type == "post"] | order(publishedAt desc))[${newPageRange[0]}..${newPageRange[1]}] {
        //         _id,
        //         title,
        //         slug,
        //         publishedAt,
        //         description,
        //         author -> {
        //             name,
        //             image
        //         },
        //         mainImage,
        //         likeCount,
        //         readCount
        //     }`);
        // console.log(result);
    

    return (
        <div>
            <div className="w-100 flex flex-col space-y-12">
                {allPosts &&
                    allPosts.map((post) => {
                        return <SinglePost post={post} key={post._id} />;
                    })}
            </div>
            <ShowMore loadMore={loadMore} />
        </div>
    );
}