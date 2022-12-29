interface Props {
    children: React.ReactNode | React.ReactNode[];
    className?: string
}

export default function Wall({ children, className }: Props) {
    return (
        <div className={`w-full h-fit ${className ? className : ""}`}>{children}</div>
    );
}
