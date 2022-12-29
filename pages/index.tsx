import React from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import CategoryFeed from "../components/feeds/CategoryFeed";
import PostFeed from "../components/feeds/PostFeed";
import TopReadFeed from "../components/feeds/TopReadFeed";
import SearchPost from "../components/inputs/SearchPost";
import Layout1 from "../components/layouts/Layout1";
import { Category, Condition, Post } from "../typings";
import {
    getAllCategories,
    getRangedConditions,
    getRangedPosts,
    getTopPosts,
} from "../utils/groq";
import Magazine from "../components/layouts/Magazine";
import Wall from "../components/containers/Wall";
import Frame from "../components/containers/Frame";
import ConditionFeed from "../components/feeds/ConditionFeed";

interface Props {
    posts: Post[];
    topPosts: Post[];
    categories: Category[];
    initialConditions: Condition[];
}

export default function Home({ posts, topPosts, categories, initialConditions }: Props) {
    return (
        <div className="flex min-h-screen w-full">
            <Head>
                <title>MediLife</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout1>
                <Wall>
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
                    <div className="py-14">
                        <ConditionFeed conditions={initialConditions} />
                    </div>
                </Magazine>
            </Layout1>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    // descended ordered by published at
    let posts = await getRangedPosts(0, 9);

    // all categories
    let categories = await getAllCategories();

    // get top posts
    let topPosts = await getTopPosts(6);

    // get initial conditions
    let initialConditions = await getRangedConditions(5);

    return {
        props: {
            posts: posts,
            topPosts: topPosts,
            categories: categories,
            initialConditions: initialConditions,
        },
    };
};
