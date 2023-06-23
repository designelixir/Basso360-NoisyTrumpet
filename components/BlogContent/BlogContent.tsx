import { FeaturedImage } from "components/FeaturedImage";
import { Post } from "graphql";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export interface BlogContentProps {
  className?: string;
  post: Post;
}

const BlogContent = ({ className, post }: BlogContentProps) => {
  const { title, content, date, categories, featuredImage } = post;
  const formattedDate =
    date &&
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  const category = categories && categories.nodes[0].name;

  return (
    <article
      className={`${
        className ? className : ``
      } container mx-auto max-w-5xl px-8 pb-12`}
    >
      <header className={`flex flex-col gap-4 py-8`}>
        {/* Title */}
        <h1 className="font-serif text-2xl md:text-4xl">
          <Balancer>{title}</Balancer>
        </h1>
        {/* Details */}
        <div className="flex flex-row items-center gap-4">
          <p className="font-sans text-sm">{formattedDate}</p>
          <p className="rounded-md bg-brand-dark-red px-4 py-1 font-sans text-sm text-white">
            {category}
          </p>
        </div>
        {/* Breadcrumbs */}
        <div className="flex flex-row items-center gap-4">
          <Link
            href="/"
            className="font-sans text-sm text-brand-dark-red underline"
          >
            Home
          </Link>
          <p className="font-sans text-sm">/</p>
          <Link
            href="/blog/"
            className="font-sans text-sm text-brand-dark-red underline"
          >
            Blog
          </Link>
          <p className="hidden font-sans text-sm md:flex">/</p>
          <p className="hidden font-sans text-sm md:flex">{title}</p>
        </div>
      </header>
      <div className={`flex flex-col gap-8`}>
        {/* Featured Image */}
        {featuredImage ? (
          <div className="flex flex-row justify-center">
            <FeaturedImage
              className="w-full"
              imgClassName="mx-auto rounded-md"
              image={featuredImage.node}
              priority
              quality={100}
            />
          </div>
        ) : null}
        {/* Content */}
        {content ? (
          <div
            className="font-body text-lg"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : null}
      </div>
    </article>
  );
};

export default BlogContent;
