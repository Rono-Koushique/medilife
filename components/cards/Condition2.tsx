import { Condition } from "../../typings";
import { urlFor } from "../../sanity";
import { ChevronRightIcon } from "@heroicons/react/outline";

interface Props {
    cond: Condition;
}

export default function Condition2({ cond }: Props) {
    return (
        <div
            className="cursor-pointer flex items-center transition-all duration-50 p-4 rounded-lg rounded-tl-full rounded-bl-full overflow-hidden
                    group hover:scale-105 hover:shadow-xl border-b-2"
        >
            <div className="flex space-x-6 items-center">
                <img
                    className="h-32 w-32 rounded-tl-full rounded-bl-full filter saturate-60 bg-yellow-100"
                    src={urlFor(cond.image).url()}
                />
                <div className="flex flex-col space-y-1 ml-4">
                    <h2 className="font-libre text-xl font-semibold text-slate-700">
                        {cond.title}
                    </h2>
                    <p className="text-gray-500">
                        {`${cond.description.substring(0, 100)}.... working`}
                    </p>
                </div>
            </div>
            <div className="h-full flex items-center justify-center ml-auto">
                <ChevronRightIcon className="h-8 text-gray-300" />
            </div>
        </div>
    );
}
