import { Category, Post } from "../../typings";
import PostFeed from "../feeds/PostFeed";
import CategoryFeed from "../feeds/CategoryFeed";
import TopReadFeed from "../feeds/TopReadFeed";
import SearchPost from "../inputs/SearchPost";

interface Props {
    posts: Post[];
    categories: Category[];
    topPosts: Post[];
}

export default function Layout2({ posts, categories, topPosts }: Props) {
    return (
        <div className="mb-14 sm:mx-4 sm:my-8
                    lg:my-10 lg:flex lg:gap-x-10
                    xl:mx-0 xl:my-10 xl:mb-14 xl:gap-x-14">
            <div className="lg:w-[80%]">
                <PostFeed posts={posts} />
            </div>

            <div className="hidden
                        lg:flex lg:flex-col lg:w-[20%] lg:gap-y-10">
                <SearchPost />
                <CategoryFeed categories={categories} />
                <TopReadFeed posts={topPosts} />
            </div>
        </div>
    );
}
