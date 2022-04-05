import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../action/post";


const PostForm = ({ addPost, cancel }) => {
  const [text, setText] = useState("");
  return (
    <>
      <div className="card" style={{
        border: "0px"
      }}>
        <div
          style={{
            backgroundColor: "#04367f",
            borderRadius: "15px",
            padding: "5px",
          }}
        >
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              addPost({ text });
              setText("");
            }}
          >
            <div className="d-flex flex-column">
              <textarea
                placeholder="What's in your mind ? Discuss it with community"
                value={text}
                style={{
                  overflow: "hidden",
                  wordWrap: "break-word",
                  resize: "vertical",
                  minHeight: "160px",
                  border: "0px solid #797979",
                  outline: "0px solid #797979",
                  borderRadius: "10px",
                  padding: "10px",
                }}
                name="text"
                rows="5"
                onChange={(e) => setText(e.target.value)}
                required
              ></textarea>

              <div className=" my-2 fs-4 align-self-end">
                <button
                  style={{ color: "#e3423d" }}
                  className="btn"
                  aria-pressed="true" onClick={
                    cancel
                  }>
                  cancel
                </button>

                <button
                  type="submit"
                  className="btn"
                  aria-pressed="true"
                  value="Submit"
                  style={{ backgroundColor: "#fff1ea", color: "#fa7328" }}
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
