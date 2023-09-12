import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, markReads }) => {
    return (
      <div className="md:w-1/3">
        <div className="bg-cyan-400 p-5 mt-5">
          <h3 className="text-xl font-bold">
            Spent time on read : {markReads} min
          </h3>
        </div>
        <div className="my-5 p-5 bg-gray-200">
          <h2 className="text-2xl font-bold">
            Bookmarked Blogs : {bookmarks.length}
          </h2>

          {bookmarks.map((bookmark) => (
            <Bookmark
              key={bookmark.id}
              bookmark={bookmark}
              markReads={markReads}
            ></Bookmark>
          ))}
        </div>
      </div>
    );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  markReads: PropTypes.number,
};
export default Bookmarks;