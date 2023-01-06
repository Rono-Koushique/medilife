import { SearchIcon } from "@heroicons/react/outline";

export default function SearchPost() {
    return (
        <div className="flex items-center border rounded px-2 py-1 space-x-2 w-full">
            <SearchIcon className="h-6 lg:h-7"/>
            <input className="w-full outline-none" placeholder="Search topics"/>
        </div>
    );
}
