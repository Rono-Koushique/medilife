import { Category } from "../../typings";
import { urlFor } from "../../sanity";
import { ChevronRightIcon } from "@heroicons/react/outline";

interface Props {
    cate: Category;
}

export default function GridCate({ cate }: Props) {
    return (
        <div className="cursor-pointer flex items-center transition-all duration-50 px-4 pl-2 rounded hover:bg-slate-100">
            <div className="flex space-x-6 py-4 items-center">
                <img
                    className="h-20 rounded-full aspect-square object-cover filter saturate-60 bg-yellow-100"
                    src={urlFor(cate.image).url()}
                />
                <div className="flex flex-col space-y-1">
                    <h2 className="font-libre text-xl font-semibold text-slate-700">
                        {cate.title}
                    </h2>
                    <p className="leading-tight text-gray-500">
                        {cate.description}
                    </p>
                </div>
            </div>
            <div className="h-full flex items-center justify-center ml-auto">
                <ChevronRightIcon className="h-8 text-gray-300" />
            </div>
        </div>
    );
}
