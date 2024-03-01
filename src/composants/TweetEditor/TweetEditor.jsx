import Avatar from "./Avatar";
import TweetEditorForm from "./TweetEditorForm";


export default function TweetEditor() {
   return(
        <div className="tweet-editor">
            <Avatar imageSource="/public/icons/Profile-Photo.svg" />
            <TweetEditorForm />
        </div>
   ) 
}


