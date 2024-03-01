import TweetAvatar from "./TweetAvatar"
import TweetContent from "./TweetContent"
import Reply from '../../../public/icons/Reply.svg';
import Retweet from '../../../public/icons/Retweet.svg';

export default function Tweet(props){
    
    return(
        <div className='tweet'>
            <TweetAvatar value={props.table.avatar} />
            <TweetContent value={props.table.content} />
        </div>
    );
} 




