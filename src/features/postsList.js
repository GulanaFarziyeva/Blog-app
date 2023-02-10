import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "./postsSlice";
import PostItem from "./PostItem";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log(posts);

  return (
    <div className="w-[40%] mx-auto my-10">
      <ul>
        {posts.length > 0 &&
          posts.map((item, index) => <PostItem key={index} item={item} />)}
      </ul>
    </div>
  );
};

export default PostsList;
