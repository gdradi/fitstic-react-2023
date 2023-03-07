import { useState } from "react";
import { PostComponent } from "./Post";

export interface Post {
    readonly author: string;
    readonly body: string;
}


export const EsercizioPost: React.FunctionComponent<{
    post: Post,
    setPost: (post: Post) => void
}> = (props) => {

    return <div>
        <div className="form">
            <div>
                <div className="label">Autore</div>
                <input type="text" placeholder="author" onChange={event => {
                    const value = event.target.value;
                    console.log(value);

                    // post.author = value;
                    // console.log("Post dentro onChange", post);
                    // setPost(post);

                    props.setPost({
                        ...props.post,
                        author: value
                    });
                }} />
            </div>
            <div>
                <div className="label">Corpo</div>
                <textarea placeholder="body" rows={5} onChange={event => {
                    const value = event.target.value;
                    console.log(value);

                    props.setPost({
                        ...props.post,
                        body: value
                    })

                    // setBody(value);
                }} />
            </div>
        </div>

        <PostComponent post={props.post} />

        {/* 
        <div>{titolo}</div>
        <div>{body}</div> */}
    </div>
}