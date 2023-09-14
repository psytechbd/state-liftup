import Header from "./assets/Components/Header/Header"
import Blogs from "./assets/Components/Blogs/Blogs"
import Bookmarks from "./assets/Components/Bookmarks/Bookmarks"
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const addBookmarkbtn = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
}
  return (
    <>
      
      <div className="container mx-auto">
        <Header></Header>
        <div className="flex">
          <div className="w-2/3">
            <Blogs addBookmarkbtn = {addBookmarkbtn}></Blogs>
          </div>
          <div>
            <Bookmarks bookmarks={bookmarks}></Bookmarks>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
