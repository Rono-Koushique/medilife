import { Post, HorzInfo } from "../../typings";
import SearchPost from "../inputs/SearchPost";
import HorzFeed from "../feeds/HorzFeed";
import TopPost1 from "../cards/TopPost1";
import PostBody from "../feeds/PostBody";

interface Props {
    post: Post;
    topPosts: HorzInfo[];
}

export default function Layout2({ post, topPosts }: Props) {
    return (
        <div
            className="mb-14 sm:mx-4 sm:my-8
                    lg:my-10 lg:flex lg:gap-x-10
                    xl:mx-0 xl:my-10 xl:mb-14 xl:gap-x-14"
        >
            <div className="lg:w-[80%]">
                <PostBody post={post} />
            </div>

            <div
                className="hidden
                        lg:flex lg:flex-col lg:w-[20%] lg:gap-y-10"
            >
                <SearchPost />
                <HorzFeed
                    className="gap-y-6 mt-4"
                    info={topPosts}
                    count={7}
                    href="/"
                    title="Top Posts"
                    Card={TopPost1}
                />
            </div>
        </div>
    );
}
