import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../action/post";

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");

  return (
    <div className="container">
      <div className="row">
        <p className="fs-4 fw-bold">Leave a Comment</p>

        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            addComment(postId, { text });

            setText("");
          }}
        >
          <div
            className="bg-default"
            style={{
              backgroundColor: "#04367f",
              padding: "5px",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <textarea
              className="form-control"
              placeholder="Give your answer here "
              value={text}
              name="text"
              onChange={(e) => setText(e.target.value)}
              required
              style={{
                overflow: "hidden",
                wordWrap: "break-word",
                resize: "vertical",
                minHeight: "100px",
                border: "0px solid #797979",
                outline: "0px solid #797979",
                borderRadius: "10px",
                padding: "10px",
              }}
            ></textarea>

            <button
              type="submit"
              className="btn my-2 align-self-end"
              aria-pressed="true"
              value="Submit"
              style={{ backgroundColor: "#fff1ea", color: "#fa7328" }}
            >
              Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};
document
  .querySelector("#floatingTextarea2")
  ?.addEventListener("keydown", (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      // execCommand operations are "Cmd|Ctrl+Z"-able
      // note: execCommand is deprecated and may not work in the future
      document.execCommand("insertText", false, "\n");
      e.preventDefault();
      return false;
    }
  });
export default connect(null, { addComment })(CommentForm);
