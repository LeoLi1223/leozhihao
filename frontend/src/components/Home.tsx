import React, {Component} from 'react';
import Blog from "./Blog";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import 'animate.css';
import "./Home.scss";
import {NavLink} from "react-router-dom";

interface HomeState {
    posts: string[]
}

class Home extends Component<{}, HomeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        let response = await fetch('http://localhost:8080/api/read-blogs');
        let obj= (await response.json()) as {
            msg: string,
            posts: string[]
        };

        this.setState({
            posts: this.state.posts.concat(obj.posts)
        })
    }


    render() {
        return (
            <>
                <div className="personal-info">
                    <div className="image">
                        <img src={"/img/I.png"}/>
                    </div>
                    <br/>
                    <div> Zhihao (Leo) Li</div>
                    <br/>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/zhihao-li-nocilantro/" className="social-buttons__button social-button social-button--linkedin"
                           aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                        <a href="https://github.com/LeoLi1223" className="social-buttons__button social-button social-button--github"
                           aria-label="GitHub">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                        <a href="https://www.instagram.com/leoli_1223/" className="social-buttons__button social-button social-button--instagram"
                           aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                    </div>
                </div>

                <div className="home-content">
                    {/*introduction*/}
                    <div className="welcome">
                        <p>Welcome to my website!</p>
                    </div>
                    <nav>
                        {this.renderLatestPosts()}
                    </nav>
                </div>
            </>
        );
    }

    // Render Posts to DOM. Each Post is inside a NavLink.
    renderLatestPosts() {
        let toRender: JSX.Element[] = [];  // need to render a list of Blogs
        for (let i = 0; i < this.state.posts.length; i++) {
            if (this.state.posts[i]) {
                toRender.push(
                    <NavLink className="link" to={"/posts/" + this.getTitle(this.state.posts[i])}
                             state={{post: this.state.posts[i]}}
                             key={"post[" + i + "]"}>
                        <Blog post={this.state.posts[i]}/>
                    </NavLink>
                )
            }
        }
        return toRender;
    }

    getTitle(post:string): string {
        let title = post.indexOf("\n");
        return post.substring(2, title).toLowerCase().replaceAll(' ', '-');
    }
}

export default Home;