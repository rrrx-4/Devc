import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { deleteComment } from "../../action/post";
import { format } from "timeago.js";

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
}) => {
  return (
    <>
      <li className="clearfix ">
        <Link to={`/profile/${user}`}>
          <img src={avatar} className="avatar" alt="" />
        </Link>
        <div className="post-comments bg-light">
          <p
            className="meta"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>
              <span className="mx-3">{format(date)}</span>
              <Link to={`/profile/${user}`}>{name}</Link> says :{" "}
            </span>

            {!auth.loading && user === auth.user._id && (
              <span
                onClick={() => deleteComment(postId, _id)}
                className="float-right text-danger fs-6"
                style={{ cursor: "pointer" }}
              >
                <i className="fas fa-trash"></i>
                <span className="hide-sm">Remove</span>
              </span>
            )}
          </p>

          <p className="text-dark" style={{
            whiteSpace: "pre-wrap",
            wordWrap: 'normal'
          }}>
            {text}
          </p>
          {console.log(text)}
        </div>
      </li>
    </>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);

// {
//   <div className="post bg-white p-1 my-1">
//   <div>
//     <Link to={`/profile/${user}`}>
//       <img className="round-img" src={avatar} alt="" />
//       <h4>{name}</h4>
//     </Link>
//   </div>
//   <div>
//     <p className="my-1">{text}</p>
//     <p className="post-date">Posted on {formatDate(date)}</p>
//
//   </div>
// </div>
// }
