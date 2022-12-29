import Frame from "../containers/Frame";
import Wall from "../containers/Wall";

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

export default function Magazine({ children }: Props) {
    return (
        <Wall className="bg-yellow-100 shadow-t-lg">
            <Frame className="max-w-6xl mx-auto">
                <div className="flex flex-col space-y-12 py-16">{children}</div>
            </Frame>
        </Wall>
    );
}
