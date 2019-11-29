import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { addLike, removeLike, deletepost } from "../../actions/post";
import { connect } from "react-redux";
const PostItem = ({
  addLike,
  deletepost,
  removeLike,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => {
  return (
    <div class="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img class="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p class="my-1">{text}</p>
        <p class="post-date">
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
        {showActions && (
          <>
            <button
              type="button"
              class="btn btn-light"
              onClick={e => addLike(_id)}
            >
              <i class="fas fa-thumbs-up"></i>{" "}
              {likes.length > 0 && <span>{likes.length}</span>}
            </button>
            <button
              type="button"
              class="btn btn-light"
              onClick={e => removeLike(_id)}
            >
              <i class="fas fa-thumbs-down"></i>
            </button>
            <Link to={`/post/${_id}`} class="btn btn-primary">
              Discussion{" "}
              {comments.length > 0 && (
                <span class="comment-count">{comments.length}</span>
              )}
            </Link>
            {!auth.loading && user === auth.user._id && (
              <button
                type="button"
                class="btn btn-danger"
                onClick={e => deletepost(_id)}
              >
                <i class="fas fa-times"></i>
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};
PostItem.defaultProps = {
  showActions: true
};
PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletepost: PropTypes.func.isRequired
};

export default connect(state => ({ auth: state.auth }), {
  addLike,
  removeLike,
  deletepost
})(PostItem);
