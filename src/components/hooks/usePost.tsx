import axios from "axios";
import { useQuery } from "react-query";
import { Post } from "../post";

export const getPostById = async (id: number) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
};

export default function usePost(postId: number) {
  return useQuery<Post, Error>(`post - ${postId}`, () => getPostById(postId));
}
