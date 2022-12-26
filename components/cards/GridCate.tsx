import { Category } from "../../typings";
import { urlFor } from "../../sanity";

interface Props {
    cate: Category;
}

export default function GridCate({ cate }: Props) {
    return (
        <div
            className="rounded-md overflow-hidden cursor-pointer flex flex-col bg-yellow-50
                    items-center justify-center group transition-all duration-150"
        >
            <div>
                <img
                    className="h-full w-full object-cover "
                    src={urlFor(cate.image).url()}
                />
            </div>
            <div
                className="flex flex-col items-center justify-center w-full px-6 py-8 
                        space-y-3 h-full group-hover:bg-yellow-50"
            >
                <h2
                    className="text-center font-libre text-2xl font-semibold text-yellow-800"
                >
                    {cate.title}
                </h2>
                <p className="text-center text-lg leading-tight text-gray-600">
                    {cate.description}
                </p>
            </div>
        </div>
    );
}
