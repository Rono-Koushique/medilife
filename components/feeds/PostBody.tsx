import React from "react";
import { Post } from "../../typings";
import { urlFor } from "../../sanity";
import { ClockIcon, HeartIcon, BookOpenIcon } from "@heroicons/react/outline";
import PostInfo from "../cards/PostInfo";
import PortableText from "react-portable-text";
import { TagIcon } from "@heroicons/react/outline";
import Frame from "../containers/Frame";
import PostShare from "../cards/PostShare";
import PostAuthor from "../cards/PostAuthor";
import PostReply from "../forms/PostReply";

interface Props {
    post: Post;
}

export default function PostBody({ post }: Props) {
    const [submitted, setSubmitted] = React.useState(false);
    return (
        <Frame>
            <section className="flex flex-col space-y-4">
                {post.categories && (
                    <div className="flex space-x-4">
                        {post.categories.map((cate) => {
                            return (
                                <div
                                    className="flex items-center space-x-1 font-medium text-teal-600 tracking-wide"
                                    key={cate.title}
                                >
                                    <TagIcon className="h-5" />
                                    <p>{cate.title}</p>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* title */}
                <p className="font-libre text-3xl font-bold text-gray-800 leading-snug">
                    {post.title}
                </p>

                {/* informations */}
                <div>
                    <div className="flex text-gray-500">
                        <div className="flex space-x-3 items-center">
                            <PostInfo
                                src={post.author.image}
                                text={post.author.name}
                            />
                            <span className="h-4 w-px bg-gray-400" />
                            <PostInfo
                                Icon={ClockIcon}
                                text={new Date(
                                    post.publishedAt
                                ).toLocaleDateString()}
                            />
                            <span className="h-4 w-px bg-gray-400" />
                            <PostInfo
                                Icon={HeartIcon}
                                text={post.likeCount.toString()}
                            />
                            <span className="h-4 w-px bg-gray-400" />
                            <PostInfo
                                Icon={BookOpenIcon}
                                text={post.readCount.toString()}
                            />
                        </div>
                    </div>
                </div>

                {/* description */}
                <p className="font-opens text-gray-500 leading-loose">
                    {post.description}
                </p>

                {/* main image */}
                <img
                    className="h-[444px] w-full object-cover"
                    src={urlFor(post.mainImage).url()}
                    alt="post"
                />
            </section>

            {/* body */}
            <article className="w-full">
                {post.body && (
                    <PortableText
                        className="font-opens text-gray-500 leading-loose text-justify mt-6"
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                        content={post.body}
                        serializers={{
                            normal: (props: any) => {
                                return <p className="" {...props} />;
                            },
                            h2: (props: any) => {
                                return (
                                    <h2
                                        className="font-libre text-3xl text-gray-700 font-bold leading-relaxed mt-4 mb-2"
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
                                return (
                                    <img
                                        className="my-6"
                                        src={urlFor(props.asset).url()}
                                    />
                                );
                            },
                        }}
                    />
                )}
            </article>

            <section>
                <PostShare />
            </section>
            <section>
                <PostAuthor author={post.author} />
            </section>
            <section>
                <PostReply submitted={submitted} setSubmitted={setSubmitted} postId={post._id} />
            </section>
        </Frame>
    );
}
