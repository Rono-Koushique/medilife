import { urlFor } from "../../sanity";

interface Props {
    src?: string;
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    text?: string;
}

export default function PostInfo({ src, Icon, text }: Props) {
    return (
        <div className="flex items-center h-fit space-x-2">
            {src && <img
                className="rounded-full h-8"
                src={urlFor(src).url()}
            />}
            {Icon && <Icon className="w-6 h-6"/>}
            <p>{text}</p>
        </div>
    );
}
