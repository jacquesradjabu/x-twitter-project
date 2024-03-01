import TweetEditorButtons from "./TweetEditorButtons"

export default function TweetEditorInput({title}){
    return(
        <input 
            type="text"
            className="tweet-editor-input"
            placeholder="What is happening?" />
             
    )
}