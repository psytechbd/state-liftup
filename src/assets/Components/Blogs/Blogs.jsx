import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({addBookmarkbtn}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect( () =>{
        fetch ('https://jsonplaceholder.typicode.com/users')
        .then (res => res.json())
        .then ( data => setBlogs(data))
    },[])

    return (
        <div>
            {
                blogs.map( blog => <Blog blog = {blog} key = {blog.id} addBookmarkbtn={addBookmarkbtn}></Blog>)
            }
           
        </div>
    );
};

export default Blogs;