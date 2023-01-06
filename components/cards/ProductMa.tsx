import React from "react";
import { Product } from "../../typings";
import { urlFor } from "../../sanity";
import Image from "next/image";

interface Props {
    product: Product;
}

export default function ProductMa({ product }: Props) {
    return (
        <div className="flex flex-col items-center">
            <div
                className="w-44 h-44 relative rounded-3xl border-2 border-yellow-900 border-opacity-30 overflow-hidden
                    lg:w-full lg:aspect-square lg:h-auto lg:rounded-full"
            >
                <Image
                    className="object-cover"
                    src={urlFor(product.image).url()}
                    fill={true}
                    sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                    priority={false}
                    alt={product.title}
                />
            </div>
            <p className="text-center leading-tight mt-1 text-yellow-900 font-semibold">
                {product.title}
            </p>
        </div>
    );
}
