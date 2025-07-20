import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../../appwrite/config";
import { Button, Container, Loading } from "../index";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import SpotlightCard from "../Animation/SpotLightCard";

export default function Post() {
    const [post, setPost] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    const {slug} = useParams();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    let isAuthor = post && userData ? post.userid === userData.$id : false;

    // useEffect( () => {
    //     isAuthor = post && userData ? post.userid === userData.$id : false;
    // }, [post] )

    useEffect(() => {
        if (slug) {
            service.getPost(slug)
            .then((post) => {
                if (post) {
                    setPost(post)
                    setLoading(false)
                }else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    useEffect( () => {
        if(post){
            service.getFilePreview(post.featured_image)
            .then( (res) => setImageURL(res) )
            .catch( (error) => {
                console.log(error);
            } )
        }
    }, [post] )

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deleteFile(post.featured_image);
                navigate("/");
            }
        });
    };


    return !loading ? (
        // <SpotlightCard className="custom-spotlight-card backdrop-blur-md  bg-transparent" spotlightColor="rgba(140, 98, 55, .3)">
            <div className="py-8 text-black backdrop-blur-md mt-20  min-h-screen flex flex-col justify-between">
                    <div>
                        <Container>
                            <div>
                                <div className="w-full mb-6 flex justify-center items-center">
                                    <h1 className="text-5xl font-bold text-black/60 ">{post.title}</h1>
                                </div>
                                <div 
                                className="w-full flex justify-center mb-4 relative border rounded-xl p-2 "
                                >
                                    <img
                                        src={imageURL}
                                        alt={post.title}
                                        className="rounded-xl"
                                    />
                                </div>
                                <div className="w-full mb-6">
                                    <h1 className="text-xl font-bold">{post.title}</h1>
                                </div>
                                <div className="browser-css">
                                    {parse(post.content)}
                                </div>
                            </div>
                        </Container>
                    </div>
                    <div className="flex justify-end mr-10" >
                        {isAuthor && (
                            <div className="">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-500" className=" hover:bg-green-400 hover:font-semibold text-white mr-3 px-4 py-2 rounded-lg bg-green-500 ">
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-500" className="hover:bg-red-400 hover:font-semibold text-white mr-3 px-4 py-2 rounded-lg bg-red-500" onClick={deletePost}>
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>
            </div>
        // </SpotlightCard>
    ) : <Loading />;
}