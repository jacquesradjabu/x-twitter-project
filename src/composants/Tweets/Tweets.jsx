import Tweet from "./Tweet"
import cnn from '../../../public/images/cnn.png';
import times from '../../../public/images/times.png';
import tweetlogo from '../../../public/images/twitter-logo.png';
import TweetImage from '../../../public/images/img-post.png'



export default function Tweets() {
  let tweets = [
    {
        "id":"01",
        "avatar": cnn,
        "content": {
            "body": {
                "title": {
                    "author": "CNN",
                    "detail": "@CNN",
                    "time": "7m"
                },
                "text":'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
                "image": ""
            },
            "actions":{
                "reply": "57",
                "retweet": "144",
                "react": "184",
                "share": ""
            }
        }

    },
    {
        "id":"02",
        "avatar": times,
        "content": {
            "body": {
                "title": {
                    "author": "The New York Times",
                    "detail": "@nytimes",
                    "time": "2h"
                },
                "text":'Gardining boomed during the pandemic. Six Black writers shares how has helped them re-establish, and reimagine, a connection to cultovition and the land',
                "image": TweetImage
            },
            "actions":{
                "reply": "19",
                "retweet": "48",
                "react": "482",
                "share": ""
            }
        }

    },
    {
        "id":"03",
        "avatar": tweetlogo,
        "content": {
            "body": {
                "title": {
                    "author": "Twitter",
                    "detail": "@Twitter",
                    "time": "Oct 29"
                },
                "text":'BIG NEWS lol jk still Twitter',
                "image": ""
            },
            "actions":{
                "reply": "118",
                "retweet": "785.4k",
                "react": "3.3M",
                "share": ""
            }
        }

    },
    {
        "id":"04",
        "avatar": tweetlogo,
        "content": {
            "body": {
                "title": {
                    "author": "Twitter",
                    "detail": "@Twitter",
                    "time": "Oct 4"
                },
                "text":'hello literally everyone.',
                "image": ""
            },
            "actions":{
                "reply": "118.7k",
                "retweet": "785.4k",
                "react": "3.3",
                "share": ""
            }
        }

    },
    {
        "id":"05",
        "avatar": tweetlogo,
        "content": {
            "body": {
                "title": {
                    "author": "CNN",
                    "detail": "@CNN",
                    "time": "7m"
                },
                "text":'',
                "image": ""
            },
            "actions":{
                "reply": "57",
                "retweet": "144",
                "react": "184",
                "share": ""
            }
        }

    }
]
const arr = [];
  return (
    <div className='tweets'>
       {
          arr.map((item)=> <Tweet key={item.id} table={item} />)
        }
    </div>
  )
}
