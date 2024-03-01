import Header from "./Header/Header";
import TweetEditor from "./TweetEditor/TweetEditor";
import Tweets  from "./Tweets/Tweets";

export default function Timeline() {
    return (
        <div className="timeline">
            <Header />
            <TweetEditor />
            <Tweets/>
        </div>
       
    )
}