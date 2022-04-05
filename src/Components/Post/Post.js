import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getPost } from "../../action/post";
import PostItem from "../Posts/PostItem";
import CommentItem from "./CommentItem";
import CommentForm from "./CommentForm";

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);
  return loading ? (
    <Spinner />
  ) : post === null ? (
    <h3> </h3>
  ) : (
    <div className="mt-4">
      <Link to="/posts" className="hide-sm" style={{ fontSize: "25px" }}>
        <i className="fas fa-long-arrow-alt-left"></i> {" "}
        Back
      </Link>
      <PostItem post={post} showActions={false} view={true} />

      <CommentForm postId={post?._id} />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="blog-comment mt-5">
              <p className="text-success fs-3 fw-bolder mt-0">
                Comments ( {post.comments?.length} )
              </p>
              <hr />
              <ul className="comments">
                {post.comments.map((comment) => (
                  <CommentItem
                    key={comment?._id}
                    comment={comment}
                    postId={post?._id}
                  />
                ))}
                {post.comments?.length === 0 && (
                  <>
                    <div className="p-3 mb-2 bg-light text-dark">
                      <p className="fs-1 lead   p-3 text-center text-primary">
                        No Discussion
                      </p>
                    </div>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
