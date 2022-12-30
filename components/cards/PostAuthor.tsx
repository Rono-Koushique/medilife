import { urlFor } from "../../sanity";
import { Author } from "../../typings";
import { Icon } from "@iconify/react";
import PortableText from "react-portable-text";

interface Props {
    author: Author;
}

export default function PostAuthor({ author }: Props) {
    return (
        <div className="flex items-center space-x-8 mt-12">
            <img
                className="rounded-full h-36"
                src={urlFor(author.image).url()}
            />
            <div className="flex flex-col space-y-3">
                {/* author name */}
                <p className="text-slate-600">
                    Written By{" "}
                    <span className="font-semibold text-cyan-600">
                        {author.name}
                    </span>
                </p>

                {/* author information */}
                {author.bio && (
                    <PortableText
                        className="font-opens text-gray-500 text-justify"
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                        content={author.bio}
                    />
                )}

                {/* social icons */}
                <div className="flex items-center space-x-1">
                    <Icon className="iconify" icon="ri:linkedin-box-fill" />
                    <Icon className="iconify" icon="ri:twitter-fill" />
                    <Icon className="iconify" icon="ri:facebook-fill" />
                    <Icon className="iconify" icon="ri:instagram-line" />
                </div>
            </div>
        </div>
    );
}
