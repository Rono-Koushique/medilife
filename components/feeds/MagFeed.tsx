import Link from "next/link";
import { MagInfo } from "../../typings";
import { urlFor } from "../../sanity";

interface Props {
    info: MagInfo[];
    className?: string;
    count?: number;
    href?: string;
    title: string;
    Card?: Function;
}

export default function MagFeed({
    info,
    count,
    className,
    href,
    title,
    Card,
}: Props) {
    return (
        <div className="flex flex-col">
            <div className="flex items-end justify-between">
                <p
                    className="font-libre text-xl font-semibold text-yellow-700
                            lg:text-2xl"
                >
                    {title}
                </p>
                {href && (
                    <Link href={href}>
                        <p className="font-opens text-sm text-yellow-700 hover:underline hover:underline-offset-2">
                            View All
                        </p>
                    </Link>
                )}
            </div>
            <hr className="mt-1 border-t-2 border-yellow-700 border-opacity-10" />

            <div
                className="flex gap-x-6 mt-5 overflow-x-scroll no-scrollbar
                        lg:w-full lg:grid lg:grid-cols-5"
            >
                {Card &&
                    info.map((data) => {
                        // return <div>{urlFor(data.image).url}</div>
                        return <Card data={data} key={data.title} />;
                    })}
            </div>
        </div>
    );
}
