interface Props {
    open: boolean;
    setOpen: Function;
    className?: string;
}

export default function Hamburger({ open, setOpen, className }: Props) {
    return (
        <div
            className={`h-5 w-8 flex flex-col space-y-2 text-white overflow-hidden ${className}`}
            onClick={() => setOpen((prev: boolean) => !prev)}
        >
            <div className={`w-1/2 h-1/3 bg-white self-end ${open ? '-translate-x-[200%]':''}
                        transition duration-100 ease-in-out`}></div>
            <div className={`w-full h-1/3 bg-white ${open ? '-translate-x-[100%]':''}
                        transition delay-100 duration-100 ease-in-out`}></div>
            <div className={`w-1/2 h-1/3 bg-white ${open ? '-translate-x-[100%]':''}
                        transition delay-200 duration-100 ease-in-out`}></div>
        </div>
    );
}
