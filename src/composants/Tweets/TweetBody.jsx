import TweetTitle from "./TweetTitle";
import TweetText from "./TweetText";
import TweetImage from "./TweetImage";

export default function TweetBody (props){
    console.log(props.value.image);
    return(
        <div>
            <TweetTitle  value={props.value.title}/>
            <TweetText text={props.value.text}/>
            <TweetImage img={props.value.image}/>
        </div>
    )
}