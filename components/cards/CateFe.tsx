import { Category } from "../../typings";
import { urlFor } from "../../sanity";

interface Props {
    cate: Category;
}

export default function CateFe({ cate }: Props) {
    const { title, image } = cate;
    return (
        <div className="flex items-center h-16 space-x-4 cursor-pointer
                    hover:bg-gray-100 transition duration-100 ease-in-out">
            <div className="h-full">
                <img
                    className="h-full aspect-square object-cover"
                    src={urlFor(image).url()}
                    alt=""
                />
            </div>
            <p className="text-gray-500 text-sm font-semibold">{title}</p>
        </div>
    );
}
