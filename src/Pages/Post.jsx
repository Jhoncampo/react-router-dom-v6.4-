import React from "react";
import { Link, useLoaderData } from "react-router-dom";
const Post = () => {
    const { post } = useLoaderData();
    return (
        <>
            <ul>
                <li>
                    {post.id} - {post.title}
                </li>
            </ul>
            <Link to="/blog" className="btn btn-primary">Volver</Link>
        </>
    );
};

export default Post;

export const loaderPost = async ({ params }) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    if(!res.ok) throw ({
        status: res.status,
        statusText: "No encontrado"
    })
    const post = await res.json();
    return { post };
};
