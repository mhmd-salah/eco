import { useGetPostsListQuery } from "../App/features/posts/PostsSlice";
// import { usePosts } from "../CustomHooks";

function Posts() {
  const {data} = useGetPostsListQuery("hello")
  // if(isLoading) return <h1>loading</h1>
  console.log(data)
  return (
    <div className="flex flex-col items-center justify-center m-4 gap-3">
      {data&&data.posts.map(post=><h2>{post.title}</h2>)}
      <h1></h1>
    </div>
  );
}

export default Posts