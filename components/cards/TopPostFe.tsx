import { Post } from "../../typings";
import { urlFor } from "../../sanity";

interface Props {
    post: Post;
}

export default function TopPostFe({ post }: Props) {
    const { title, mainImage, slug } = post;
    return (
        <div className="h-fit flex flex-col items-center space-y-1 cursor-pointer">
            {mainImage && (
                <img
                    className="h-40 w-full object-cover"
                    src={urlFor(mainImage).url()}
                    alt=""
                />
            )}
            <p className="text-center text-sm text-gray-800 font-semibold">
                {title}
            </p>
        </div>
    );
}
