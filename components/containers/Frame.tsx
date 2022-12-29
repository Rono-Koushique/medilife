interface Props {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
}

export default function Frame({ children, className }: Props) {
    return (
        <div className={className}>{children}</div>
    );
}
