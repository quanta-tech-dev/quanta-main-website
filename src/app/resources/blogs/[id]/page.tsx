import React from 'react';
import {blogs} from "@/app/data/blogItems";

interface PageProps {
    params: {
        id: string;
    };
}

const Page = ({params}: PageProps) => {
    const {id} = params;
    const idNumber = Number(id);
    const blog = blogs.find(blog => blog.id === idNumber);

    if (!blog) {
        return <div>Blog not found</div>;
    }
    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.description}</p>
        </div>
    );
};

export default Page;