import { Post } from "../../typings";
import { urlFor } from "../../sanity";
import { ClockIcon, HeartIcon, BookOpenIcon } from "@heroicons/react/outline";
import Link from "next/link";

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

    return (
        post && <Link href={`/post/${slug.current}`}>
            <div
                className="flex items-center w-full space-x-5 group
                    hover:bg-gradient-to-b hover:from-gray-100 hover:to-gray-50 cursor-pointer"
            >
                {/* post image */}
                <div className="w-2/5 self-stretch overflow-hidden">
                    {mainImage && (
                        <img
                            className="h-full max-h-80 w-full object-cover group-hover:scale-105 transition duration-200 ease-in-out"
                            src={urlFor(mainImage).url()}
                            alt={title}
                        />
                    )}
                </div>

                {/* post description */}
                <div className="w-3/5 flex flex-col space-y-3 my-1 px-2 py-4">
                    <p className="font-libre text-2xl font-bold text-gray-800 cursor-pointer">
                        {title}
                    </p>

                    {/* post info */}
                    <div className="flex h-6 items-center space-x-2 text-sm font-opens font-light text-gray-500">
                        <img
                            className="h-full rounded-full filter"
                            src={urlFor(author.image).url()}
                            alt={author.name}
                        />
                        <p className="cursor-pointer hover:underline hover:underline-offset-2">
                            {author?.name}
                        </p>
                        <span className="h-4 w-px bg-gray-600"></span>
                        <ClockIcon className="h-full" />
                        <p>{publishedAt && new Date(publishedAt).toLocaleDateString()}</p>
                    </div>

                    {/* post description */}
                    <div className="text-lg text-gray-600">{`${description && description.substring(
                        0,
                        200
                    )}...`}</div>

                    {/* post reaction */}
                    <div className="flex h-6 items-center space-x-1 text-sm font-opens text-gray-500">
                        <HeartIcon className="h-full" />
                        <p>{likeCount}</p>
                        <span className="w-2" />
                        <BookOpenIcon className="h-full" />
                        <p>{readCount}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
