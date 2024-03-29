import { blogData } from "@/components/Constant";
import BlogCard from "@/components/BlogCard";

export default function Component() {
  return (
    <main className="flex-1 ">
      <h1 className=" text-5xl">📝</h1>
      <h1 className="text-4xl font-bold mb-4 ">I write about technology</h1>
      <h6 className="text-lg text-gray-400 mb-14">
        Ever since I was a kid, I've been fascinated by technology.
      </h6>
      {
        blogData.map((post) =>(
           <BlogCard {...post}/>
        ))
      }
    </main>
  );
}
