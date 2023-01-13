import { SearchIcon } from "@heroicons/react/outline";

interface Props {
    className?: string
}

export default function SearchPost({ className }: Props) {
    return (
        <div className={`flex items-center border rounded px-2 space-x-2 w-full bg-white ${className}`}>
            <SearchIcon className="h-5 lg:h-6"/>
            <input className="w-full outline-none" placeholder="Search topics"/>
        </div>
    );
}
