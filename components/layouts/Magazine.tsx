import Frame from "../containers/Frame";
import Wall from "../containers/Wall";

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

export default function Magazine({ children }: Props) {
    return (
        <div className="flex flex-col space-y-8">
            {children}
        </div>
    );
}
