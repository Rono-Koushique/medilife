import React from "react";
import { MagInfo, Product } from "../../typings";
import { urlFor } from "../../sanity";
import Image from "next/image";

interface Props {
    data: MagInfo;
}

export default function Product1({ data }: Props) {
    const { title, image } = data

    return (
        <div className="flex flex-col items-center">
            <div
                className="w-44 h-44 relative rounded-3xl border-2 border-yellow-900 border-opacity-30 overflow-hidden
                    lg:w-full lg:aspect-square lg:h-auto lg:rounded-full"
            >
                <Image
                    className="object-cover"
                    src={urlFor(image).url()}
                    fill={true}
                    sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                    priority={false}
                    alt={title}
                />
            </div>
            <p className="text-center leading-tight mt-1 text-yellow-900 font-semibold">
                {title}
            </p>
        </div>
    );
}
