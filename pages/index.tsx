import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout1 from "../components/layouts/Layout1";
import {
    Post,
    HorzInfo,
    MagInfo,
} from "../typings";
import {
    getAllCategories,
    getRangedConditions,
    getRangedPosts,
    getTopPosts,
    getRangedProducts,
} from "../utils/groq";
import Layout2 from "../components/layouts/Layout2";
import Magazine from "../components/layouts/Magazine";
import Page from "../components/containers/Page";
import Wall from "../components/containers/Wall";
import Frame from "../components/containers/Frame";
import MagFeed from "../components/feeds/MagFeed";
import Condition1 from "../components/cards/Condition1";
import Product1 from "../components/cards/Product1";

interface Props {
    posts: Post[];
    topPosts: HorzInfo[];
    categories: HorzInfo[];
    initialConditions: MagInfo[];
    initialProducts: MagInfo[];
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
                    <Frame className="max-w-6xl my-12 mx-4 
                                    lg:mx-auto xl:my-14">
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
