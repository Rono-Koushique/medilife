import Link from "next/link";
import { Product } from "../../typings";
import ProductMa from "../cards/ProductMa";

interface Props {
    products?: Product[];
}

export default function ProductFeed({ products }: Props) {
    return (
        <div className="flex flex-col">
            {/* header */}
            <div className="flex items-end justify-between">
                <p className="font-libre text-2xl text-yellow-800">Product Reviews</p>
                <Link href={"/condition"}>
                    <p className="font-opens text-sm text-yellow-800 hover:underline hover:underline-offset-2">
                        View All
                    </p>
                </Link>
            </div>
            <hr className="mt-1 border-t-2 border-yellow-700 border-opacity-10"/>

            {/* product tiles */}
            <div className="grid grid-cols-5 gap-8 mt-4 w-full">
                {products?.map((product) => {
                    return <ProductMa product={product} key={product.title}/>
                })}
            </div>
        </div>
    );
}
