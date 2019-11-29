import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Spinner } from "../layout/spinner";
import PropTypes from "prop-types";
import { getPost } from "../../actions/post";
import PostItem from "../posts/PostItem";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);
  return loading || post === null ? (
    <Spinner />
  ) : (
    <>
      <Link to="/posts" className="btn">
        Back to Posts
      </Link>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <div className="comments">
        {post.comments.map(el => (
          <CommentItem key={el._id} comment={el} postId={post._id} />
        ))}
      </div>
    </>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired
};

export default connect(state => ({ post: state.post }), { getPost })(Post);
