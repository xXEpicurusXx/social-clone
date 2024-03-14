import ThreadCard from "@/components/cards/ThreadCard";
import { fetchPosts } from "@/lib/actions/thread.actions";
import { currentUser } from "@clerk/nextjs";
// import Image from "next/image"

export default async function Home() {
  const result = await fetchPosts(1, 30);
  const user = await currentUser();

  console.log(result);

  return (
    <div className="h-screen">
      <h1 className="head-text mb-10">Home</h1>

      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length === 0 ? (
          <p className="no-result">No posts found.</p>
        ) : (
          <>
            {result.posts.map((post) => (
              <ThreadCard
                key={post.id}
                id={post.id}
                currentUserId={user?.id || ""}
                parentId={post.parentId}
                content={post.text}
                author={post.author}
                community={post.community}
                createdAt={post.createdAt}
                comments={post.children}
              />
            ))}
          </>
        )}
      </section>
    </div>
  );
}
