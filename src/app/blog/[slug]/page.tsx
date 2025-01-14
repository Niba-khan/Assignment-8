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
    <article className="mt-12 mb-24 px-4 flex flex-col gap-y-8">

      <h1 className="text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        {post.title}
      </h1>


      <Image
        src={urlForImage(post.image)}
        width={800}
        height={500}
        alt={post.title}
        className="rounded"
      />

      <section>
        <h2 className="text-2xl font-bold uppercase text-accentDarkPrimary">Summary</h2>
        <p className="text-lg leading-relaxed text-dark/80 dark:text-light/80">
          {post.summary}
        </p>
      </section>

 
      <section className="flex gap-4 items-center">
        <Image
          src={urlForImage(post.author.image)}
          width={50}
          height={50}
          alt={post.author.name}
          className="rounded-full"
        />
        <div>
          <h3 className="text-xl font-bold text-dark dark:text-light">{post.author.name}</h3>
          <p className="text-sm italic text-dark/80 dark:text-light/80">{post.author.bio}</p>
        </div>
      </section>

    
      <section className="prose dark:prose-invert">
        <PortableText value={post.content} />
      </section>
    </article>
  );
}
