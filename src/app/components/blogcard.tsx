import Image from "next/image"; 
import Link from "next/link"; 
import { urlForImage } from "../sanity/lib/image"; 

export default function BlogCard({ post }: { post: Post }) {
  return (
    <section className="flex flex-col justify-between h-[30rem] border-4 border-gray-500 rounded bg-light shadow-md hover:scale-105 transition-transform duration-500">
 
        <h1>Travel Blogs</h1>
      <div className="relative h-80">
        <Image
          src={urlForImage(post.image).url()} 
          alt={post.title || "Blog Image"}
          fill
          className="object-cover rounded-t"
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold mb-2 text-white">{post.title}</h2>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.summary}</p> 
        
        
        <Link
          href={`/blog/${post.slug}`} 
          className="block px-4 py-2 text-center bg-blue-500 text-white rounded"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
