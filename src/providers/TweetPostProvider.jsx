import { useState, useEffect } from "react";
import { TweetPostContext } from "../contexts/TweetPostContext";
import { twitterCurrentUserInDB } from "../data/ImagesIcons";


export const TweetPostProvider = ({ children }) => {

   const [updatePost, setUpdatePost] = useState(twitterCurrentUserInDB);
   const [isLoading, setIsLoading] = useState(true);
   const [mesage, setMessage] = useState("Loading...");
  
   useEffect(() => {
      setTimeout(() => {
         fetch('https://66260ec3052332d55321759f.mockapi.io/api/posts/current-user') 
            .then(response => response.json())
            .then(data => {
               setUpdatePost(data);
               setIsLoading(false);
            })
            .catch(err => setMessage('Erreur de connexion avec le serveur'))
      }, 1000)
   }, [])

return (
   <TweetPostContext.Provider value={{ updatePost, setUpdatePost }}>
      {isLoading ? <h1 className="text-3xl mt-12 text-center text-blue-500">{mesage}</h1> : children}
   </TweetPostContext.Provider>
);
};

