
export default function TweetImage (props){
    console.log(props);
    return(
        <div className="tweet-image">
           < img className="tweet-image" src={props.img}/>
        </div>
    )
}