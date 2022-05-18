import React from "react";
import { useParams } from "react-router-dom";
import usePost from "../hooks/usePost";
import Spinner from "../loader/Spinner";
import NotFound from "../NotFound";

export default function Post(): JSX.Element {
  const { postId } = useParams();

  if (postId === undefined || isNaN(Number(postId))) {
    return <NotFound />;
  }
  const {
    status,
    data: post,
    isFetching,
  } = usePost(postId as unknown as number);

  if (status === "error") {
    return <NotFound />;
  }
  if (status === "loading") {
    return <Spinner />;
  }
  return (
    <div>
      {post && (
        <div className="col-4 mx-auto mt-5">
          <div className="card border-primary">
            <div className="card-header">
              <h5 className="card-title text-primary text-center">
                {post.title}
              </h5>
            </div>
            <div className="card-body">
              <p className="card-text text-dark">{post.body}</p>
            </div>
          </div>
          <div>{isFetching ? "Background Updating..." : " "}</div>
        </div>
      )}
    </div>
  );
}
