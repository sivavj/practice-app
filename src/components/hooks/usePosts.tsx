import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Post } from "../post";

const url = "https://jsonplaceholder.typicode.com/posts";
export default function usePosts() {
  return useQuery<Post[], Error>("posts", async () => {
    const { data } = await axios.get<Post[]>(url);
    return data;
  });
}
