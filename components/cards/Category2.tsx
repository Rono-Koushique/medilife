// category page card
import { Category } from "../../typings";
import { urlFor } from "../../sanity";
import { ChevronRightIcon } from "@heroicons/react/outline";

interface Props {
    cate: Category;
}

export default function Category2({ cate }: Props) {
    return (
        <div className="flex items-center p-4 overflow-hidden transition-all rounded-lg rounded-tl-full rounded-bl-full cursor-pointer duration-50 group hover:scale-105 hover:shadow-xl">
            <div className="flex items-center space-x-6">
                <img
                    className="object-cover w-20 h-20 bg-yellow-100 rounded-full filter saturate-60"
                    src={urlFor(cate.image).url()}
                />
                <div className="flex flex-col space-y-1">
                    <h2 className="text-xl font-semibold font-libre text-slate-700">
                        {cate.title}
                    </h2>
                    <p className="leading-tight text-gray-500">
                        {cate.description}
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center h-full ml-auto">
                <ChevronRightIcon className="h-8 text-gray-300" />
            </div>
        </div>
    );
}
