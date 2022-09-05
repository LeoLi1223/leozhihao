import React from 'react';
import ReactMarkdown from "react-markdown";
import {useLocation} from "react-router-dom";
import {BlogObj} from "../types";
import './Post.css';

interface LocationState {
    post: string
}

function Post () {
    const {post} = useLocation().state as LocationState;
    console.log(useLocation().state);

    const title = getTitle(post);
    const content = getContent(post);
    const info = getInfo(post);

    return (
        <div className='post'>
            <ReactMarkdown children={title}/>
            <ReactMarkdown children={info}/>
            <ReactMarkdown children={content}/>

        </div>
    )
}

const getTitle = (post: string) => {
    let title = post.indexOf("\n");
    return post.substring(0, title);
}

const getContent = (post: string) => {
    let title = post.indexOf("\n");
    let content = post.lastIndexOf("\n");
    return post.substring(title + 1, content);
}

const getInfo = (post: string) => {
    let date = post.lastIndexOf("\n");
    return "Zhihao Li &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;" + post.substring(date + 4);
}



export {Post};