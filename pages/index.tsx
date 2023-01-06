import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout1 from "../components/layouts/Layout1";
import { Category, Condition, Post, Product } from "../typings";
import {
    getAllCategories,
    getRangedConditions,
    getRangedPosts,
    getTopPosts,
    getRangedProducts,
} from "../utils/groq";
import Magazine from "../components/layouts/Magazine";
import Page from "../components/containers/Page";
import Wall from "../components/containers/Wall";
import Frame from "../components/containers/Frame";
import ConditionFeed from "../components/feeds/ConditionFeed";
import ProductFeed from "../components/feeds/ProductFeed";
// import Size from "../components/extras/Size";
import Layout2 from "../components/layouts/Layout2";

interface Props {
    posts: Post[];
    topPosts: Post[];
    categories: Category[];
    initialConditions: Condition[];
    initialProducts: Product[];
}

export default function Home({
    posts,
    topPosts,
    categories,
    initialConditions,
    initialProducts,
}: Props) {
    return (
        <Page>
            <Head>
                <title>MediLife</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <LoginFeed/> */}
            {/* <Size /> */}
            <Layout1>
                <Wall>
                    <Frame className="max-w-6xl mx-auto">
                        <Layout2
                            posts={posts}
                            categories={categories}
                            topPosts={topPosts}
                        />
                    </Frame>
                </Wall>
                <Wall className="bg-yellow-100 shadow-t-lg">
                    <Frame className="max-w-6xl my-11 mx-4 lg:mx-auto">
                        <Magazine>
                            <ConditionFeed conditions={initialConditions} />
                            <ProductFeed products={initialProducts} />
                        </Magazine>
                    </Frame>
                </Wall>
            </Layout1>
        </Page>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    let posts = await getRangedPosts(0, 9);
    let categories = await getAllCategories();
    let topPosts = await getTopPosts(6);
    let initialConditions = await getRangedConditions(5);
    let initialProducts = await getRangedProducts(5);

    return {
        props: {
            posts,
            topPosts,
            categories,
            initialConditions,
            initialProducts,
        },
    };
};
