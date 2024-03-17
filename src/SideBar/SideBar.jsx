import { Link } from "react-router-dom"
import Twitter from "../../public/icons/Twitter.svg"
import HomeFill from "../../public/icons/Home-Fill.svg"
import Explore from "../../public/icons/Explore.svg"
import Notifications from "../../public/icons/Notifications.svg"
import Message from "../../public/icons/Messages.svg"
import Bookmarks from "../../public/icons/Bookmarks.svg"
import List from "../../public/icons/Lists.svg"
import ProfileFill from "../../public/icons/Profile-Fill.svg"
import More from "../../public/icons/More.svg"
import ProfilePhoto from "../../public/icons/Profile-Photo.svg"
import Private from "../../public/icons/Private.svg"
import "./SideBar.css"

export default function SideBar() {
     return (
          <div className="sidebar">
               <div className="sidebar-content">
               <Link to="/">
                    <img src={Twitter} />
               </Link>

               <Link to="/">
                    <div className="side-nav">
                         <img src={HomeFill} />
                         <h1 className="page-title-sidebare">Home</h1>
                    </div>
               </Link>

               <Link to="/">
                    <div className="side-nav">
                         <img src={Explore} />
                         <h1 className="page-title-sidebare">Explore</h1>
                    </div>
               </Link>

               <Link to="/">
                    <div className="side-nav"><img src={Notifications} />
                         <h1 className="page-title-sidebare">Notifications</h1>
                    </div>
               </Link>

               <Link to="/">
                    <div className="side-nav"><img src={Message} />
                    <h1 className="page-title-sidebare">Message </h1>
                    </div>
               </Link>

               <Link to="/">
                    <div className="side-nav"><img src={Bookmarks} />
                    <h1 className="page-title-sidebare">Bookmarks</h1>
                    </div>
               </Link>

               <Link to="/">
                    <div className="side-nav"><img src={List} />
                    <h1 className="page-title-sidebare">List</h1>
                    </div>
               </Link>

               <Link to="/">
                    <div className="side-nav"><img src={More} />
                    <h1 className="page-title-sidebare">More</h1>
                    </div>
               </Link>

               <Link to="/">
                    <div className="side-nav"><img src={ProfileFill} />
                    <h1 className="page-title-sidebare">ProfileFill</h1>
                    </div>

               </Link>
               <button style={{ width: "90%" }} className="button">Tweet</button>

               </div>
               <div className="user-footer">
                    <img src={ProfilePhoto} alt="" />

                    <div className="contenu-footer">
                         Bradley Ortiz<span><img src={Private} alt="" /></span>
                         <p>@Bradley_</p>
                    </div>
               </div>

          </div>

     )
}