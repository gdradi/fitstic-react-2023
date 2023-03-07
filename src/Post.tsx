import { Post } from "./EsercizioPost";


export const PostComponent: React.FunctionComponent<{
    post: Post
}> = (props) => {
    return <div>{JSON.stringify(props.post)}</div>
}