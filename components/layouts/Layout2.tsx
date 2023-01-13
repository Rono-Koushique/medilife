import { Post, HorzInfo } from "../../typings";
import PostFeed from "../feeds/PostFeed";
import SearchPost from "../inputs/SearchPost";
import HorzFeed from "../feeds/HorzFeed";
import Category1 from "../cards/Category1";
import TopPost1 from "../cards/TopPost1";

interface Props {
    posts: Post[];
    categories: HorzInfo[];
    topPosts: HorzInfo[];
}

export default function Layout2({ posts, categories, topPosts }: Props) {
    return (
        <div
            className="mb-14 sm:mx-4 sm:my-8
                    lg:my-10 lg:flex lg:gap-x-10
                    xl:mx-0 xl:my-10 xl:mb-14 xl:gap-x-14"
        >
            <div className="lg:w-[80%]">
                <PostFeed posts={posts} />
            </div>

            <div
                className="hidden
                        lg:flex lg:flex-col lg:w-[20%] lg:gap-y-10"
            >
                <SearchPost className="py-2"/>
                <HorzFeed
                    className="gap-y-1 mt-4"
                    info={categories}
                    count={6}
                    href="/explore"
                    title="Explore By"
                    Card={Category1}
                />
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
