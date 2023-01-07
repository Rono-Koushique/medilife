import { GetServerSideProps } from "next";
import { Category, Condition, Product } from "../typings";
import Head from "next/head";
import Layout1 from "../components/layouts/Layout1";
import CatePa from "../components/cards/Category2";
import Page from "../components/containers/Page";
import {
    getAllCategories,
    getRangedConditions,
    getRangedProducts,
} from "../utils/groq";
import Wall from "../components/containers/Wall";
import Magazine from "../components/layouts/Magazine";
import ConditionFeed from "../components/feeds/ConditionFeed";
import ProductFeed from "../components/feeds/ProductFeed";

interface Props {
    categories: Category[];
    initialConditions: Condition[];
    initialProducts: Product[];
}

export default function explore({ categories, initialConditions, initialProducts }: Props) {
    return (
        <Page>
            <Head>
                <title>MediLife</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout1>
                <Wall className="pb-4">
                    <div className="flex flex-col my-14 gap-y-14 items-center">
                        <div className="flex justify-center w-100">
                            <h1 className="font-libre text-4xl text-gray-500">
                                Wellness Topics
                            </h1>
                        </div>
                        <div className="grid grid-cols-2 gap-10 max-w-5xl">
                            {categories &&
                                categories.map((cate) => {
                                    return <CatePa cate={cate} />;
                                })}
                        </div>
                    </div>
                </Wall>
                <Magazine>
                    <ConditionFeed conditions={initialConditions} />
                    <ProductFeed products={initialProducts} />
                </Magazine>
            </Layout1>
        </Page>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    // all categories
    let categories = await getAllCategories();
    let initialConditions = await getRangedConditions(5);
    let initialProducts = await getRangedProducts(5);

    return {
        props: {
            categories,
            initialConditions,
            initialProducts,
        },
    };
};
