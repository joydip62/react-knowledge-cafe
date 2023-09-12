import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="p-10">
        <Header></Header>
        <div className="md:flex pt-5 gap-5">
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </div>
  );
}

export default App;
