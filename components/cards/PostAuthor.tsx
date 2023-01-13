import { urlFor } from "../../sanity";
import { Author } from "../../typings";
import { Icon } from "@iconify/react";
import PortableText from "react-portable-text";

interface Props {
    author: Author;
}

export default function PostAuthor({ author }: Props) {
    return (
        <div className="flex flex-col mx-8 items-center mt-12 gap-y-4
                    md:flex-row md:mx-0 md:gap-x-4">
            {/* author image */}
            <img
                className="rounded-full h-36
                        md:h-full md:w-44"
                src={urlFor(author.image).url()}
            />

            {/* author information */}
            <div className="flex flex-col items-center gap-y-4  text-center
                        md:items-start md:text-start">
                {/* author name */}
                <p className="flex flex-col items-center text-slate-700
                            md:flex-row md:items-end md:gap-x-1">
                    Written By{" "}
                    <span className="font-semibold text-2xl text-cyan-600
                                md:text-base">
                        {author.name}
                    </span>
                </p>

                {/* author information */}
                {author.bio && (
                    <PortableText
                        className="font-opens text-gray-500 leading-relaxed"
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                        content={author.bio}
                    />
                )}

                {/* social icons */}
                <div className="flex items-center
                            md:gap-x-1">
                    <Icon className="iconify" icon="ri:linkedin-box-fill" />
                    <Icon className="iconify" icon="ri:twitter-fill" />
                    <Icon className="iconify" icon="ri:facebook-fill" />
                    <Icon className="iconify" icon="ri:instagram-line" />
                </div>
            </div>
        </div>
    );
}
