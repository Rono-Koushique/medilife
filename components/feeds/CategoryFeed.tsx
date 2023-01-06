import Link from "next/link";
import { Category } from "../../typings";
import CateFe from "../cards/CateFe";

interface Props {
    categories: Category[];
}

export default function CategoryFeed({ categories }: Props) {
    categories = categories.slice(1, 7);
    return (
        <div className="flex flex-col">
            {/* header */}
            <div className="flex items-end justify-between">
                <p className="font-libre text-lg text-slate-700">Explore By</p>
                <Link href={"/explore"}>
                    <p className="font-opens text-sm text-slate-500 hover:underline hover:underline-offset-2">
                        View All
                    </p>
                </Link>
            </div>
            <hr className="mt-1" />

            {/* category tiles */}
            <div className="flex flex-col gap-y-1 mt-4">
                {categories.map((cate) => {
                    return <CateFe cate={cate} key={cate.title} />;
                })}
            </div>
        </div>
    );
}
