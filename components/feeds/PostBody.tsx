import { Post } from "../../typings";
import { urlFor } from "../../sanity";
import { ClockIcon, HeartIcon, BookOpenIcon } from "@heroicons/react/outline";
import PostInfo from "../cards/PostInfo";
import PortableText from "react-portable-text";


interface Props {
    post: Post;
}

export default function PostBody({ post }: Props) {
    const {
        author,
        title,
        description,
        body,
        mainImage,
        publishedAt,
        likeCount,
        readCount,
    } = post;

    return (
        <div className="flex flex-col space-y-4">
            {/* title */}
            <p className="font-libre text-4xl font-bold text-gray-800 leading-snug">
                {title}
            </p>

            {/* informations */}
            <div>
                <div className="flex text-gray-500">
                    <div className="flex space-x-3 items-center">
                        <PostInfo src={author.image} text={author.name} />
                        <span className="h-4 w-px bg-gray-400" />
                        <PostInfo
                            Icon={ClockIcon}
                            text={new Date(publishedAt).toLocaleDateString()}
                        />
                        <span className="h-4 w-px bg-gray-400" />
                        <PostInfo
                            Icon={HeartIcon}
                            text={likeCount.toString()}
                        />
                        <span className="h-4 w-px bg-gray-400" />
                        <PostInfo
                            Icon={BookOpenIcon}
                            text={readCount.toString()}
                        />
                    </div>
                </div>
            </div>

            {/* description */}
            <p className="font-opens text-gray-500 leading-loose">
                {description}
            </p>

            {/* main image */}
            <img
                className="h-[444px] w-full object-cover"
                src={urlFor(mainImage).url()}
                alt="post"
            />

            {/* body */}
            <article className="w-full">
                {body && (
                    <PortableText
                        className="font-opens text-gray-500 leading-loose text-justify mt-6"
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                        content={body}
                        serializers={{
                            normal: (props: any) => {
                                return <p className="" {...props} />;
                            },
                            h2: (props: any) => {
                                return (
                                    <h2
                                        className="text-3xl text-gray-700 font-bold leading-relaxed mt-4 mb-2"
                                        {...props}
                                    />
                                );
                            },
                            h3: (props: any) => {
                                return (
                                    <h3
                                        className="text-2xl text-gray-700 font-bold leading-relaxed mt-4 mb-1"
                                        {...props}
                                    />
                                );
                            },
                            h4: (props: any) => {
                                return (
                                    <h4
                                        className="text-xl text-gray-700 font-bold leading-relaxed mt-4"
                                        {...props}
                                    />
                                );
                            },
                            strong: (props: any) => {
                                return (
                                    <span
                                        className="font-bold text-gray-700"
                                        {...props}
                                    />
                                );
                            },
                            ul: (props: any) => {
                                return (
                                    <ul
                                        className="my-4 ml-8 list-none"
                                        {...props}
                                    />
                                );
                            },
                            image: (props: any) => {
                                return <img className="my-6" src={urlFor(props.asset).url()} />;
                            },
                        }}
                    />
                )}
            </article>
        </div>
    );
}
