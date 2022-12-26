import React from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { sanityClient } from "../sanity";
import CategoryFeed from "../components/feeds/CategoryFeed";
import PostFeed from "../components/feeds/PostFeed";
import TopReadFeed from "../components/feeds/TopReadFeed";
import SearchPost from "../components/inputs/SearchPost";
import Layout1 from "../components/layouts/Layout1";
import { Category, Post } from "../typings";

interface Props {
    posts: Post[];
    topPosts: Post[];
    categories: Category[];
}

export default function Home({ posts, topPosts, categories }: Props) {
    return (
        <div className="flex min-h-screen w-full">
            <Head>
                <title>MediLife</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout1>
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
            </Layout1>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    // descended ordered by published at
    let posts =
        await sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc) {
        _id,
        publishedAt,
        title,
        author -> {
            name,
            image
        },
        description,
        mainImage,
        slug,
        likeCount,
        readCount
    }`);

    // all categories
    let categories = await sanityClient.fetch(`*[_type == "category"] {
        title,
        image,
        description
    }`);

    const topPosts = await sanityClient.fetch(`*[_type == "post"] | order(readCount desc) {
        _id,
        title,
        mainImage,
        slug,
    }`);

    return {
        props: {
            posts: posts,
            topPosts: topPosts,
            categories: categories,
        },
    };
};
