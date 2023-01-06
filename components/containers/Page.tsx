interface Props {
    children: React.ReactNode | React.ReactNode[];
    className?: string
}

export default function Page({ children, className }: Props) {
    return (
        <div className={`flex min-h-screen w-full ${className}`}>{children}</div>
    );
}
