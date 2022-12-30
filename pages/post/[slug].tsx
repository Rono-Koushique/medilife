import Frame from "../../components/containers/Frame";
import Page from "../../components/containers/Page";
import Wall from "../../components/containers/Wall";
import PostBody from "../../components/feeds/PostBody";
import TopReadFeed from "../../components/feeds/TopReadFeed";
import Layout1 from "../../components/layouts/Layout1";
import Magazine from "../../components/layouts/Magazine";
import ConditionFeed from "../../components/feeds/ConditionFeed";
import ProductFeed from "../../components/feeds/ProductFeed";
import { sanityClient } from "../../sanity";
import { Condition, Post, Product } from "../../typings";
import { GetStaticProps } from "next";
import { getRangedConditions, getRangedProducts } from "../../utils/groq";

interface Props {
    post: Post;
    topPosts: Post[];
    initialConditions: Condition[];
    initialProducts: Product[];
}

export default function PostPage({
    post,
    topPosts,
    initialConditions,
    initialProducts,
}: Props) {
    return (
        <Page>
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
                <Magazine>
                    <ConditionFeed conditions={initialConditions} />
                    <ProductFeed products={initialProducts} />
                </Magazine>
            </Layout1>
        </Page>
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
            image,
            bio
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

    let initialConditions = await getRangedConditions(5);
    let initialProducts = await getRangedProducts(5);

    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            post,
            topPosts,
            initialConditions,
            initialProducts,
        },
        revalidate: 60,
    };
};
