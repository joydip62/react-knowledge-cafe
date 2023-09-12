import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [markReads, setMarkReads] = useState(0);

  const handelBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = readTime => {
    setMarkReads(markReads + readTime);
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="p-10">
        <Header></Header>
        <div className="md:flex pt-5 gap-5">
          <Blogs
            handelBookmark={handelBookmark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
          <Bookmarks bookmarks={bookmarks} markReads={markReads}></Bookmarks>
        </div>
      </div>
    </div>
  );
}

export default App;
