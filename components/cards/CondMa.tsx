import React from "react";
import { Condition } from "../../typings";
import { urlFor } from "../../sanity";
import Image from "next/image";

interface Props {
    condition: Condition;
}

export default function CondMa({ condition }: Props) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-56 h-44 relative rounded-md border-2 border-yellow-900 border-opacity-30 overflow-hidden
                        lg:w-full lg:h-44">
                <Image
                    className=" object-cover"
                    src={urlFor(condition.image).url()}
                    fill={true}
                    alt={condition.title}
                />
            </div>
            <p className="text-center leading-tight mt-1 text-yellow-900 font-semibold">
                {condition.title}
            </p>
        </div>
    );
}
