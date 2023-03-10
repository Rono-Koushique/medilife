import Frame from "../../components/containers/Frame";
import Page from "../../components/containers/Page";
import Wall from "../../components/containers/Wall";
import Layout1 from "../../components/layouts/Layout1";
import Magazine from "../../components/layouts/Magazine";
import { Post, HorzInfo, MagInfo } from "../../typings";
import { GetStaticProps } from "next";
import {
    getCurrentPost,
    getRangedConditions,
    getRangedProducts,
    getTopPosts,
} from "../../utils/groq";
import Layout3 from "../../components/layouts/Layout3";
import MagFeed from "../../components/feeds/MagFeed";
import Condition1 from "../../components/cards/Condition1";
import Product1 from "../../components/cards/Product1";
import { sanityClient } from "../../sanity";

interface Props {
    post: Post;
    topPosts: HorzInfo[];
    initialConditions: MagInfo[];
    initialProducts: MagInfo[];
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
                        <Layout3 post={post} topPosts={topPosts} />
                    </Frame>
                </Wall>

                <Wall className="bg-yellow-100 shadow-t-lg">
                    <Frame
                        className="max-w-6xl my-12 mx-4 
                                    lg:mx-auto xl:my-14"
                    >
                        <Magazine>
                            <MagFeed
                                info={initialConditions}
                                title="Health Conditions"
                                href="/conditions"
                                Card={Condition1}
                            />
                            <MagFeed
                                info={initialProducts}
                                title="Product Reviews"
                                href="/condition"
                                Card={Product1}
                            />
                        </Magazine>
                    </Frame>
                </Wall>
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

// search for post from current slug
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug;
    const post = !Array.isArray(slug) && (await getCurrentPost(slug));
    let topPosts = await getTopPosts(6);
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
