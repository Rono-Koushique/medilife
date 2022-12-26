import Link from "next/link";
import { Category } from "../../typings";
import SingleCate from "../cards/SingleCate";

interface Props {
    categories: Category[];
}

export default function CategoryFeed({ categories }: Props) {
    categories = categories.slice(1, 7);
    return (
        <div className="flex flex-col">
            {/* header */}
            <div className="flex items-end justify-between">
                <p className="font-libre text-lg text-gray-600">Explore By</p>
                <Link href={"/explore"}>
                    <p className="font-opens text-sm text-gray-600 hover:underline hover:underline-offset-2">
                        View All
                    </p>
                </Link>
            </div>
            <hr className="mt-2"/>

            {/* category tiles */}
            <div className="flex flex-col space-y-4 mt-4">
                {categories.map((cate) => {
                    return <SingleCate cate={cate} key={cate.title} />;
                })}
            </div>
        </div>
    );
}
