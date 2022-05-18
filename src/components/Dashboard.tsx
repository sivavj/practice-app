import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="container mt-5 text-center">
      <h1>Dashboard</h1>
      <Link to={"/posts"}>Go to Posts</Link>
    </div>
  );
}
