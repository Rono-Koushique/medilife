import Frame from "../../components/containers/Frame";
import Wall from "../../components/containers/Wall";
import PostBody from "../../components/feeds/PostBody";
import TopReadFeed from "../../components/feeds/TopReadFeed";
import Layout1 from "../../components/layouts/Layout1";
import { sanityClient } from "../../sanity";
import { Post } from "../../typings";
import { GetStaticProps } from "next";

interface Props {
    post: Post;
    topPosts: Post[];
}

export default function PostPage({ post, topPosts }: Props) {
    return (
        <div className="flex min-h-screen w-full">
            <Layout1>
                <Wall>
                    <Frame className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-7 my-14 gap-x-20">
                            <div className="row-span-3 col-span-5 h-100 w-100">
                                <PostBody post={post} />
                            </div>
                            <div className="col-span-2 w-100 flex flex-col space-y-12">
                                <TopReadFeed posts={topPosts} />
                            </div>
                        </div>
                    </Frame>
                </Wall>
            </Layout1>
        </div>
    );
}

// pre generating post pages from slugs
export async function getStaticPaths() {
    const posts = await sanityClient.fetch(`*[_type == "post"]{
        _id,
        slug {
            current
        }
    }`);
    const paths = posts.map((post: Post) => {
        return {
            params: {
                slug: post.slug.current,
            },
        };
    });
    return {
        paths: paths,
        fallback: "blocking",
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // search for post from current slug
    const post = await sanityClient.fetch(
        `*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        publishedAt,
        title,
        author -> {
            name,
            image
        },
        categories[] -> {
            title      
        },
        'comments': *[
            _type == "comment" && 
            post._ref == ^._id &&
            approved == true
        ],
        description,
        mainImage,
        slug,
        likeCount,
        readCount,
        body
    }`,
        {
            slug: params?.slug,
        }
    );

    const topPosts =
        await sanityClient.fetch(`(*[_type == "post"] | order(readCount desc))[0...6] {
        _id,
        title,
        mainImage,
        slug,
    }`);

    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            post,
            topPosts,
        },
        revalidate: 60,
    };
};
