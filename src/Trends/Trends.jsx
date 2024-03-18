import './Trends.css'
import Search from '../../public/icons/Search.svg'
import Settings from '../../public/icons/Settings.svg'
import More from '../../public/icons/More.svg'
import Times from '../../public/images/times.png'
import Verified from '../../public/icons/Verified.svg'
import Cnn from '../../public/images/cnn.png'
import TwetterLog from '../../public/images/twitter-logo.png'
import { Link } from 'react-router-dom'
export default function Trends(){
    return(
        <>
      <div className='trends'>
      <div id='search'>
            <img src={Search} alt="" />
            <input type="search Twitter" />
        </div>

        <div className='Settings'>
            <h3>Trends for you</h3>
            <img src={Settings} alt="" />
        </div>cd

        <div className='More'>

       <div className='Tweets'>
            <div>
            <p>Trending in turkey</p>
            <h3>#SQUID</h3>
            <p>2,066 Tweets</p>
            </div>

            <div>
            <img src={More} alt="" />
            </div>

        </div>

        <div className='Tweets'>
            <div>
            <p>Trending in turkey</p>
            <h3>#SQUID</h3>
            <p>2,066 Tweets</p>
            </div>

            <div>
            <img src={More} alt="" />
            </div>

        </div>
        <div className='Tweets'>
            <div>
            <p>Trending in turkey</p>
            <h3>#SQUID</h3>
            <p>2,066 Tweets</p>
            </div>

            <div>
            <img src={More} alt="" />
            </div>

        </div>
        <div className='Tweets'>
            <div>
            <p>Trending in turkey</p>
            <h3>#SQUID</h3>
            <p>2,066 Tweets</p>
            </div>

            <div>
            <img src={More} alt="" />
            </div>
           
        </div>
        <Link>Show More</Link>
   </div>

        <div className='parent'>
            <h2>Who to Follow</h2>

            <div className='Verified'>
                <img src={ Times} alt="" />
                <div>
                   <h4> The new york Times</h4>
                   
                    <img src={Verified} alt="" />
                
                   <p>@nytimes</p>
                   
                </div>
                <button className="button">Follow</button>
            </div>

            <div className='Verified'>
                <img src={ Cnn} alt="" />
                <div>
                   <h3> CNN</h3>
                   
                    <img src={Verified} alt="" />
                
                   <p>@CNN</p>
                   
                </div>
                <button className="button">Follow</button>
            </div>

            <div className='Verified'>
                <img src={TwetterLog} alt="" />
                <div>
                   <h3> Twetter</h3>
                    <img src={Verified} alt="" />
                   <p>@Twetter</p>
                </div>
                <button className="button">Follow</button>
            </div>
                
        </div>
        <p> Terms of service privacy policy cokie policy</p>
        <p>Imprint ads info More--- @ 2021 Twitter,inc</p>
</div>
       
        </>
       
        
    )
}

