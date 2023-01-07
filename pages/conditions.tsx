import { GetServerSideProps } from "next";
import { Condition, MagInfo } from "../typings";
import Head from "next/head";
import Layout1 from "../components/layouts/Layout1";
import Page from "../components/containers/Page";
import { getAllConditions, getRangedProducts } from "../utils/groq";
import Wall from "../components/containers/Wall";
import Magazine from "../components/layouts/Magazine";
import CondPa from "../components/cards/CondPa";
import MagFeed from "../components/feeds/MagFeed";
import Product1 from "../components/cards/Product1";
import Frame from "../components/containers/Frame";

interface Props {
    conditions: Condition[];
    initialProducts: MagInfo[];
}

export default function conditions({ conditions, initialProducts }: Props) {
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
                                Health Condition
                            </h1>
                        </div>
                        <div className="grid grid-cols-2 gap-10 max-w-6xl">
                            {conditions &&
                                conditions.map((cond) => {
                                    return <CondPa cond={cond} />;
                                })}
                        </div>
                    </div>
                </Wall>
                <Wall className="bg-yellow-100 shadow-t-lg">
                    <Frame className="max-w-6xl my-11 mx-4 lg:mx-auto">
                        <Magazine>
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
    let conditions = await getAllConditions();
    let initialProducts = await getRangedProducts(5);

    return {
        props: {
            conditions,
            initialProducts,
        },
    };
};
