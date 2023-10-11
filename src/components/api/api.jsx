import {useState} from "react"

const Api=()=>{
const [posts,setPosts]=useState(null);
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/';


fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    setPosts(data.slice(0,10));
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

    return (
        <>
        <h1>List of posts</h1>
        <ul data-cy="post-ul">

            {  posts
               &&  posts.map(({id,title})=>{
                return (
                    <li data-cy="post-list"> 
                        {id} :
                        {title}
                    </li>
                )
            })
            }

        </ul>
        </>
    )
}

export default Api




