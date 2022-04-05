import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import formatDate from "../../utils/formatDate";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../action/post";
import { Avatar, Button } from "@material-ui/core";
import { MdOutlineTextsms } from "react-icons/md";
const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
  view
}) => (
  <div
    className="bg-white postcard shadow-1"

  >

    <div className="alert d-flex  align-items-center justify-content-md-between">
      <span className="d-flex align-items-center justify-content-md-between">
        <Link to={`/profile/${user}`}>
          <Avatar alt={name + "'s images"} src={avatar} />
        </Link>
        {"  "}
        <span
          style={{
            marginLeft: "10px",
            fontWeight: "500",
            fontSize: "1.4rem",
          }}
        >
          {name}
        </span>
      </span>

      <span>Posted on {formatDate(date)}</span>
    </div>

    <div className="my-1">

      <p style={{
        maxWidth: '100%',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: view ? 'none' : '3',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: view ? "pre-wrap" : "normal",

      }} className="post_txt fs-6 text_blue">
        {text}
      </p>
    </div>

    {showActions && (
      <div className="p-2">
        <button
          onClick={() => addLike(_id)}
          type="button"
          className="btn btn-light"
        >
          <i className="fas fa-thumbs-up" />{" "}
          <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
        </button>
        <button onClick={() => removeLike(_id)} className="btn btn-light">
          <i className="fas fa-thumbs-down" />
        </button>
        <Link to={`/posts/${_id}`} className="btn btn-primary">
          < MdOutlineTextsms /> Discussion{" "}
          {comments.length > 0 && (
            <span className="comment-count">{comments.length}</span>
          )}
        </Link>
        {!auth.loading && user === auth.user._id && (
          <Button
            onClick={() => deletePost(_id)}
            className="bg_light_blue  text-danger mt-1 "
            style={{ border: "none" }}
          >
            Delete
          </Button>
        )}
      </div>
    )}
  </div>
);

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
