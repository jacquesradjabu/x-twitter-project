import TweetAction from "./TweetAction"
import Reply from "../../../public/icons/Reply.svg"
import Retweet from "../../../public/icons/Retweet.svg"
import React from "../../../public/icons/React.svg"
import Share from "../../../public/icons/Share.svg"


export default function TweetActions (props){
    return(
        <div className="tweet-actions">
           < TweetAction icon={Reply} value={props.value.reply}/>
           < TweetAction icon={Retweet} value={props.value.retweet}/>
           < TweetAction icon={React } value={props.value.react}/>
           < TweetAction icon={Share} value={props.value.share}/>
        </div>
    )
}