import { FeaturedImage } from "components/FeaturedImage";
import { Press_Release } from "graphql";
import Link from "next/link";
import Continue from "public/icons/continue.svg";

export interface PressCardProps {
  press: Press_Release;
  className?: string;
}

const PressCard = ({ press, className }: PressCardProps) => {
  const { excerpt, featuredImage, date, pressOptions } = press;
  const { externalLink } = pressOptions ?? {};

  const formattedDate = new Date(date ?? ``).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className={`${
        className ? className : ``
      } flex flex-col gap-6 p-6 text-primary md:flex-row`}
    >
      <div className={`flex w-full flex-col md:w-2/3 md:p-8`}>
        <FeaturedImage
          image={featuredImage?.node}
          className={`w-full object-cover`}
        />
      </div>
      <div className={`flex w-full flex-col gap-6 pt-8 md:w-1/3`}>
        {/* {title ? (
          <h2 className={`text-dark font-serif text-3xl font-bold`}>
          <Balancer>{title}</Balancer>
        </h2>
        ) : null} */}
        {date ? (
          <p className={`font-sans text-lg uppercase text-gray-700`}>
            {formattedDate}
          </p>
        ) : null}
        {excerpt ? (
          <div
            className={`border-[1px] border-x-0 border-b-0 border-t-brand-brown pt-6`}
          >
            <p className={`font-body text-lg font-bold text-secondary`}>
              {`"${excerpt}"`}
            </p>
          </div>
        ) : null}
        {externalLink ? (
          <Link
            href={externalLink}
            className={`font-sans text-lg uppercase text-secondary`}
          >
            Continue to Article
            <Continue className={`ml-2 inline-block h-8 w-8`} />
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default PressCard;
