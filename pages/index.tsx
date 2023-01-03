import React from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import CategoryFeed from "../components/feeds/CategoryFeed";
import PostFeed from "../components/feeds/PostFeed";
import TopReadFeed from "../components/feeds/TopReadFeed";
import SearchPost from "../components/inputs/SearchPost";
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
import Wall from "../components/containers/Wall";
import Frame from "../components/containers/Frame";
import ConditionFeed from "../components/feeds/ConditionFeed";
import Page from "../components/containers/Page";
import ProductFeed from "../components/feeds/ProductFeed";
import LoginFeed from "../components/feeds/LoginFeed";
import { getSession } from "next-auth/react";

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
            <LoginFeed />
            <Layout1>
                <Wall className="pb-4">
                    <Frame className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-7 my-14 gap-x-20">
                            <div className="row-span-3 col-span-5 h-100 w-100">
                                <PostFeed posts={posts} />
                            </div>

                            <div className="col-span-2 w-100 flex flex-col space-y-12">
                                <SearchPost />
                                <CategoryFeed categories={categories} />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
    let posts = await getRangedPosts(0, 9);
    let categories = await getAllCategories();
    let topPosts = await getTopPosts(6);
    let initialConditions = await getRangedConditions(5);
    let initialProducts = await getRangedProducts(5);
    let session = await getSession(context)

    return {
        props: {
            posts,
            topPosts,
            categories,
            initialConditions,
            initialProducts,
            session
        },
    };
};
