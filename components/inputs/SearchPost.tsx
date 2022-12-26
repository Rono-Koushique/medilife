import { SearchIcon } from "@heroicons/react/outline";

export default function SearchPost() {
    return (
        <div className="flex border rounded px-2 py-1 space-x-2">
            <SearchIcon className="h-7"/>
            <input className="w-full outline-none" placeholder="Search by topic or medicine"/>
        </div>
    );
}
