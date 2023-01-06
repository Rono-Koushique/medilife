import React from "react";

export default function Size() {
    const [width, setWidth] = React.useState<string>();

    React.useEffect(() => {
        function handleResize() {
            let windowWidth = window.innerWidth;
            switch (true) {
                case windowWidth > 1536:
                    setWidth("2xl");
                    break;
                case windowWidth > 1280:
                    setWidth("xl");
                    break;
                case windowWidth > 1024:
                    setWidth("lg");
                    break;
                case windowWidth > 768:
                    setWidth("md");
                    break;
                case windowWidth > 640:
                    setWidth("sm");
                    break;
                default:
                    setWidth("Base");
                    break;
            }
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <div className="fixed z-30 bottom-4 left-4 text-lg bg-black px-4 py-2 rounded-full text-white">{width}</div>;
}
