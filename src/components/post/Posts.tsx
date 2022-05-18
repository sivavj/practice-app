import React from "react";
import { useQueryClient } from "react-query";
import usePosts from "../hooks/usePosts";
import Spinner from "../loader/Spinner";
import { Link } from "react-router-dom";
import { Eye } from "react-bootstrap-icons";


export default function Posts() {
  const queryClient = useQueryClient();

  const { status, data: posts, error, isFetching } = usePosts();

  if (status === "error") {
    return <span>Error Posts : {error.message}</span>;
  }

  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <div className="container mt-5">
      <h1>Posts</h1>
      <div>
        {posts &&
          posts.map((post) => {
            const cachedData = queryClient.getQueryData(`post - ${post.id}`)
            return (
              <p>
                <Link
                  key={post.id}
                  to={`/posts/${post.id}`}
                  style={{textDecoration : 'none'}}
                >
                  {post.id}{' - '}{post.title} {cachedData ? <span style={{color : 'red', paddingLeft: '10px'}}><Eye/></span> : ''}
                </Link>
              </p>
            );
          })}
      </div>
      <div>{isFetching ? "Background Updating..." : " "}</div>
    </div>
  );
}
