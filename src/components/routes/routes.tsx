import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard";
import NotFound from "../NotFound";
import PostDetail from "../post/PostDetail";
import Posts from "../post/Posts";
import Users from "../users/Users";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
