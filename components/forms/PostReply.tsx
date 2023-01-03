import { useForm, SubmitHandler } from "react-hook-form";
import { Icon } from "@iconify/react";
import Frame from "../containers/Frame";

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

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
        }, 3000);
    };

    return (
        <Frame>
            {submitted ? (
                <div>Submiting</div>
            ) : (
                <div className="mt-12">
                    <p className="font-libre font-bold text-xl text-slate-700">
                        Leave a Comment
                    </p>
                    <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                        {/* hidden configuration input */}
                        <input
                            {...register("_id")}
                            type="hidden"
                            name="_id"
                            value={postId}
                        />
                        <div className="grid grid-cols-2 gap-4">
                            {/* name input */}
                            <div className="items-center comment-input-holder">
                                <input
                                    {...register("name", { required: true })}
                                    className="form-input comment-input"
                                    placeholder="Name..."
                                    type="text"
                                />
                                <Icon
                                    className="text-3xl text-slate-500"
                                    icon="mdi:user-online-outline"
                                />
                            </div>
                            {/* email input */}
                            <div className="items-center comment-input-holder">
                                <input
                                    {...register("email", { required: true })}
                                    className="form-input comment-input"
                                    placeholder="Email"
                                    type="email"
                                />
                                <Icon
                                    className="text-3xl text-slate-500"
                                    icon="ic:outline-mail-outline"
                                />
                            </div>
                            {/* website input */}
                            <div className="col-span-2 items-center comment-input-holder">
                                <input
                                    {...register("website")}
                                    className="form-input comment-input"
                                    placeholder="Website"
                                    type="text"
                                />
                                <Icon
                                    className="text-3xl text-slate-500"
                                    icon="mdi:web-check"
                                />
                            </div>
                            {/* comment input */}
                            <div className="col-span-2 items-start comment-input-holder">
                                <textarea
                                    {...register("comment")}
                                    className="form-input h-fit leading-relaxed comment-input"
                                    placeholder="Your Comment"
                                    rows={3}
                                />
                                <Icon
                                    className="text-3xl text-slate-500"
                                    icon="material-symbols:chat-bubble-outline"
                                />
                            </div>
                        </div>
                        {(errors.name || errors.email || errors.comment) && (
                            <div className="flex flex-col p-5">
                                {errors.name && (
                                    <span className="text-red-500">
                                        - The name field is required *
                                    </span>
                                )}
                                {errors.email && (
                                    <span className="text-red-500">
                                        - The email field is required *
                                    </span>
                                )}
                                {errors.comment && (
                                    <span className="text-red-500">
                                        - The comment field is required *
                                    </span>
                                )}
                            </div>
                        )}
                        <input
                            className="shadow-md bg-gray-50 border border-slate-200 text-slate-500 hover:bg-gray-100 focus:shadow-outline focus:outline-none 
                                font-semibold hover:text-slate-600 p-2 rounded-md cursor-pointer w-full transition duration-200 ease-in-out 
                                active:bg-gray-50 active:shadow-sm mt-8"
                            type="submit"
                            value="Submit Comment"
                        />
                    </form>
                </div>
            )}
        </Frame>
    );
}
