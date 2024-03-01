import TweetAuthor from "./TweetTitleAuthor";
import TweetTitleDetails from "./TweetTitleDetails";

export default function TweetTitle (props){
   console.log(props)
    return(
        <div className="tweet-title">
            < TweetAuthor value={props.value.author}/>
             < TweetTitleDetails value={props.value.detail}/>
             < TweetTitleDetails value="."/>
             < TweetTitleDetails value={props.value.time}/>
        </div>
    )
}
