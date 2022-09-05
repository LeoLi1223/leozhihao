import React, {Component} from 'react';
import ReactMarkdown from "react-markdown";
import './Blog.css';

interface BlogProps {
    post: string
}

class Blog extends Component<BlogProps, {}> {

    render() {
        return (
            <div className="blog">
                <ReactMarkdown className="blog-title" children={this.getTitle()}/>
                <ReactMarkdown className="blog-content" children={this.getContent()}/>
                <ReactMarkdown className="blog-info" children={this.getInfo()}/>
            </div>
        );
    }

    getTitle() {
        let title = this.props.post.indexOf("\n");
        return this.props.post.substring(0, title);
    }

    getContent() {
        let title = this.props.post.indexOf("\n");
        let content = this.props.post.indexOf("\n", title + 1);
        return this.props.post.substring(title + 1, content);
    }

    getInfo() {
        let date = this.props.post.lastIndexOf("\n");
        return "Zhihao Li &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;" + this.props.post.substring(date + 4);
    }
}

export default Blog;