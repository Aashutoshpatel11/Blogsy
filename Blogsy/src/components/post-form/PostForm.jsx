
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import service from "../../appwrite/config";

export default function PostForm({ post }) {

    const[isNewPost, setIsNewPost] = useState(true);
    const[imageuRL, setImageURL] = useState("")
    useEffect( () => {
        if(post) setIsNewPost(false);
    }, [post] )

    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            tagline: post?.tagline || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    useEffect( () => {
        if(post){
            service.getFilePreview(post.featured_image)
            .then( (res) => {
                console.log(post.featured_image);
                setImageURL(res)
                console.log(imageuRL);
                console.log("here");
            } )
            .catch( (error) => {
                console.log("EDII POST:: getFilePreview:: error",error);
            } )
        }
    }, [] )
    

    const submit = async (data) => {
        if (post?.$id) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;
            if (file) {
                appwriteService.deleteFile(post.featured_image);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featured_image: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featured_image = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userid: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    const handleGenerateWithAI = () => {
        navigate("/generate_with_ai");
    }

    return (
        <form onSubmit={handleSubmit(submit)} className=" flex flex-col md:flex-row h-full flex-wrap py-20 mb-10 text-xs sm:text-base text-black backdrop-blur-md ">
            <div className="w-full sm:w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <Input
                    label="tagline :"
                    placeholder="tagline"
                    className="mb-4"
                    {...register("tagline", { required: true })}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2 relative flex flex-col justify-between">
                <div className="t-0" >
                    <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={imageuRL}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status:"
                    className="mb-4 text-black m-4 rounded-md pl-2 pr-4 "
                    {...register("status", { required: true })}
                />
                </div>
                <div className="b-0 flex justify-between w-full " >
                    {isNewPost && (<button 
                        onClick={ () => handleGenerateWithAI()}
                        type="click"  
                        className=" bg-blue-500 hover:bg-blue-400 hover:font-semibold text-white rounded-xl px-8 py-1">
                        ✨Generate with AI
                    </button>)}
                    <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className=" bg-green-500 hover:bg-green-400 hover:font-semibold text-white rounded-xl px-8 py-1">
                    {post ? "Update" : "Submit"}
                    </Button>
                </div>
            </div>
        </form>
    );
}
