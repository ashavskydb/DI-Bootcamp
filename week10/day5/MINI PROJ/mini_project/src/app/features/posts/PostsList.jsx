import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, fetchPosts, getPostsStatus, getPostsError } from "./postsSlice";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  if (postsStatus === 'loading') return <h2>Loading...</h2>;
  if (postsStatus === 'failed') return <p>{error}</p>;

  return (
    <>
      <h1>Posts</h1>
      <section>
        {posts.map(post => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <ReactionButtons post={post} />
          </article>
        ))}
      </section>
    </>
  );
};

export default PostsList;
