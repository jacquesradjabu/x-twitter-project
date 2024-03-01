import Media from '../../../public/icons/Media.svg';
import Gif from '../../../public/icons/Gif.svg';
import Lists from '../../../public/icons/Lists.svg';
import Emoji from '../../../public/icons/Emoji.svg';
import Schedule from '../../../public/icons/Schedule.svg';

export default function TweetEditorAction() {
    return(
        <div className="tweet-editor-action">
            < img src={Media} alt='media icon'/>
            < img src={Gif} alt='Gif icon'/>
            < img src={Lists} alt='Lists icon'/>
            < img src={Emoji} alt='Emoji icon'/>
            < img src={Schedule} alt='Schedule icon'/>
            
        </div>
        
    );
}