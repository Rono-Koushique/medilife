interface Props {
    open: boolean;
    setOpen: Function;
}

export default function Hamburger({ open, setOpen }: Props) {
    return (
        <div className="h-full w-full flex flex-col space-y-2 text-white">
            <div className="h-1/3 w-1/2 self-end bg-white"></div>
            <div className="h-1/3 w-full bg-white"></div>
            <div className="h-1/3 w-1/2 bg-white"></div>
        </div>
    );
}
