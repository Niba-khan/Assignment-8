import Image from "next/image";
import { client } from "../../../sanity/lib/client"
import { urlForImage } from "../../../sanity/lib/image"
import { PortableText } from "@portabletext/react";

export const revalidate = 60; 

export async function generateStaticParams() {
  const query = `*[_type == 'post']{ "slug": slug.current }`;
  const slugs = await client.fetch(query);
  return slugs.map((item: { slug: string }) => ({ slug: item.slug }));
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const query = `*[_type == 'post' && slug.current == $slug]{
    title, summary, image, content,
    author->{bio, image, name}
  }[0]`;
  const post = await client.fetch(query, { slug });

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <article className="mt-12 mb-24 px-4 flex flex-col gap-y-8 text-white">

      <h1 className="text-5xl lg:text-7xl font-bold text-White">
        {post.title}
      </h1>


      <Image
        src={urlForImage(post.image).url()}
        width={800}
        height={500}
        alt={post.title}
        className="rounded"
      />

      <section>
        <h1 className="text-4xl font-bold uppercase text-white">Travel`s Guide:</h1>
        <p className="text-lg text-white ">
          {post.summary}
        </p>
      </section>

      <section className="prose dark:prose-invert text-white">
        <PortableText value={post.content} />
      </section>
      <section className="flex gap-4 items-center">
        <Image
          src={urlForImage(post.author.image).url()}
          width={50}
          height={50}
          alt={post.author.name}
          className="rounded-full"
        />
      
      </section>
      <div>
          <h3 className="text-xl font-bold text-white">{post.author.name}</h3>
          <p className="text-sm italic text-white">{post.author.bio}</p>
        </div>
    </article>
  );
}
