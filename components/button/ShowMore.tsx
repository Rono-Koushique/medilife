interface Props {
    loadMore:Function
}

export default function ShowMore({ loadMore }: Props) {
    return (
        <div className="flex mt-12 items-center">
            <span className="flex-grow bg-gray-200 h-px" />
            <button
                className="font-libre font-light text-gray-500 border border-gray-200 whitespace-nowrap rounded px-8 py-2
                        hover:bg-gray-50"
                onClick={()=>loadMore()}
            >
                Show More
            </button>
            <span className="flex-grow bg-gray-200 h-px" />
        </div>
    );
}
