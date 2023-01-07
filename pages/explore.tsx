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
import Frame from "../components/containers/Frame";
import MagFeed from "../components/feeds/MagFeed";
import Condition1 from "../components/cards/Condition1";
import Product1 from "../components/cards/Product1";

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
