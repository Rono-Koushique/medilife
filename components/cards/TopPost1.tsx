import { horzInfo } from "../../typings";
import { urlFor } from "../../sanity";
import Image from "next/image";
import Link from "next/link";

interface Props {
    data: horzInfo;
}

export default function TopPost1({ data }: Props) {
    const { title, mainImage, slug } = data;
    return (
        slug && (
            <Link
                href={`/post/${slug.current}`}
                className="h-fit flex flex-col items-center space-y-1 cursor-pointer group rounded-md"
            >
                <div className="h-40 w-full relative rounded-sm overflow-hidden">
                    {mainImage && (
                        <Image
                            className="object-cover origin-center filter brightness-125 contrast-50 saturate-50 group-hover:brightness-100 group-hover:contrast-100 group-hover:saturate-100 transition duration-150 ease-in-out"
                            src={urlFor(mainImage).url()}
                            fill={true}
                            priority={false}
                            placeholder="empty"
                            sizes="(max-width: 1024px) 20vw,
                                (max-width: 1280px) 20vw, 
                                20vw"
                            alt=""
                        />
                    )}
                </div>
                <p className="text-center text-sm text-slate-500 font-semibold px-4 group-hover:underline group-hover:text-slate-700">
                    {title}
                </p>
            </Link>
        )
    );
}
