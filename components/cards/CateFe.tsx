import { Category } from "../../typings";
import { urlFor } from "../../sanity";
import Image from "next/image";

interface Props {
    cate: Category;
}

export default function CateFe({ cate }: Props) {
    const { title, image } = cate;
    return (
        <div
            className="flex items-center w-full h-16 space-x-4 cursor-pointer 
                    bg-gray-100 bg-transparent hover:bg-gray-100 transition 
                    duration-100 ease-in-out p-0"
        >
            <div className="h-12 w-12 relative">
                <Image
                    className="object-cover"
                    src={urlFor(image).url()}
                    fill={true}
                    alt=""
                />
            </div>
            <p className="text-slate-500 text-sm font-semibold">{title}</p>
        </div>
    );
}
