import Link from "next/link";
import { Condition } from "../../typings";
import CondMa from "../cards/CondMa";

interface Props {
    conditions?: Condition[];
}

export default function ConditionFeed({ conditions }: Props) {
    return (
        <div className="flex flex-col">
            {/* header */}
            <div className="flex items-end justify-between">
                <p className="font-libre text-xl font-semibold text-yellow-700
                            lg:text-2xl">
                    Health Conditions
                </p>
                <Link href={"/health-condition"}>
                    <p className="font-opens text-sm text-yellow-600 hover:underline hover:underline-offset-2">
                        View All
                    </p>
                </Link>
            </div>
            <hr className="mt-1 border-t-2 border-yellow-700 border-opacity-10" />

            {/* category tiles */}
            <div className="flex gap-x-6 mt-5 overflow-x-scroll no-scrollbar
                        lg:w-full lg:grid lg:grid-cols-5">
                {conditions?.map((cond) => {
                    return <CondMa condition={cond} key={cond.title} />;
                })}
            </div>
        </div>
    );
}
