// homepage feed card
import { horzInfo } from "../../typings";
import { urlFor } from "../../sanity";
import Image from "next/image";

interface Props {
    data: horzInfo;
}

export default function Category1({ data }: Props) {
    const { title, image } = data;
    return (
        <div
            className="flex items-center w-full h-16 space-x-4 cursor-pointer 
                    bg-transparent hover:bg-gray-100 transition 
                    duration-100 ease-in-out p-0"
        >
            {/* image */}
            <div className="h-12 w-12 relative">
                <Image
                    className="object-cover"
                    src={urlFor(image).url()}
                    fill={true}
                    priority={false}
                    placeholder="empty"
                    sizes="(max-width: 1024px) 10vw,
                        (max-width: 1280px) 10vw, 
                        10vw"
                    alt={title}
                />
            </div>

            {/* title */}
            <p className="text-slate-500 text-sm font-semibold">{title}</p>
        </div>
    );
}
