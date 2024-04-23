import React, { useEffect, useState } from "react";
import { twitterCurrentUserInDB } from "../../../data/ImagesIcons";
import Tweet from '../../../components/tweets/Tweet';

const Posts = () => {

   const [db, setDB] = useState(twitterCurrentUserInDB);
   const [isLoading, setIsLoading] = useState(true);
   const [message, setMessage] = useState("Loading...");

   useEffect(function () {
      setTimeout(function () {
         fetch('https://66260ec3052332d55321759f.mockapi.io/api/posts/current-user')
            .then(reponse => reponse.json())
            .then(data => { 
               setDB(data);
               setIsLoading(false)
            })
            .catch(err => setMessage('erreur de conexion au serveur'))
      }, 1000)  
   }, [])

   





   return (
      <>
         {
            isLoading ? <h1 className="text-3xl mt-12 text-center text-blue-500">{message}</h1> : (
               db
                  .filter(t => t.nickname == '@bradley')
                  .map((tweet, i) => (
                  <Tweet
                     key={i.toString('2')}
                     tweetsDB={tweet}
                  />
               ))
            )
         }
      </>
   );
};

export default Posts; 