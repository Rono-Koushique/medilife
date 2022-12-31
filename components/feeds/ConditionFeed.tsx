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
                <p className="font-libre text-2xl text-yellow-800">Health Conditions</p>
                <Link href={"/health-condition"}>
                    <p className="font-opens text-sm text-yellow-800 hover:underline hover:underline-offset-2">
                        View All
                    </p>
                </Link>
            </div>
            <hr className="mt-1 border-t-2 border-yellow-700 border-opacity-10"/>

            {/* category tiles */}
            <div className="grid grid-cols-5 gap-8 mt-5 w-full">
                {conditions?.map((cond) => {
                    return <CondMa condition={cond} key={cond.title}/>;
                })}
            </div>
        </div>
    );
}
