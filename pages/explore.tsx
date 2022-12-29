import { GetServerSideProps } from "next";
import { Category } from "../typings";
import { sanityClient } from "../sanity";
import Head from "next/head";
import Layout1 from "../components/layouts/Layout1";
import CatePa from "../components/cards/CatePa";
import Page from "../components/containers/Page";

interface Props {
    categories: Category[];
}

export default function explore({ categories }: Props) {
    return (
        <Page>
            <Head>
                <title>MediLife</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout1>
                <div className="flex flex-col my-14 gap-y-14 items-center">
                    <div className="flex justify-center w-100">
                        <h1 className="font-libre text-4xl text-gray-500">
                            Wellness Topics
                        </h1>
                    </div>
                    <div className="grid grid-cols-2 gap-8 max-w-5xl">
                        {categories &&
                            categories.map((cate) => {
                                return <CatePa cate={cate} />;
                            })}
                    </div>
                </div>
            </Layout1>
        </Page>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    // all categories
    let categories = await sanityClient.fetch(`*[_type == "category"] {
        title,
        image,
        description
    }`);

    return {
        props: {
            categories: categories,
        },
    };
};
