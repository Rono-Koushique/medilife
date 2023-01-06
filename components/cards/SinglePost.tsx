import React from "react";
import { Post } from "../../typings";
import { urlFor } from "../../sanity";
import { ClockIcon, HeartIcon, BookOpenIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";

interface Props {
    post: Post;
}

export default function SinglePost({ post }: Props) {
    const {
        slug,
        publishedAt,
        title,
        description,
        author,
        mainImage,
        likeCount,
        readCount,
    } = post;

    // const [hydrated, setHydrated] = React.useState(false);
    // React.useEffect(() => {
    //     setHydrated(true);
    // }, []);

    return (
        post && (
            // <Link href={`/post/${slug.current}`}>
                <div
                    className="w-full flex flex-col gap-y-4 group
                            sm:flex-row sm:items-center sm:gap-y-0 sm:gap-x-4
                            lg:hover:bg-gray-100 lg:pr-4
                            xl:gap-x-6"
                >
                    {/* post image */}
                    <div
                        className="relative w-full h-72 overflow-hidden
                                sm:w-1/4 sm:h-auto sm:self-stretch
                                md:w-2/5"
                    >
                        {mainImage && (
                            <Image
                                className="object-cover w-full h-full
                                        lg:group-hover:scale-105 transition duration-500 ease-in-out"
                                src={urlFor(mainImage).url()}
                                priority={false}
                                sizes="(max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw,
                                    33vw"
                                fill={true}
                                alt={title}
                            />
                        )}
                    </div>

                    {/* post description */}
                    <div
                        className="mx-4 flex flex-col space-y-3
                                sm:w-3/4 sm:mx-0 sm:my-2
                                md:w-3/5"
                    >
                        <p className="font-libre text-2xl font-bold leading-snug text-slate-900">
                            {title}
                        </p>

                        {/* post info */}
                        <div className="flex items-center space-x-2 font-opens text-sm font-light text-slate-700">
                            <Image
                                className="h-6 w-6 rounded-full"
                                src={urlFor(author.image).url()}
                                width={100}
                                height={100}
                                alt={author.name}
                            />
                            <p className="cursor-pointer hover:underline hover:underline-offset-2">
                                {author?.name}
                            </p>
                            <span className="h-4 w-px bg-gray-500"></span>
                            <ClockIcon className="h-6 w-6" />
                            <p>
                                {publishedAt &&
                                    new Date(publishedAt).toLocaleDateString()}
                            </p>
                        </div>

                        {/* post description */}
                        <div className="text-lg text-gray-600">{`${
                            description && description.substring(0, 200)
                        }...`}</div>

                        {/* post reaction */}
                        <div className="flex pt-2 w-full items-center justify-start gap-x-2 text-sm font-opens text-gray-500">
                            <Link
                                className="bg-gray-700 text-slate-100 px-4 py-2 rounded mr-2"
                                href={`/post/${slug.current}`}
                            >
                                Read more
                            </Link>
                            <div className="flex items-center space-x-1">
                                <BookOpenIcon className="h-8 w-8" />
                                <p>{readCount}</p>
                            </div>
                            <div className="flex items-center space-x-1">
                                <HeartIcon className="h-8 w-8" />
                                <p>{likeCount}</p>
                            </div>
                        </div>
                    </div>
                </div>
            // </Link>
        )
    );
}
