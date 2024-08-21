import { usePosts } from "../CustomHooks";

function Posts() {
  const {data:posts,isLoading}= usePosts()
  if(isLoading) return <h1>loading</h1>
  return (
    <div className="flex flex-col items-center justify-center m-4 gap-3">
      {posts&&posts.map(post=><h2>{post.title}</h2>)}
    </div>
  );
}

export default Posts