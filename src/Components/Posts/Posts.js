import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../action/post";
import Spinner from "../layout/Spinner";
import PostForm from "./PostForm";

import PostItem from "./PostItem";
import { useState } from "react";
import { Button, Divider } from "@material-ui/core";
import { MdPostAdd } from "react-icons/md";
const Posts = ({ getPosts, post: { posts, loading } }) => {
  // this call getposts method
  const [addpost, setaddPost] = useState(true)
  const handleAddPost = function () {
    setaddPost(!addpost)
  }
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3
            className="text_grad_1 fw-bolder"
            style={{
              padding: "30px 5px 10px 5px",
              borderRadius: "8px",
            }}
          >
            <i className="fas fa-user" /> Welcome to the community
          </h3>
          <div>
            {addpost ?
              <Button className="addPostBtn"
                onClick={handleAddPost}>
                <MdPostAdd className="addIcon" />
                Add Post
              </Button> :
              <PostForm cancel={handleAddPost} />}
          </div>



          <p className="fs-4 text-muted fw-bold mt-4 mb-0 p-2"> Join Discussion below </p>
          <Divider />
          <div className="posts">
            {posts.map((post) => (
              <PostItem key={post._id} post={post} view={false} />
            ))}
          </div>
        </>
      )
      }
    </>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { getPosts })(Posts);
