import { Icon } from "@iconify/react";

export default function PostShare() {
    return (
        <div className="flex items-center w-full border-y-2 py-2 justify-between mt-12">
            {/* share hub */}
            <div className="flex items-center space-x-2">
                {/* title */}
                <p className="uppercase text-slate-600">Share on:</p>

                {/* social icon holder */}
                <div className="flex items-center space-x-1">
                    <Icon className="iconify" icon="ri:facebook-fill" />
                    <Icon className="iconify" icon="ri:instagram-line" />
                    <Icon className="iconify" icon="ri:twitter-fill" />
                    <Icon className="iconify" icon="ri:linkedin-box-fill" />
                </div>
            </div>
            
            {/* feedback hub */}
            <div className="flex items-center space-x-2">
                <p className="uppercase text-slate-600">Feedback:</ p>
                <div className="flex items-center space-x-1">
                    <Icon className="iconify" icon="mdi:emoticon-happy-outline" />
                    <Icon className="iconify" icon="mdi:emoticon-sad-outline" />
                </div>
            </div>
        </div>
    );
}
