import Link from "next/link";
import { HorzInfo } from "../../typings";

interface Props {
    info: HorzInfo[];
    className: string;
    count?: number;
    href: string;
    title: string;
    Card?: Function;
}

export default function HorzFeed({
    info,
    count,
    className,
    href="/",
    title,
    Card,
}: Props) {
    info = count ? info.slice(0, count) : info;
    return (
        <div className="flex flex-col">
            {/* header */}
            <div className="flex items-end justify-between">
                <p className="font-libre text-lg text-slate-700">{title}</p>
                <Link href={href}>
                    <p className="font-opens text-sm text-slate-500 hover:underline hover:underline-offset-2">
                        View All
                    </p>
                </Link>
            </div>
            <hr className="mt-1" />

            {/* list */}
            <div className={`flex flex-col ${className}`}>
                {Card &&
                    info.map((data) => {
                        return <Card data={data} key={data.title} />;
                    })}
            </div>
        </div>
    );
}
