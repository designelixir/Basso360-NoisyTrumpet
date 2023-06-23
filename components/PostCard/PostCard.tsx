import { FeaturedImage } from "components/FeaturedImage";
import { Post } from "graphql";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import Continue from "public/icons/continue.svg";
export interface PostCardProps {
  post: Post;
  className?: string;
}

const PostCard = ({ post, className }: PostCardProps) => {
  const { title, excerpt, uri, featuredImage, date, postOptions } = post;
  const { isExternal, externalLink } = postOptions ?? {};

  const formattedDate = new Date(date ?? ``).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className={`${
        className ? className : ``
      } flex flex-col gap-12 p-6 text-primary md:flex-row`}
    >
      <div className={`flex w-full flex-col gap-6`}>
        <FeaturedImage
          image={featuredImage?.node}
          className={`max-h-[239px] w-full overflow-hidden object-cover`}
        />
        <div className={`flex flex-col gap-4 border-b border-brand-brown pb-4`}>
          <h2 className={`font-serif text-2xl font-light text-secondary`}>
            <Balancer>{title}</Balancer>
          </h2>
          <p className={`font-sans text-sm text-gray-700`}>{formattedDate}</p>
        </div>
        <p className={`text-dark text-md font-body`}>{excerpt}</p>
        <Link
          href={isExternal ? externalLink ?? `` : uri ?? ``}
          className={`flex items-center font-sans text-lg uppercase text-secondary`}
        >
          Read More
          <Continue className={`ml-2 inline-block h-8 w-8`} />
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
