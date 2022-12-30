import { useForm, SubmitHandler } from "react-hook-form";
import { Icon } from "@iconify/react";

interface Props {
    submitted: boolean;
    setSubmitted: Function;
    postId: string;
}

interface IFormInput {
    _id: string;
    name: string;
    email: string;
    website: string;
    comment: string;
}

export default function PostReply({ submitted, setSubmitted, postId }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>();

    return (
        <div className="mt-12">
            <p className="font-libre font-bold text-xl text-slate-700">
                Leave a Reply
            </p>
            <form>
                {/* hidden configuration input */}
                <input
                    {...register("_id")}
                    type="hidden"
                    name="_id"
                    value={postId}
                />
                <div className="grid grid-cols-2 gap-x-8">
                    {/* name input */}
                    <div className="flex items-center mb-5 border-b  px-3 border-gray-300 rounded-xl overflow-hidden">
                        <input
                            {...register("name", { required: true })}
                            className="py-2 form-input outline-none mt-1 w-full font-opens placeholder-slate-500"
                            placeholder="Name..."
                            type="text"
                        />
                        <Icon
                            className="text-3xl text-slate-500"
                            icon="mdi:user-online-outline"
                        />
                    </div>
                    {/* email input */}
                    <div className="flex items-center mb-5 border-b  px-3 border-gray-300 rounded-xl overflow-hidden">
                        <input
                            {...register("email", { required: true })}
                            className="py-2 form-input outline-none mt-1 w-full font-opens placeholder-slate-500"
                            placeholder="Email"
                            type="email"
                        />
                        <Icon
                            className="text-3xl text-slate-500"
                            icon="ic:outline-mail-outline"
                        />
                    </div>
                    {/* website input */}
                    <div className="col-span-2 flex items-center mb-5 border-b  px-3 border-gray-300 rounded-xl overflow-hidden">
                        <input
                            {...register("website")}
                            className="py-2 form-input outline-none mt-1 w-full font-opens placeholder-slate-500"
                            placeholder="Website"
                            type="text"
                        />
                        <Icon
                            className="text-3xl text-slate-500"
                            icon="mdi:web-check"
                        />
                    </div>
                    {/* comment input */}
                    <div className="col-span-2 flex items-start mb-5 border-b  px-3 border-gray-300 rounded-xl overflow-hidden">
                        <textarea
                            {...register("comment")}
                            className="py-2 form-input outline-none mt-1 w-full font-opens placeholder-slate-500"
                            placeholder="Your Comment"
                            rows={4}
                        />
                        <Icon
                            className="text-3xl text-slate-500"
                            icon="material-symbols:chat-bubble-outline"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}
