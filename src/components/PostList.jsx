import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h2 style={{ textAlign: "center" }}>There is no posts</h2>;
  }
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      {posts.map((post, index) => (
        <PostItem
          number={index + 1}
          remove={remove}
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};

export default PostList;
