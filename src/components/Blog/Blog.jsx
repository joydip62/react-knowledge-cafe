import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog }) => {
  const {
    cover_img,
    author,
    author_img,
    title,
    post_date,
    reading_time,
    hashtag,
  } = blog;
  return (
    <div className="py-5">
      <img src={cover_img} alt="" className="w-full" />
      <div className="flex justify-between gap-5 items-center py-5">
        <div className="flex justify-between gap-5 items-center">
          <img src={author_img} alt="" className="w-20" />
          <div>
            <h4>{author}</h4>
            <p>{post_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button className="pl-2">
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold py-2">{title}</h2>
      <p>
        {hashtag.map((hash, idx) => (
          <span key={idx}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <a href="" className="text-blue-700">
        Mark as read
      </a>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
