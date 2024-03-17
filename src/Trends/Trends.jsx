import './Trends.css'
import Search from '../../public/icons/Search.svg'
import Settings from '../../public/icons/Settings.svg'
import More from '../../public/icons/More.svg'
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
            <h1>Trends for you</h1>
            <img src={Settings} alt="" />
        </div>

        <div className='More'>

       <div className='Tweets'>
            <div>
            <p>Trending in turkey</p>
            <h1>#SQUID</h1>
            <p>2,066 Tweets</p>
            </div>

            <div>
            <img src={More} alt="" />
            </div>

        </div>

        <div className='Tweets'>
            <div>
            <p>Trending in turkey</p>
            <h1>#SQUID</h1>
            <p>2,066 Tweets</p>
            </div>

            <div>
            <img src={More} alt="" />
            </div>

        </div>
        <div className='Tweets'>
            <div>
            <p>Trending in turkey</p>
            <h1>#SQUID</h1>
            <p>2,066 Tweets</p>
            </div>

            <div>
            <img src={More} alt="" />
            </div>

        </div>
        <div className='Tweets'>
            <div>
            <p>Trending in turkey</p>
            <h1>#SQUID</h1>
            <p>2,066 Tweets</p>
            </div>

            <div>
            <img src={More} alt="" />
            </div>
           
        </div>
        <Link>Show More</Link>
   </div>

        <div className=''>
            <h1></h1>
            <button className="button">Follow</button>
        </div>
</div>
       
        </>
       
        
    )
}

