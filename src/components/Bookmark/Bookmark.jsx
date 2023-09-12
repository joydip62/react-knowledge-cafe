import PropTypes from 'prop-types'

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
  return (
    <div className="bg-white p-5 mt-3">
      <h6 className="text-lg font-bold">{title}</h6>
    </div>
  );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
};

export default Bookmark
